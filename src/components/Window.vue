<template>
  <div 
    class="window" 
    :class="{ maximize: isMaximized }"
    :style="windowStyle"
  >
    <div 
      class="window__navbar"
      @mousedown="startDragging"
    >
      <i class="close fa-solid fa-xmark" @click="$emit('close')"></i>
      <i :class="sizeTogglerClass" @click="toggleSize"></i>
    </div>
    <div 
      class="window__body" 
      v-html="content"
      :class="{ maximizeBody: isMaximized }"
    ></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  content: String
});

// Window state
const isMaximized = ref(false);

const windowX = ref(0);
const windowY = ref(0);

const toggleSize = () => {
  if (isMaximized.value) {
    
    // Restore the window's original position and size
    windowX.value = savedPosition.x;
    windowY.value = savedPosition.y;
  } else {
    // Save the current position before maximizing
    savedPosition.x = windowX.value;
    savedPosition.y = windowY.value;
    // Reset position for maximizing
    windowX.value = 0;
    windowY.value = 0;
  }
  isMaximized.value = !isMaximized.value;
};

const savedPosition = {
  x: 0,
  y: 0
};

const sizeTogglerClass = computed(() => {
  return {
    'fa-solid': true,
    'fa-maximize': !isMaximized.value,
    'fa-window-minimize': isMaximized.value
  };
});

  // Funkcja do sprawdzenia szerokości okna
  const checkWindowSize = () => {
    isMaximized.value = window.innerWidth <= 768;
  };

// Movable window logic
const isDragging = ref(false);
const dragStartX = ref(0);
const dragStartY = ref(0);

const windowStyle = computed(() => {
  return {
    top: isMaximized.value ? '0' : '',
    left: isMaximized.value ? '0' : '',
    width: isMaximized.value ? '100%' : '',
    height: isMaximized.value ? '100%' : '',
    transform: `translate(${windowX.value}px, ${windowY.value}px)`
  };
});

const startDragging = (event) => {
  if (isMaximized.value) return; // Disable dragging when maximized
  isDragging.value = true;
  dragStartX.value = event.clientX - windowX.value;
  dragStartY.value = event.clientY - windowY.value;
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', stopDragging);
  document.addEventListener('touchmove', onMouseMove);
  document.addEventListener('touchend', stopDragging);
};

const onMouseMove = (event) => {
  if (!isDragging.value) return;
  windowX.value = event.clientX - dragStartX.value;
  windowY.value = event.clientY - dragStartY.value;
};

const stopDragging = () => {
  isDragging.value = false;
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', stopDragging);
  document.addEventListener('touchmove', onMouseMove);
  document.addEventListener('touchend', stopDragging);
};

onMounted(() => {
  checkWindowSize(); // Sprawdzenie rozmiaru po zamontowaniu
  document.addEventListener('mouseup', stopDragging);
  document.addEventListener('touchmove', stopDragging);
});

onBeforeUnmount(() => {
  document.removeEventListener('mouseup', stopDragging);
  document.addEventListener('touchmove', stopDragging);
});
</script>

<style scoped>
body {
  overflow: hidden;
}

.window {
  position: absolute;
  background: white;
  top: 5%;
  left: 15%;
  width: 60%;
  border: 1px solid black;
  transition: all 0.3s ease;
}

.window__navbar {
  padding: 0.4rem;
  background: grey;
  display: flex;
  cursor: grabbing;
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
  padding: 2rem 2rem 8rem 2rem;
  max-height: 70vh;
}

.maximize {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.maximizeBody {
  max-height: 100vh;
}

</style>

