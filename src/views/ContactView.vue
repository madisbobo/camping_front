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
    background-image: url('https://t3.ftcdn.net/jpg/02/54/66/08/360_F_254660811_nEM2z4ejjcNnCGJvLvlYK5xx5a4gzyRc.jpg');
    background-size: cover;
    height: 400px;
    background-position: center;
    margin-bottom: 40px;
}

</style>