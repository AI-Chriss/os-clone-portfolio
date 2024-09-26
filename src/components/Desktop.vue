<template>
  <main class="desktop">
    <div class="icon_wrapper">
      <Icon
        v-for="(icon, index) in icons"
        :key="icon.title"
        :title="icon.title"
        :customIcon="icon.customIcon"
        :iconType="icon.iconType"
        @open-window="openWindow(icon.content)"
      />
    </div>
    <DateAndTime class="dateAndTime"/>
  </main>
</template>

<script setup>
import { ref, inject } from 'vue';
import Icon from './Icon.vue';
import DateAndTime from './DateAndTime.vue';
import bioContent from './iconsContent/bioIconContent.js'
import portfolioContent from './iconsContent/portfolioIconContent.js'

const openWindow = inject('openWindow');

const icons = ref([
  {
    title: 'Bio',
    content: bioContent,
    customIcon: 'fa-solid fa-file desktopClass',
    iconType: 'desktopFile'
  },
  {
    title: 'Portfolio',
    content: portfolioContent,
    customIcon: 'fa-solid fa-file desktopClass',
    iconType: 'desktopFile'
  },
  {
    title: 'Photo',
    content: `<img style="max-width: 100%;" src="/images/photo1.jpg">`,
    customIcon: 'fa-solid fa-laptop desktopClass',
    iconType: 'desktopFile'
  },
  {
    title: 'Rock Paper Scissors',
    content: '<!-- Content -->',
    customIcon: 'fa-solid fa-hand-scissors desktopClass',
    iconType: 'nonDesktopFile'
  }
]);
</script>

<style scoped>
.desktop {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  overflow: hidden;
}

.icon_wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.icon_wrapper *:hover {
  background: lightgrey;
}

@media (max-width: 768px) {
  .dateAndTime {
    position: absolute;
    bottom: 5rem;
    right: 2rem;
  }
}
</style>

