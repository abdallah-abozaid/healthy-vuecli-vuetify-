<template>
    <div class="second text-start mt-10 ">
      <v-row class="pl-8  ">
          <v-col class="pb-0 pt-4">
              <p class="ma-0">Blood</p>
              <p class="ma-0 grey--text caption">+A</p>
          </v-col>
          <v-col class="pb-0 pt-4">
              <p class="ma-0">Height</p>
              <p class="ma-0 grey--text caption">182 cm</p>
          </v-col>
          <v-col class="pb-0 pt-4">
              <p class="ma-0">Wight</p>
              <p class="ma-0 grey--text caption">78 kg</p>
          </v-col>
        
      </v-row>
    

    </div>
</template>
<script>
export default {
    name:"second",
}
</script>
<style lang="scss">
.second .row .col:nth-of-type(1){
    border-left: 3px solid rgba(7, 245, 7, 0.555);
}
.second .row .col:nth-of-type(2){
    border-left: 3px solid rgba(245, 13, 13, 0.562);
}
.second .row .col:nth-of-type(3){
    border-left: 3px solid rgba(1, 73, 1, 0.493);
}
</style>