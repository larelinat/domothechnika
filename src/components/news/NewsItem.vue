<script setup lang="ts">

import {NewsColors, NewsIcons} from "../../assets/newsColors/newsColor.ts";
import {INewsItem} from "../../store/newsStore.ts";
import {formatDate} from "../../utils/formatDate.ts";
import {computed} from "vue";

const props = defineProps<{
  item: INewsItem,
  color: NewsColors
}>();

const cardDateStyle = computed(() => ({
  color: props.color
}));

</script>

<template>
  <div class="card">
    <div class="card-image">
      <img :src="item.image" alt="news"/>
    </div>
    <div class="card-content">
      <div class="card-description">
        <h3 class="card-title">{{ item.shortText }}</h3>
      </div>
      <div class="card-bottom">
        <component :is="NewsIcons[color]" :icon-color="color" class="card-icon"/>
        <span class="card-date" :style="cardDateStyle">{{ formatDate(item.datePublish) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    font-weight: 700;
    border-radius: 16px;
    border-width: 0;
    background: #F5F5F5;
    overflow: hidden;
    color: #000000;
  }

  .card-image {
    height: 217px;
  }

  .card-image img {
    width: 100%;
    height: 100%;
    /*object-fit: cover;*/
  }

  .card-content {
    display: flex;
    padding: 22px 24px 24px 24px;
    gap: 10px;
    flex-direction: column;
  }

  .card-description {
    height: 69px;
  }

  .card-title {
    margin: 0;
    line-height: 23.4px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card-bottom {
    display: flex;
    justify-content: space-between;
  }

  .card-icon {
    width: 24px;
    height: 24px;
  }

  .card-date {
    line-height: 21.6px;
  }

</style>