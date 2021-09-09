<template>
  <v-app>
    <theheader/>
    <rightsection/>
    <v-main class="mycolor">
      <router-view  />
    </v-main>
  </v-app>
</template>

<script>
import Rightsection from './components/header/rightsection.vue';
import Theheader from './components/header/theheader.vue';
export default {
  name: "App",
  components:{
    Theheader,
    Rightsection
  },
  data: () =>({
    //
  }),
};
</script>
<style lang="scss">
.mycolor{
  background-color: #E8F3ED;
}
</style>