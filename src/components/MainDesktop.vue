<template>
  <div>
    <Desktop />
    <Navbar />
    <Window v-if="currentWindowContent" :content="currentWindowContent" @close="closeWindow" />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import Desktop from './Desktop.vue';
import Navbar from './Navbar.vue';
import Window from './Window.vue';

const currentWindowContent = ref(null);

const openWindow = (content) => {
  currentWindowContent.value = content;
};

const closeWindow = () => {
  currentWindowContent.value = null;
};

provide('openWindow', openWindow);
</script>

<style>

</style>