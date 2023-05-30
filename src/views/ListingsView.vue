<template>
    <div class="container mt-5">
        <div class="row justify-content-center mt-5 mb-3">
            <div class="col col-4 mb-4 text-start">
                <p>Filtreeri <font-awesome-icon :icon="['fas', 'filter']" /></p>

            </div>
            <div class="col col-4 mb-4 text-end">
                <p>Järjest <font-awesome-icon :icon="['fas', 'sort']" /></p>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col col-8">
                <h4 class="text-start mb-3">Kõik pakkumised:</h4>

                <!--Listing card-->
                <ListingPreviewCard :listings-preview="allListingsPreview"/>

            </div>
        </div>
    </div>
    <CustomFooter></CustomFooter>

</template>

<script>
import router from "@/router";
import ListingPreviewCard from "@/components/ListingPreviewCard.vue";
import CustomFooter from "@/components/CustomFooter.vue";

export default {
    name: "ListingsView",
    components: {CustomFooter, ListingPreviewCard},
    data() {
        return {
            message: '',
            allListingsPreview: [
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
        getAllListingsPreview() {
            this.$http.get("/listings")
                .then(response => {
                    this.allListingsPreview = response.data
                })
                .catch(error => {
                    router.push({name: 'errorRoute'})
                })
        },
        editContact() {
            alert("Muuda oma listingut")
        }

    },

    beforeMount() {
        this.getAllListingsPreview()
    }
}

</script>

<style scoped>

</style>