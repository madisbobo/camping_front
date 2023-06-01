<template>
    <div class="container mt-5">
        <div class="row justify-content-center mt-5 mb-3">
            <div class="col col-4 mb-4 text-start">
                <p>Filtreeri
                    <font-awesome-icon :icon="['fas', 'filter']"/>
                </p>

            </div>
            <div class="col col-4 mb-4 text-end">
                <div class="dropdown">
                    <button class="btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Sorteeri <font-awesome-icon :icon="['fas', 'sort']" class="ms-1"/>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                        <li><a @click="sortByPriceAsc" class="dropdown-item" href="#">Hind kasvav</a></li>
                        <li><a @click="sortByPriceDesc" class="dropdown-item" href="#">Hind kahanev</a></li>
                        <li><a @click="sortByRatingAsc" class="dropdown-item" href="#">Reiting kasvav</a></li>
                        <li><a @click="sortByRatingDesc" class="dropdown-item" href="#">Reiting kahanev</a></li>
                    </ul>
                </div>
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

        sortByPrice() {
            alert("Sorteeri hinna alusel")
            this.$http.get("/listings-sortby-price-asc")
                .then(response => {
                    this.allListingsPreview = response.data
                })
                .catch(error => {
                    router.push({name: 'errorRoute'})
                })
        },

        sortByPriceAsc() {
            this.allListingsPreview.sort((a, b) => a.price - b.price);
        },

        sortByPriceDesc() {
            this.allListingsPreview.sort((a, b) => b.price - a.price);
        },

        sortByRatingAsc() {
            this.allListingsPreview.sort((a, b) => a.averageScore - b.averageScore);
        },

        sortByRatingDesc() {
            this.allListingsPreview.sort((a, b) => b.averageScore - a.averageScore);
        },

    },

    beforeMount() {
        this.getAllListingsPreview()
    }
}

</script>

<style scoped>

</style>