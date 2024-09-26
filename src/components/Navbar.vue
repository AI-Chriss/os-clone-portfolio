<template>
  <div class="navbar" @click.self="toggleDropdown">
    <div v-if="isDropdownShown" class="dropdown">
      <Icon
        v-for="(icon, index) in icons"
        :key="icon.title"
        :title="icon.title"
        :customIcon="icon.customIcon"
        :iconType="icon.iconType"
        @open-window="openWindow(icon.content)"
        @dblclick.stop="toggleDropdown"
      />
    </div>
    <div class="navbar__line">
      <i class="fa-solid fa-paper-plane" @click.stop="toggleDropdown"></i>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, onMounted, onBeforeUnmount } from 'vue';
import Icon from './Icon.vue';

const isDropdownShown = ref(false);

const toggleDropdown = () => {
  isDropdownShown.value = !isDropdownShown.value;
};

const closeDropdown = (event) => {
  const dropdown = event.target.closest('.dropdown');
  const navbarLine = event.target.closest('.navbar__line');

  if (!dropdown && !navbarLine) {
    isDropdownShown.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeDropdown);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', closeDropdown);
});

const openWindow = inject('openWindow');

const icons = ref([
  {
    title: 'Document',
    content: '<!-- Content -->',
    customIcon: 'fa-solid fa-file navbarClass',
    iconType: 'desktopFile'
  },
  {
    title: 'Document',
    content: '<!-- Content -->',
    customIcon: 'fa-solid fa-file navbarClass',
    iconType: 'desktopFile'
  },
  {
    title: 'Document',
    content: '<!-- Content -->',
    customIcon: 'fa-solid fa-file navbarClass',
    iconType: 'desktopFile'
  },
  {
    title: 'Document',
    content: '<!-- Content -->',
    customIcon: 'fa-solid fa-file navbarClass',
    iconType: 'desktopFile'
  },
]);
</script>

<style scoped>
.navbar {
  position: absolute;
  z-index: 1;
  width: 100%;
  bottom: 0;
}

.navbar__line {
  background: #d2d3d5;
  width: 100%;
}

i {
  cursor: pointer;
  padding: 1rem;
  font-size: 2rem;
}

i:hover {
  color: blue;
  background: #f4f5f7;
}

.dropdown {
  background: #d2d3d5;
  width: max-content;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  max-height: 16rem;
  overflow-y: scroll;
  border-bottom: 1px solid grey;
  scrollbar-width: thin;
  scrollbar-color: black white;
}

.dropdown * {
  width: 20rem;
}

.icon {
 display: flex;
 flex-direction: row;
 column-gap: 0.4rem;
 padding: 1rem;
}

.icon:hover {
  color: blue;
  background: #f4f5f7;
}

  @media (max-width: 768px) {
    .navbar {
      z-index: 0;
    }
  }
</style>

