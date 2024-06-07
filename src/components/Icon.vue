<template>
  <div 
    v-if="iconType === 'desktopFile'"
    class="icon" @dblclick="openWindow">
    <i 
      :class="customIcon"
    >
    </i>
    <p>{{ title }}</p>
  </div>
  <div 
    v-else
    class="icon" @dblclick="openRockPaperScissors">
    <i 
      :class="customIcon"
    >
    </i>
    <p>{{ title }}</p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
  import { useRouter } from 'vue-router';

const props = defineProps({
  title: String,
  customIcon: String,
  iconType: String
});

const emits = defineEmits(['open-window']);

const openWindow = () => {
  emits('open-window');
};

const router = useRouter();
  
const openRockPaperScissors = () => {
  router.push('/rock-paper-scissors'); // Przykładowe przekierowanie na mini grę
};

</script>

<style scoped>
.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.desktopClass {
  font-size: 3rem;
}

.navbarClass {
  font-size: 2rem;
}
</style>

