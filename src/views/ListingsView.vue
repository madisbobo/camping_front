<template>
    <div class="container mt-5">
        <div class="row justify-content-center mt-5 mb-3">
            <div class="col col-4 mb-4 text-start">
                <button @click="activateFilterModal" class="btn" type="button">
                    <p>Filtreeri
                        <font-awesome-icon :icon="['fas', 'filter']"/>
                    </p>
                </button>
            </div>
            <div class="col col-4 mb-4 text-end">
                <div class="dropdown">
                    <button class="btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
                            aria-expanded="false">
                        Sorteeri
                        <font-awesome-icon :icon="['fas', 'sort']" class="ms-1"/>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                        <li><a @click="sortByPrice" class="dropdown-item" href="#">Hind</a></li>
                        <li><a @click="sortByRating" class="dropdown-item" href="#">Reiting</a></li>
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
    <listings-filter-modal ref="listingsFilterModalRef" @event-filter-listings="filterListings"/>
    <CustomFooter></CustomFooter>
</template>

<script>
import router from "@/router";
import ListingPreviewCard from "@/components/ListingPreviewCard.vue";
import CustomFooter from "@/components/CustomFooter.vue";
import ListingsFilterModal from "@/components/modals/ListingsFilterModal.vue";

export default {
    name: "ListingsView",
    components: {ListingsFilterModal, CustomFooter, ListingPreviewCard},
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
            filterParameters: {
                locationCountyId: 0,
            },
            filteredListingsPreview: [
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
        activateFilterModal() {
            this.$refs.listingsFilterModalRef.$refs.modalRef.openModal()
        },
        filterListings(selectedCountyId) {
            this.$http.get("/listings-filter", {
                    params: {
                        countyId: selectedCountyId
                    }
                }
            ).then(response => {
                this.allListingsPreview = response.data
            }).catch(error => {
                router.push({name: 'errorRoute'})
            });
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

        sortByRating() {
            alert("Sorteeri reitingu alusel")
            this.$http.get("/listings-sortby-rating")
                .then(response => {
                    this.allListingsPreview = response.data
                })
                .catch(error => {
                    router.push({name: 'errorRoute'})
                })
        },
    },
    beforeMount() {
        this.getAllListingsPreview()
    }
}
</script>

<style scoped>

</style>