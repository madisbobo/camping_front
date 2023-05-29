<template>
    <div class="home">
        <img alt="Camping logo" src="../assets/logoTelk.png" class="img-fluid"/>
        <h1>Tule telkima, meil on tuhandeid jummalast ilusa vaatega (ookeanile) telkimisplatse! Sa ei kahetse. Maksmine
            sulas.</h1>
    </div>

    <CustomFooter></CustomFooter>
</template>

<script>
// @ is an alias to /src
import CustomFooter from "@/components/CustomFooter.vue";

export default {
    name: 'HomeView',
    components: {CustomFooter}
}
</script>
