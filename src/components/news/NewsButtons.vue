<script setup lang="ts">

import {NewsColors, NewsIcons} from "../../assets/newsColors/newsColor.ts";
import {computed} from "vue";
defineProps<{
  fetchRandomNews: (color: NewsColors) => void;
}>();
const greenButtonStyle = computed(() => ({
  backgroundColor: NewsColors.green,
  color: "#FFFFFF"
}));

const pinkButtonStyle = computed(() => ({
  backgroundColor: NewsColors.pink,
  color: "#FFFFFF"
}));

const orangeButtonStyle = computed(() => ({
  backgroundColor: NewsColors.orange,
  color: "#FFFFFF"
}));

</script>

<template>
  <div class="buttons">
    <button class="button" :style="greenButtonStyle" @click="fetchRandomNews(NewsColors.green)">Загрузить <component :is="NewsIcons[NewsColors.green]" icon-color="#FFFFFF"/></button>
    <button class="button" :style="pinkButtonStyle" @click="fetchRandomNews(NewsColors.pink)">Загрузить <component :is="NewsIcons[NewsColors.pink]" icon-color="#FFFFFF"/></button>
    <button class="button" :style="orangeButtonStyle" @click="fetchRandomNews(NewsColors.orange)">Загрузить <component :is="NewsIcons[NewsColors.orange]" icon-color="#FFFFFF"/></button>
  </div>
</template>

<style scoped>
  .buttons {
    display: flex;
    gap: 29px;
    justify-content: center;
    flex-wrap: wrap;
    align-items: stretch;
  }

  .button {
    border-radius: 36px;
    display: flex;
    padding: 16px 32px;
    gap: 10px;
    border-width: 0;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 20.8px;
    cursor: pointer;
    justify-content: center;
  }

  @media(max-width: 581px) {
    .buttons {
      column-gap: 8px;
      row-gap: 18px;
    }
    .button {
      flex: 1;
    }
  }
</style>