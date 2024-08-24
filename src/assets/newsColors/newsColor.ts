import GreenIcon from "./icons/GreenIcon.vue";
import OrangeIcon from "./icons/OrangeIcon.vue";
import PinkIcon from "./icons/PinkIcon.vue";
export enum NewsColors {
    green = '#378B60',
    orange = '#FB9600',
    pink = '#FF00B8',
}

export const NewsIcons: Record<NewsColors, any> = {
    [NewsColors.green]: GreenIcon,
    [NewsColors.orange]: OrangeIcon,
    [NewsColors.pink]: PinkIcon,
};