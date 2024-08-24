<script setup lang="ts">

  import {useNewsStore} from "../../store/newsStore.ts";
  import {onMounted, ref} from "vue";
  import Loader from "../common/Loader.vue";
  import {NewsColors} from "../../assets/newsColors/newsColor.ts";
  import NewsItem from "./NewsItem.vue";
  import NewsButtons from "./NewsButtons.vue";

  const newsStore = useNewsStore();
  const loaderColor = ref(NewsColors.green);
  const fetchRandomNews = (color: NewsColors, page: number = newsStore.getRandomPage()) => {
    console.log(page);
    loaderColor.value = color;
    newsStore.fetchNews(page, color);
  };

  onMounted(() => {
    fetchRandomNews(NewsColors.green, 7);
  });
</script>

<template>
  <div class="news">

    <div v-if="newsStore.error">{{ newsStore.error }}</div>
    <div class="news-list">
      <Loader :color="loaderColor" v-if="newsStore.loading"/>
      <NewsItem v-for="item in newsStore.filteredNews" :key="item.slug" :item="item" :color="newsStore.pages[item.page]"/>
    </div>
    <NewsButtons :fetch-random-news="fetchRandomNews"/>
  </div>
</template>

<style scoped>

  .news {
    padding-top: 48px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .news-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(231px, 1fr));
    grid-auto-rows: 366px;
    gap: 24px;
    position: relative;
  }
  
  @media (max-width: 581px) {
    .news {
      padding-top: 16px;
      gap: 18px;
    }

    .news-list {
      gap: 12px;
    }
  }

</style>