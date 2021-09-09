<template>
    <div class="user3 pt-16 text-center px-5">
        <p class="display-1">Wellcome ,Back</p>
        <p class="caption">To Keep Connected With Us Please Login With Your Personal Info</p>
        <v-btn class="rounded-xl white--text myborder" color="transparent"  @click="$store.commit('move2')">SIGN IN</v-btn>
    </div>
</template>
<script>
export default {
    name:"user3",
    data:()=>({

    })
}
</script>
<style scoped>
.myborder{
    border: 1px solid white!important;
}

</style>