<template>
    <div class="therd text-start mt-10">
        <v-expansion-panels
      v-model="panel"
      flat
      multiple
    >
<v-expansion-panel>
        <v-expansion-panel-header>November</v-expansion-panel-header>
        <v-expansion-panel-content class="pa-0">
      
      <v-btn-toggle
          v-model="toggle_exclusive"
          active-class=" white--text"
          mandatory
          class="mt-2 pl-6"
        >
          <v-btn class="ml-1 rounded " color="#00868A" dark text width="7px" height="35px">
            MO
          </v-btn>
          <v-btn class="ml-1 rounded" color="#00868A" dark text  width="10px" height="35px">
            TU
          </v-btn>
          <v-btn class="ml-1 rounded" color="#00868A" dark text  width="10px" height="35px">
            WE
          </v-btn>
          <v-btn class="ml-1 rounded" color="#00868A" dark text  width="10px" height="35px">
            TH
          </v-btn>
          <v-btn class="ml-1 rounded" color="#00868A" dark text  width="10px" height="35px">
            FR
          </v-btn>
          <v-btn class="ml-1 rounded" color="#00868A" dark text  width="10px" height="35px">
            SA
          </v-btn>
        </v-btn-toggle>

<v-card
    class="mx-auto mt-5 text-center rounded-lg"
    outlined
    width="80%"
    color="#00868A"
    dark
  >
  <v-row class="pa-6">
    <v-col cols="2" class="text-start pt-5"> <v-icon  >mdi-tooth</v-icon></v-col>
    <v-col cols="10" class="text-start">
      <p class="ma-0">Dentest</p>
      <p class="ma-0 caption white--text">8:00 - 9:30</p>
      <p class="ma-0 caption white--text">Dr.Abdallah abo zaid</p>
    </v-col>
  </v-row>
  </v-card>
<v-card
    class="mx-auto mt-2 text-center rounded-lg"
    outlined
    width="80%"
    color="#C7D6D7"
  >
  <v-row class="pa-6">
    <v-col cols="2" class="text-start pt-5"> <v-icon>mdi-heart-pulse</v-icon></v-col>
    <v-col cols="10" class="text-start">
      <p class="ma-0">Cardiologist</p>
      <p class="ma-0 caption black--text">9:30 - 11:50</p>
      <p class="ma-0 caption black--text">Dr.maha abo soltan</p>
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