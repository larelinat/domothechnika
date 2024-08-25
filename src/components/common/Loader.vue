<script setup lang="ts">
  // @ts-ignore
  import RingLoader from "vue-spinner/src/RingLoader.vue";

  const props = defineProps<{
    color: string;
  }>();
</script>

<template>
  <div class="loading-overlay">
    <ring-loader :loading="true" :color="color"></ring-loader>
  </div>
</template>

<style scoped>
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    gap: 20px;
  }
</style>
