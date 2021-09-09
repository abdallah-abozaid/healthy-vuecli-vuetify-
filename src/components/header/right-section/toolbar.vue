<template>
    <div class="toolbar pa-2">
      
    <v-toolbar flat>
      
<v-row >
    <v-col cols="2" class=" pa-0"><v-img src="@/assets/me.jpg" width="100px" class="rounded-circle"></v-img></v-col>
    <v-col cols="10" class="text-start pa-0 pl-2">
        <p class="ma-0">Abdallah Abo Zaid</p>
        <p class="ma-0 caption ">Abdallah Abo Zaid</p>
    </v-col>
</v-row>

      <v-spacer></v-spacer>
    <v-btn icon color="#00868A"  @click="$store.commit('close')" class="mt-0" ><v-icon >mdi-close</v-icon></v-btn>
    </v-toolbar>

    </div>
</template>
<script>
export default {
    name:"toolbar",
}
</script>
<style lang="scss">
.rightsection p.caption{
    color:#00868A
}
</style>