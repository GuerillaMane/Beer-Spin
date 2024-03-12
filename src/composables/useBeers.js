import axios from '../plugins/api';
import { ref, onMounted } from 'vue';

export function useBeers() {
  const beers = ref([]);
  const isLoaded = ref(false);

  const getBeers = async () => {
    try {
      const response = await axios.get('beers.json');
      beers.value = Object.values(response.data);
      isLoaded.value = true;
    } catch (err) {
      console.error(err);
    }
  };

  onMounted(getBeers);

  return {
    beers,
    isLoaded
  };
}
