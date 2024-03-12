<template>
  <section class="container-column">
    <div v-if="isLoaded" class="roulette" ref="rouletteRef">
      <div class="roulette-selector"></div>
      <div class="roulette-wheel">
        <ul class="roulette-wheel-items">
          <li
            v-for="(item, index) in beers"
            :key="index"
            :class="{ 'roulette-wheel-selected': (index === 150) & isSpinStopped }"
          >
            <img :src="item.link" :alt="item.name" />
          </li>
        </ul>
      </div>
    </div>

    <button class="button" @click="spinRoulette">Click To Spin!</button>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useBeers } from '@/composables/useBeers';
import { shuffle, extendArray } from '@/helpers';

const { beers, isLoaded } = useBeers();

watch(isLoaded, (newValue) => {
  if (newValue) {
    beers.value = extendArray(beers.value);
  }
});

let transition = ref({
  transitionFunction: '',
  duration: '',
  transformFunction: ''
});

const rouletteRef = ref(null);

const isSpinStopped = ref(false);

// id for throttle
let timerId;

function spinRoulette() {
  if (timerId) {
    return;
  }

  isSpinStopped.value = false;

  shuffle(beers.value);

  transition.value.transformFunction = '0';

  let rows = 150,
    card = 225,
    margin = 12;

  // selector always drops in center of card; randomized by shuffling an array
  let landingPosition =
    rows * (card + margin * 2) + margin + card / 2 - rouletteRef.value.clientWidth / 2;

  let bezier = {
    point2: Math.floor(Math.random() * 50) / 100,
    point3: Math.floor(Math.random() * 20) / 100
  };

  setTimeout(() => {
    transition.value.transitionFunction =
      'cubic-bezier(0,' + bezier.point2 + ',' + bezier.point3 + ',1)';
    transition.value.duration = '10s';
    transition.value.transformFunction = 'translateX(-' + landingPosition + 'px)';
  }, 450);

  timerId = setTimeout(() => {
    transition.value.transitionFunction = '';
    transition.value.duration = '';
    timerId = null;
    isSpinStopped.value = true;
  }, 11 * 1000);
}
</script>

<style scoped lang="scss">
.container-column {
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding-block: 2rem;
  border-radius: 12px;
  width: min(100%, 58rem);
}

.button {
  font-size: 18px;
  padding: 1rem 1.5rem;
  border-radius: 36px;
}

.roulette {
  position: relative;
  display: flex;
  justify-content: start;
  width: 100%;
  margin: 0 auto;
  padding-block: 1rem;
  overflow-x: hidden;
  -webkit-box-shadow: inset 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: inset 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
  box-shadow: inset 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  &-selector {
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0 15px 20px 15px;
    border-color: transparent transparent $el-main transparent;
    left: 50%;
    top: 6%;
    transform: translateX(-50%) rotate(180deg);
    position: absolute;
    z-index: 2;
  }

  &-wheel {
    display: flex;
    padding-block: 1rem;
    transition-timing-function: v-bind('transition.transitionFunction');
    transition-duration: v-bind('transition.duration');
    transform: v-bind('transition.transformFunction');

    &-items {
      display: flex;
      padding-inline-start: 0px;

      li {
        height: 225px;
        width: 225px;
        overflow: hidden;
        margin: 12px;
        border-radius: 8px;
        -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.4);
        -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.4);
        box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        font-size: 1.5em;
      }
    }

    &-selected {
      outline: 3px solid $el-main;
    }
  }
}
</style>
