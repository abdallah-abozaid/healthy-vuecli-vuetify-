<template>
    <div class="user4 pt-16">
        <p class="display-2 text-center">Create Acount</p>
         <v-row
        align="center"
        justify="center"
        style="height:100px"
      >
        <v-btn-toggle
          v-model="toggle_exclusive"
          background-color="transparent"
        >
          <v-btn class="mx-2 py-7 rounded-circle transparent"  >
            <v-icon color="blue" large>mdi-facebook</v-icon>
          </v-btn>
          <v-btn class="mx-2 py-7 rounded-circle transparent"  >
            <v-icon color="black" large>mdi-gmail</v-icon>
          </v-btn>
          <v-btn class="mx-2 py-7 rounded-circle transparent"  >
            <v-icon color="red" large>mdi-linkedin</v-icon>
          </v-btn>
        </v-btn-toggle>
         </v-row>
         <p class="text-center">Ensure Your Email for Regestration</p>
         <div class="pa-4">
         <v-text-field
            label="name"
            prepend-icon="mdi-account"
            class="mb-5"
          ></v-text-field>
         <v-text-field
            label="Email"
            prepend-icon="mdi-gmail"
            class="mb-5"
          ></v-text-field>
          <v-text-field
            label="password"
            prepend-icon="mdi-lock"
          ></v-text-field>
         </div>
         <p class="text-center my-6">Forget Your Password ? </p>
         <v-btn color="#00868A" dark class="sign-btn">Sign UP</v-btn>
    </div>
</template>
<script>
export default {
    name:"user4",
    data:()=>({
        toggle_exclusive:1
    }),
    mounted:function(){
      document.querySelector('.user4').style.height = window.outerHeight + 'px'; 
    }
}
</script>
<style scoped>
.user4 .display-2{
    color: #00868A;
    font-weight: 400;
}

.user4 .v-btn{
    border:none;
}
.user4 .sign-btn{
    width: 30%;
    margin-left: 35%;
}

</style>