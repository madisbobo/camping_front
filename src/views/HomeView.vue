<template>

  <!-- Hero -->
    <div class="p-5 text-center bg-image rounded-3">
            <div class="d-flex justify-content-center align-items-center h-100">
                <div class="text-white">
                    <h1 class="mb-3">Tule telkima</h1>
                    <h4 class="mb-5">Tule ja avasta ägedaid telkimiskohti üle Eesti</h4>
                    <a class="btn btn-outline-light btn-lg" href="#!" role="button">Vaata telkimiskohti</a>
                </div>
            </div>
    </div>

    <!-- Hero -->


    <div class="container mt-5">

        <div class="row justify-content-center mb-4">
            <div class="col col-8">
                <h4 class="text-start mb-4">Kõrgelt hinnatud:</h4>

                <!--Listing card-->
                <ListingPreviewCard :listings-preview="listingsPreviewHighestRated"/>

            </div>
        </div>

        <div class="row justify-content-center mb-4">
            <div class="col col-8">
                <h4 class="text-start mb-4">Hiljuti lisatud:</h4>

                <!--Listing card-->
                <ListingPreviewCard :listings-preview="listingsPreviewNewest"/>

            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col col-8">
                <button @click="router().push({name:'listingsRoute'})" class="btn btn-outline-dark">Vaata kõiki telkimiskohti</button>
            </div>
        </div>


    </div>



    <CustomFooter></CustomFooter>
</template>

<script>
// @ is an alias to /src
import CustomFooter from "@/components/CustomFooter.vue";
import ListingPreviewCard from "@/components/ListingPreviewCard.vue";
import router from "@/router";

export default {
    name: "HomeView",
    components: {CustomFooter, ListingPreviewCard},
    data() {
        return {
            message: '',
            listingsPreviewHighestRated: [
                {
                    listingId: 0,
                    listingName: '',
                    price: 0,
                    imageData: '',
                    numberOfScores: 0,
                    averageScore: 0.0
                }
            ],
            listingsPreviewNewest: [
                {
                    listingId: 0,
                    listingName: '',
                    price: 0,
                    imageData: '',
                    numberOfScores: 0,
                    averageScore: 0.0
                }
            ],
        }

    },
    methods: {
        router() {
            return router
        },
        getListingsPreviewHighestRated() {
            this.$http.get("/listings-by-rating")
                .then(response => {
                    this.listingsPreviewHighestRated = response.data
                })
                .catch(error => {
                    router.push({name: 'errorRoute'})
                })
        },

        getListingsPreviewNewest() {
            this.$http.get("/listings-by-listing-id")
                .then(response => {
                    this.listingsPreviewNewest = response.data
                })
                .catch(error => {
                    router.push({name: 'errorRoute'})
                })
        },


    },

    beforeMount() {
        this.getListingsPreviewHighestRated()
        this.getListingsPreviewNewest()
    }
}
</script>

<style scoped>


.p-5.text-center.bg-image.rounded-3 {
    background-color: rgba(0, 0, 0, 0.6);
    background-image: url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');
    background-blend-mode: multiply;
    background-size: cover;
    height: 600px;
    background-position: center;

}





</style>

