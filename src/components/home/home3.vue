<template>
    <div class="home3 mt-7">
       <v-card
    class="mx-auto pa-0 pt-4"
    max-width="100%"
    outlined
    rounded="lg"
    elevation="5"
  >
  <v-toolbar flat class="px-5" >
      <v-row>
          <v-col cols="12" sm="7">
              <p class="font-weight-bold ma-0">Statistical of Your Healthy</p>
          </v-col>
            <v-col cols="12" sm="5">
                <v-row>
         <v-col cols="4">
              <v-select
          v-model="select"
          :menu-props="{bottom:true , offsetY:true}"
          :items="items"
          item-text="state"
          item-value="abbr"
          label="Select"
          persistent-hint
          color="#00868A"
          return-object
          single-line
        ></v-select>
         </v-col>
         <v-col class="px-0" cols="3">
                  <v-btn-toggle
          v-model="toggle_exclusive"
          active-class="white--text"
          mandatory
        >
          <v-btn class="ma-1 rounded-xl  py-1"  dark color="#00868A" text>
              WEEK
          </v-btn>
          <v-btn class="ma-1 rounded-xl py-1"  dark color="#00868A" text>
              MOUNTHS
          </v-btn>
        </v-btn-toggle>
         </v-col>
     </v-row>
            </v-col>
      </v-row>
      
    </v-toolbar>
      
      <v-sparkline
    :value="value"
  color="#00868A"
    :smooth="radius || false"
    :padding="padding"
    :line-width="width"
    :stroke-linecap="lineCap"
    :gradient-direction="gradientDirection"
    :fill="fill"
    :type="type"
    :auto-line-width="autoLineWidth"
    auto-draw
  ></v-sparkline>
  </v-card>
    </div>
</template>
<script>

export default {
    name:"home3",
     data () {
      return {
          select: { state: '2019'},
          toggle_exclusive:undefined,
        items: [
            { state: '2020' },
          { state: '2019'},
          { state: '2018'},
          { state: '2017' },
          { state: '2016'},
          { state: '2015' },
          { state: '2014' },
          { state: '2013' },
          { state: '2012' },
          { state: '2011' },
          { state: '2010' },
          
        ],
        width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      fill: false,
      type: 'trend',
      autoLineWidth: false,
      }
    },
  
}
</script>
<style scss scoped>
.v-select__slot .v-select__selections{
    color: #00868A!important;
}
.v-btn{
  height: 35px!important;
}

</style>