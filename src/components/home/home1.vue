<template>
    <div class="home1">
        <v-row>
            <v-col cols="12" sm="6">
                 <v-text-field
            prepend-icon="mdi-search-web"
            placeholder="Search Your Symptoms"
          ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="text-end ma-0 pt-8">
                  <v-chip
      class="ma-0 rounded-xl"
      color="white"
      label
    >
      <v-icon left  color="#00868A">
        mdi-clock-time-eight
      </v-icon>
    14:02 AM today now ,19
    </v-chip>
<v-btn @click="$store.commit('open')" class="mx-2 " color="green" dark icon :disabled="this.$store.state.thedrawer"><v-icon>mdi-menu</v-icon></v-btn>
<v-btn @click="$store.commit('close')" class="mx-2 " dark icon color="red" :disabled="!this.$store.state.thedrawer"><v-icon>mdi-close</v-icon></v-btn>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    name:"home1",
    data:()=>({
    })
}
</script>
<style lang="scss" scoped>

</style>