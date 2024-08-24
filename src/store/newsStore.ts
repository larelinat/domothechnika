import {defineStore} from "pinia";
import {NewsColors} from "../assets/newsColors/newsColor.ts";
interface INewsItemFromServer {
    title: string;
    shortText: string;
    datePublish: string;
    image: string;
    slug: string;
}

interface ISeoFromServer {
    title: string;
    description: string;
    keywords: string;
    h1: string;
    canonical: string;
    seoText: string;
}

interface IDataFromServer {
    status: string;
    message: string
    data: {
        news: INewsItemFromServer[];
        seo: ISeoFromServer;
        pageCount: number;
    }
}

export interface INewsItem extends Omit<INewsItemFromServer, 'datePublish'> {
    datePublish: Date;
    page: number;
}
interface INewsState {
    news: INewsItem[];
    pages: Record<number, NewsColors>;
    loading: boolean;
    error: string | null;
    searchQuery: string;
    pageCount: number;
}

export const useNewsStore = defineStore('news', {
    state: (): INewsState => ({
        news: [],
        pages: {},
        loading: false,
        error: null,
        searchQuery: '',
        pageCount: 0,
    }),
    actions: {
        async fetchNews(page: number = 1, color: NewsColors) {
            if (this.pages[page] && this.pages[page] === color) return;

            this.loading = true;
            try {
                const response = await fetch(`https://domotekhnika.ru/api/v1/news?page=${page}`);
                const newsItems: IDataFromServer = await response.json();
                const newNews = newsItems.data.news.map((item) => ({
                    ...item,
                    datePublish: new Date(item.datePublish),
                    color,
                    page,
                }));

                this.news = [
                    ...this.news.filter((item) => item.page !== page),
                    ...newNews,
                ].sort((a, b) => a.page - b.page);

                this.pages[page] = color;
                this.pageCount = newsItems.data.pageCount;
            } catch (error: Error | any) {
                this.error = error.message;
            }
            this.loading = false;
        },
        setSearchQuery(query: string) {
            this.searchQuery = query;
        },
        getRandomPage() {
            return Math.floor(Math.random() * 10) + 1;
        },
    },
    getters: {
        filteredNews: (state) => {
            if (!state.searchQuery) {
                state.news.filter((item) =>
                    item.image && item
                );
            }
            return state.news.filter((item) =>
                item.image && item.shortText.toLowerCase().includes(state.searchQuery.toLowerCase())
            );
        },
    },
})