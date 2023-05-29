<template>
    <div class="home">
        <img src="../assets/logoTelk.png" alt="..." class="img-fluid"/>
        <HelloWorld msg="Kõik telkima!"/>
    </div>

    <CustomFooter></CustomFooter>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CustomFooter from "@/components/CustomFooter.vue";

export default {
    name: 'HomeView',
    components: {
        CustomFooter,
        HelloWorld
    }
}
</script>

