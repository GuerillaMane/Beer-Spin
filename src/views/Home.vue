<template>
  <div class="container-column">
    <h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </h2>
    <a class="container-row" @click="navigateToSpinner">
      <img src="../assets/img/spin_wheel.png" alt="Spin Wheel" />
      <h1>Spin the wheel!</h1>
    </a>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function navigateToSpinner() {
  router.push({ name: 'BeerSpinner' });
}
</script>

<style scoped lang="scss">
.container-column {
  justify-content: center;
  align-items: center;
  gap: 2rem;

  a {
    align-items: center;
    gap: 1.25rem;
    cursor: pointer;

    padding: 0.75rem 1.15rem;
    background-color: $el-main;
    border-radius: 45px;

    img {
      height: 4rem;
    }
  }

  a:hover {
    img {
      transition-duration: 1.2s;
      transition-property: transform;
      transform: rotate(720deg);
      -webkit-transform: rotate(720deg);
    }
  }
}
</style>
