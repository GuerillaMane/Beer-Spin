<template>
  <the-header></the-header>

  <main>
    <router-view v-slot="{ Component }">
      <transition name="bounce" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router';
import TheHeader from './components/layout/TheHeader.vue';
</script>

<style scoped>
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
