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
    title: 'CV',
    content: `<h2>TEST IKONY</h2><p><strong>Personal Information:</strong><br>Name: John Doe<br>Date of Birth: January 1, 1990<br>Address: 123 Main Street, Cityville<br></p><h3>Education</h3><p><strong>University of Example:</strong><br>Bachelor of Science in Computer Science<br>Graduation Date: May 2012<br></p><h3>Work Experience</h3><p><strong>Software Developer</strong><br>Example Company, Cityville<br>January 2013 - Present<br>Responsibilities: Developing and maintaining software applications.</p>`,
    customIcon: 'fa-solid fa-file navbarClass',
    iconType: 'desktopFile'
  },
  {
    title: 'Portfolio',
    content: `<h2>Portfolio</h2><h3>Web Development Projects</h3><ul><li><strong>Project 1:</strong> Responsive Portfolio Website<br>Description: A portfolio website showcasing web development skills.<br>Technologies: HTML, CSS, JavaScript</li><li><strong>Project 2:</strong> E-commerce Website<br>Description: An online store with product listings and shopping cart functionality.<br>Technologies: HTML, CSS, JavaScript, PHP</li></ul><h3>Graphic Design Projects</h3><ul><li><strong>Project 3:</strong> Logo Design for XYZ Company<br>Description: Designed a modern logo for a local business.<br>Tools: Adobe Illustrator</li><li><strong>Project 4:</strong> Poster for Charity Event<br>Description: Created a visually appealing poster for a charity event.<br>Tools: Adobe Photoshop</li></ul>`,
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
  overflow: scroll;
  border-bottom: 1px solid grey;
}
  
.dropdown * {
  width: 20rem;
}

/* Class inside imported Icon.vue component */
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
  
</style>
