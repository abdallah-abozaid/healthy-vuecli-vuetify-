<template>
    <div class="home2">
       <v-card
    class="mx-auto py-7 px-11"
    max-width="100%"
    outlined
    rounded="lg"
    elevation="5"
  >
    <v-row class="rounded-lg" >
        <v-col cols="12" sm="6">
<p class="mb-0 text-h6">today <span>-10% </span> discount<br>
                on lings exeminations</p>
                <p class="caption grey--text ma-0">Lorem ipsum dolor sitent in ssit, est labore qui<br> quos perspiciatis accusantium?</p>
        </v-col>
        <v-col cols="12" sm="6" class="text-end">
          <v-icon large class="my-auto d-block display-4" color="#00868A" >mdi-calendar-heart</v-icon>
        </v-col>
    </v-row>
  </v-card>
    </div>
</template>
<script>
export default {
    name:"home2",
}
</script>
<style lang="scss" scoped>
.text-h6 span{
    color: #00868A!important;
}
</style>