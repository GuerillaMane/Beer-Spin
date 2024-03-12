<template>
  <section class="container-column">
    <div class="roulette">
      <div class="roulette-selector"></div>
      <div class="roulette-wheel">
        <ul class="roulette-wheel-items">
          <li v-for="item in items" :key="item">
            {{ item }}
            <!-- <img :src="item.link" :alt="item.name" /> -->
          </li>
        </ul>
      </div>
    </div>

    <button class="button" @click="spinRoulette">Spin</button>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([...Array(300).keys()]);

let transition = ref({
  transitionFunction: '',
  duration: '',
  transformFunction: ''
});

// id for throttle
let timerId;

function spinRoulette() {
  if (timerId) {
    return;
  }

  transition.value.transformFunction = '0';

  let rows = 12,
    card = 75 + 3 * 2,
    landingPosition = rows * 10 * card;

  let randomize = Math.floor(Math.random() * 75) - 75 / 2;

  landingPosition = landingPosition + randomize;

  let object = {
    x: Math.floor(Math.random() * 50) / 100,
    y: Math.floor(Math.random() * 20) / 100
  };

  setTimeout(() => {
    transition.value.transitionFunction = 'cubic-bezier(0,' + object.x + ',' + object.y + ',1)';
    transition.value.duration = '10s';
    transition.value.transformFunction = 'translateX(-' + landingPosition + 'px)';
  }, 450);

  timerId = setTimeout(() => {
    transition.value.transitionFunction = '';
    transition.value.duration = '';
    timerId = null;
  }, 11 * 1000);
}
</script>

<style scoped lang="scss">
.container-column {
  justify-content: center;
  align-items: center;
  gap: 4rem;
}

.roulette {
  position: relative;
  display: flex;
  justify-content: start;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;

  border: 1px solid black;

  &-selector {
    width: 3px;
    background: grey;
    left: 50%;
    height: 100%;
    transform: translate(-50%, 0%);
    position: absolute;
    z-index: 2;
  }

  &-wheel {
    display: flex;
    transition-timing-function: v-bind('transition.transitionFunction');
    transition-duration: v-bind('transition.duration');
    transform: v-bind('transition.transformFunction');

    &-items {
      display: flex;
      padding-inline-start: 0px;

      li {
        height: 75px;
        width: 75px;
        margin: 3px;
        border-radius: 8px;
        border-bottom: 3px solid rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        font-size: 1.5em;
      }
    }
  }
}
</style>
