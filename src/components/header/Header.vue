<script setup lang="ts">
  import search from "../../assets/search.png";
  import {useNewsStore} from "../../store/newsStore.ts";
  import {ref} from "vue";
  import {debounce} from "lodash";

  const newsStore = useNewsStore();
  const searchQuery = ref('');

  const onSearch = () => {
    newsStore.setSearchQuery(searchQuery.value);
  };

  const debouncedSearch = debounce(onSearch, 200);
</script>

<template>
  <header class="search">
    <input placeholder="Поиск" type="text" class="search-input" v-model="searchQuery" @input="debouncedSearch"/>
    <img :src="search" alt="search" class="search-icon"/>
  </header>
</template>

<style scoped>
  .search {
    display: flex;
    align-items: stretch;
    position: relative;
  }

  .search-input {
    width: 100%;
    padding: 16px 18px;
    height: 45px;
    border: 2px solid #4D4D4D;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20.8px;
    box-sizing: border-box;
  }

  .search-input::placeholder {
    font-size: 16px;
    font-weight: 500;
    line-height: 20.8px;
    color: #4D4D4D;
  }

  .search-icon {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }


</style>