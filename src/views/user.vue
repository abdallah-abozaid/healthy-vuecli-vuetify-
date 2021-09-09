<template>
  <div class="user">
      <v-window  v-model="$store.state.window" vertical >
        <v-window-item >
          <v-row  class="user-window">
            <v-col cols="12" sm="8" >
              <user-1/>
            </v-col>
            <v-col cols="12" sm="4" class="sec white--text" >
              <user-2/>
            </v-col>
          </v-row>
        </v-window-item>
        <v-window-item  class="user-window">
          <v-row  class="user-window">
            <v-col cols="12" sm="4"  class="sec white--text user-window" >
              <user-3/>
            </v-col>
            <v-col cols="12" sm="8"  class=" user-window" >
              <user-4/>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
  </div>
</template>
<script>
import user1 from '../components/users/user1.vue'
import User2 from '../components/users/user2.vue';
import User3 from '../components/users/user3.vue';
import User4 from '../components/users/user4.vue';
export default {
  components: { user1, User2, User3, User4 },
  name:"user",
  data:()=>({
    
  }),
  methods:{
    
  },
    mounted:function(){
      document.querySelector('.user-window').style.height = window.outerHeight + 'px'; 
    }
}
</script>
<style >
.sec{
  background-color: #00868A;
}

</style>