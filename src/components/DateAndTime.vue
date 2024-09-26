<template>
  <div>
    <p> {{ currentTime }} </p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const currentTime = ref(new Date().toLocaleString());

// Funkcja do aktualizacji czasu
const updateCurrentTime = () => {
  currentTime.value = new Date().toLocaleString();
};

let intervalId;

onMounted(() => {
  intervalId = setInterval(updateCurrentTime, 1000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
  
</script>

<style scoped>
  p {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1.4rem;
    }
  }
</style>