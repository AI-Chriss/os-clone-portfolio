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

const openWindow = inject('openWindow');

const icons = ref([
  {
    title: 'CV',
    content: `<h2>Curriculum Vitae</h2><p><strong>Personal Information:</strong><br>Name: John Doe<br>Date of Birth: January 1, 1990<br>Address: 123 Main Street, Cityville<br></p><h3>Education</h3><p><strong>University of Example:</strong><br>Bachelor of Science in Computer Science<br>Graduation Date: May 2012<br></p><h3>Work Experience</h3><p><strong>Software Developer</strong><br>Example Company, Cityville<br>January 2013 - Present<br>Responsibilities: Developing and maintaining software applications.</p>
    <br>
    <h2>Curriculum Vitae</h2><p><strong>Personal Information:</strong><br>Name: John Doe<br>Date of Birth: January 1, 1990<br>Address: 123 Main Street, Cityville<br></p><h3>Education</h3><p><strong>University of Example:</strong><br>Bachelor of Science in Computer Science<br>Graduation Date: May 2012<br></p><h3>Work Experience</h3><p><strong>Software Developer</strong><br>Example Company, Cityville<br>January 2013 - Present<br>Responsibilities: Developing and maintaining software applications.</p>
    <br>
    <h2>Curriculum Vitae</h2><p><strong>Personal Information:</strong><br>Name: John Doe<br>Date of Birth: January 1, 1990<br>Address: 123 Main Street, Cityville<br></p><h3>Education</h3><p><strong>University of Example:</strong><br>Bachelor of Science in Computer Science<br>Graduation Date: May 2012<br></p><h3>Work Experience</h3><p><strong>Software Developer</strong><br>Example Company, Cityville<br>January 2013 - Present<br>Responsibilities: Developing and maintaining software applications.</p>`,
    customIcon: 'fa-solid fa-file desktopClass',
    iconType: 'desktopFile'
  },
  {
    title: 'Portfolio',
    content: `<h2>Portfolio</h2><h3>Web Development Projects</h3><ul><li><strong>Project 1:</strong> Responsive Portfolio Website<br>Description: A portfolio website showcasing web development skills.<br>Technologies: HTML, CSS, JavaScript</li><li><strong>Project 2:</strong> E-commerce Website<br>Description: An online store with product listings and shopping cart functionality.<br>Technologies: HTML, CSS, JavaScript, PHP</li></ul><h3>Graphic Design Projects</h3><ul><li><strong>Project 3:</strong> Logo Design for XYZ Company<br>Description: Designed a modern logo for a local business.<br>Tools: Adobe Illustrator</li><li><strong>Project 4:</strong> Poster for Charity Event<br>Description: Created a visually appealing poster for a charity event.<br>Tools: Adobe Photoshop</li></ul>`,
    customIcon: 'fa-solid fa-file desktopClass',
    iconType: 'desktopFile'
  },
  {
    title: 'Photo',
    content: `<img style="max-width: 100%;" src="./src/images/photo1.jpg">`,
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
}
  
.icon_wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.icon_wrapper *:hover {
  background: lightgrey;
}

.dateAndTime {
  top: 0;
}
</style>
