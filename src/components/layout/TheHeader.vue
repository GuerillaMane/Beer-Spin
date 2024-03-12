<template>
  <header class="header">
    <nav class="nav">
      <div class="container-row">
        <img src="../../assets/img/beer_mug.png" alt="WorkLance icon" />

        <h1>
          <router-link :to="{ name: 'Home' }">Beer Spin</router-link>
        </h1>
      </div>

      <div class="nav-menu" :class="{ 'show-menu': isMobileMenuShown }">
        <ul class="nav-list">
          <li>
            <router-link :to="{ name: 'BeerSpinner' }">Spin the Wheel</router-link>
          </li>
          <!-- <li>
            <router-link :to="{name: 'BeerList'}">Beer List</router-link>
          </li> -->
        </ul>

        <div class="nav-close" v-if="isMobileMenuShown" @click="showMobileMenu">
          <font-awesome-icon icon="times"></font-awesome-icon>
        </div>
      </div>

      <div class="nav-toggle" @click="showMobileMenu">
        <font-awesome-icon icon="bars"></font-awesome-icon>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isMobileMenuShown = ref(false);

function showMobileMenu() {
  isMobileMenuShown.value = !isMobileMenuShown.value;
}
</script>

<style scoped lang="scss">
h1 {
  font-size: 28px;
}
.header {
  height: 7rem;
  // box-shadow: 0 -6px 10px 5px rgba(0, 0, 0, 0.5);
  background-color: $bg-color-sup;
}

.container-row {
  justify-content: center;
  align-items: center;

  img {
    height: 6rem;
  }

  img:hover {
    transition-duration: 1s;
    transition-property: transform;
    transform: rotate(720deg);
    -webkit-transform: rotate(720deg);
  }

  h2 {
    a:hover,
    a:active,
    a.router-link-active {
      border-color: transparent;
    }
  }
}

.nav {
  height: inherit;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-inline: 4em;

  &-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      margin: 0 0.5rem;
    }

    a {
      text-decoration: none;
      color: black;
      font-weight: 400;
      display: inline-block;
      padding: 0.5rem 1rem;
      border: 1px solid transparent;
    }

    a:active,
    a:hover,
    a.router-link-active {
      border-bottom: 1px solid black;
    }

    a:visited {
      color: black;
    }
  }
}

.show-menu {
  top: 0;
}
</style>
