<template>

    <div class="header-image">
    </div>

    <div class="row justify-content-center">
        <div class="col col-4 mb-7">
            <h2>Meist</h2>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col col-4 mb-4">

        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col col-4 mb-4">
            Camping OÜ<br>
            info@telkima.ee


        </div>
    </div>

    <CustomFooter></CustomFooter>
</template>

<script>
import CustomFooter from "@/components/CustomFooter.vue";

export default {
    name: "ContactView",
    components: {CustomFooter}
}
</script>

<style scoped>


.header-image {
    background-image: url('https://images.unsplash.com/photo-1499540633125-484965b60031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80');
    background-size: cover;
    height: 400px;
    background-position: center;
    margin-bottom: 40px;
}

</style>