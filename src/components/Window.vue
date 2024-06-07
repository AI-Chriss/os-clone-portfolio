<template>
  <div class="window" :class="{ maximize: isMaximized }">
    <div class="window__navbar">
      <i class="close fa-solid fa-xmark" @click="$emit('close')"></i>
      <i :class="sizeTogglerClass" @click="toggleSize"></i>
    </div>
    <div class="window__body" v-html="content"></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  content: String
});

const isMaximized = ref(false);

const toggleSize = () => {
  isMaximized.value = !isMaximized.value;
};

const sizeTogglerClass = computed(() => {
  return {
    'fa-solid': true,
    'fa-maximize': !isMaximized.value,
    'fa-window-minimize': isMaximized.value
  };
});
</script>

<style scoped>
.window {
  position: absolute;
  background: #d2d3d5;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
}

.window__navbar {
  padding: 0.4rem;
  background: grey;
  display: flex;
}

.window__navbar i {
  font-size: 1rem;
  padding: 0.2rem 0.4rem;
}

.window__navbar i:hover {
  background: lightgrey;
  cursor: pointer;
}

.window__body {
  overflow-y: scroll;
  padding: 2rem 4rem;
  max-height: 36rem;
}

.maximize {
  width: 100%;
  height: 100%;
  transform: translate(0);
  top: 0;
  left: 0;
}
</style>
