<template>
  <div class="no-select">
    <Desktop />
    <Navbar />
    <Window
      v-for="(window, index) in openWindows"
      :key="window.id"
      :content="window.content"
      :id="window.id"
      @close="closeWindow(window.id)"
    />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import Desktop from './Desktop.vue';
import Navbar from './Navbar.vue';
import Window from './Window.vue';

const openWindows = ref([]);

const openWindow = (content) => {
  const windowId = Date.now();
  openWindows.value.push({ id: windowId, content });
};

const closeWindow = (id) => {
  openWindows.value = openWindows.value.filter(window => window.id !== id);
};

provide('openWindow', openWindow);
</script>

<style>
  .no-select {
    user-select: none; /* Wyłącza zaznaczanie tekstu */
    -webkit-user-select: none; /* Dla przeglądarek Webkit (Safari, Chrome) */
    -moz-user-select: none; /* Dla Firefox */
    -ms-user-select: none; /* Dla Internet Explorer i Edge */
  }
</style>