<template>
    <div class="home4 mt-3">
     <v-row>
         <v-col>
             <v-card class="pa-5" width="90%" color="#00868A" dark>
                 <v-row>
                     <v-col cols="6" class=" py-7">
                         <p class="mb-0 text-h6">Heart rate</p>
                         <p class="mb-0 text-h4">112 bpm</p>
                     </v-col>
                     <v-col cols="6">
                         <v-icon large class="display-4">mdi-heart-pulse</v-icon>
                     </v-col>
                 </v-row>
             </v-card>
         </v-col>
         <v-col>
              <v-card class="pa-5 py-2 ml-auto " width="90%" >
                 <v-btn-toggle
          v-model="toggle_exclusive"
          active-class="white--text"
          mandatory
        >
          <v-btn class="ma-1 rounded-xl py-1 " dark color="#00868A" text>
              Your Activity
          </v-btn>
          <v-btn class="ma-1 rounded-xl  py-1"  dark color="#00868A" text>
              WEEK
          </v-btn>
          <v-btn class="ma-1 rounded-xl py-1"  dark color="#00868A" text>
              MOUNTHS
          </v-btn>
        </v-btn-toggle>

        <v-row class="mt-1 text-center">
            <v-col class="pr-0">
                <v-progress-circular
      :value="50"
      color="#00868A"
      :size="70"
      :width="10"
    >
    50</v-progress-circular>
            </v-col>
            <v-col class="px-0">
                <v-progress-circular
      :value="70"
      color="red"
      :size="70"
      :width="10"
    > 70</v-progress-circular>
            </v-col>
            <v-col class="pl-0">
                <v-progress-circular
      :value="80"
      color="blue"
      :size="70"
      :width="10"
    > 80</v-progress-circular>
            </v-col>
        </v-row>
             </v-card>
         </v-col>
     </v-row>
    </div>
</template>
<script>

export default {
    name:"home4",
     data () {
      return {
        toggle_exclusive: 1,
      }
    },
  
}
</script>
<style scss scoped>
.home4 .v-btn{
    font-size: 12px;
    border: none;
    height: 35px!important;
}

</style>