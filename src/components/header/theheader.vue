<template>
    <div class="theheader">
        <v-navigation-drawer
        height="100%"
      absolute
      left
      width="100px"
      dark
      color="#00868A"
      permanent
      app
      class="text-center pt-5"
    >
    <v-icon large>mdi-hand-heart</v-icon>
    <p class="white--text">Medi</p>
    <br>
    <br>
          <v-btn  class="d-block mx-auto pa-1 my-2 "  router to="/" exact icon>  <v-icon>mdi-home</v-icon></v-btn>
         
          <v-badge
        color="error"
        overlap
        dot
        offset-x="10"
        offset-y="15"
      >
   <v-btn class="d-block mx-auto pa-1 my-2" router to="/user" icon>  <v-icon>mdi-account</v-icon></v-btn>
      </v-badge>
          <v-btn class="d-block mx-auto pa-1 my-2" icon>  <v-icon>mdi-cards-heart</v-icon></v-btn>
          <v-btn class="d-block mx-auto pa-1 my-2" icon>  <v-icon>mdi-email-newsletter</v-icon></v-btn>
          <v-btn class="d-block mx-auto pa-1 my-2" icon>  <v-icon>mdi-widgets</v-icon></v-btn>
          <v-btn class="d-block mx-auto pa-1 my-2" icon>  <v-icon>mdi-help-circle</v-icon></v-btn>
    </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    name:"theheader",
}
</script>
<style lang="sass">

</style>