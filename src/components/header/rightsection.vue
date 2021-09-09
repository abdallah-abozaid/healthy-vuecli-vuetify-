<template>
    <div class="rightsection ">
        <v-navigation-drawer v-model="$store.state.thedrawer" height="100%" absolute right width="350px" color="white" app class="text-center pa-0 pr-0">
  
   <toolbar/>
   <secnod/>
    <therd/>
    <four/>


    </v-navigation-drawer>
    </div>
</template>
<script>
import Four from './right-section/four.vue'
import Secnod from './right-section/secnod.vue'
import Therd from './right-section/therd.vue'
import toolbar from './right-section/toolbar.vue'
export default {
    name:"rightsection",
    components: { toolbar, Secnod, Therd, Four },
    data: () => ({
      drawer: true
    }),
    
}
</script>
<style lang="scss">
.rightsection p.caption{
    color:#00868A
}

</style>