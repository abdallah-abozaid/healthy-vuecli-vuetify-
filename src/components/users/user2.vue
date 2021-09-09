<template>
    <div class="user2 pt-16 text-center px-5">
        <p class="display-1">Hello, Friend</p>
        <p class="caption">Enter Your Personal Details and Start Jourey With Us</p>
        <v-btn class="rounded-xl white--text myborder" color="transparent"  @click="$store.commit('move')">SIGN UP</v-btn>
    </div>
</template>
<script>
export default {
    name:"user2",
    data:()=>({

    })
}
</script>
<style scoped>
.myborder{
    border: 1px solid white!important;
}
</style>