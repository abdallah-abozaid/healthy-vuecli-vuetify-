<template>
<div class="home pa-7">
  <home-1/>
<home-2/>
<home-3/>
<home-4/>


</div>
</template>

<script>
import Home1 from '../components/home/home1.vue';
import Home2 from '../components/home/home2.vue';
import Home3 from '../components/home/home3.vue';
import Home4 from '../components/home/home4.vue';
export default {
  name: "Home",
  components: {
    Home1,
    Home2,
    Home3,
    Home4
  },
};
</script>
