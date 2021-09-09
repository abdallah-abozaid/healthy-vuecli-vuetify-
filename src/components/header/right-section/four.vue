<template>
    <div class="four text-start mt-10">
        <v-expansion-panels
      v-model="panel"
      flat
      multiple
    >
<v-expansion-panel>
        <v-expansion-panel-header>YOUR TREATMENT</v-expansion-panel-header>
        <v-expansion-panel-content class="pa-0">

<v-card
    class="mx-auto mt-0 text-center rounded-lg"
    outlined
    width="80%"
    color="#C7D6D7"
  >
  <v-row class="pa-3">
    <v-col cols="2" class="text-start pt-5"> <v-icon>mdi-cart</v-icon></v-col>
    <v-col cols="10" class="text-start">
      <p class="ma-0">Gental iron</p>
      <p class="ma-0 caption black--text">2 capsules with meal everyday</p>
    </v-col>
  </v-row>
  </v-card>


        </v-expansion-panel-content>
      </v-expansion-panel>
      </v-expansion-panels>
    </div>
</template>
<script>
export default {
    name:"therd",
    data: () => ({
      panel: [0],
      toggle_exclusive: 3,
    }),
}
</script>
<style lang="scss">
.v-expansion-panel .v-btn{
    font-size: 11px!important;
}
.v-expansion-panel-content__wrap{
    padding: 0!important;
}
.v-btn--active{
  background-color: #00868A;
}
</style>