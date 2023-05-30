<template>

    <div class="row justify-content-center">
        <div class="col col-4 mb-4">
            <h2>Lisa telkimisplatsi andmed:</h2>
        </div>
    </div>
    <form>
        <!-- Name and description -->
        <div class="row justify-content-center mb-4">
            <div class="col col-4">
                <div class="mb-3 text-start">
                    <label for="listingName" class="form-label ">Platsi nimi: </label>
                    <input v-model="addFullListing.listingName" type="text" id="listingName" class="form-control">
                </div>

                <div class="mb-3 text-start">
                    <label for="listingDescription" class="form-label">Kirjeldus:</label>
                    <textarea v-model="addFullListing.description" id="listingDescription"
                              class="form-control form-control-lg"></textarea>
                </div>
            </div>
        </div>

        <!-- Location info -->
        <div class="row justify-content-center mb-4 mt-4">
            <div class="col col-2 mb-7">
                <div class="mb-3 text-start">
                    <label for="address" class="form-label">Aadress:</label>
                    <input v-model="addFullListing.locationAddress" type="text" id="address" class="form-control">
                </div>
                <div class="mb-3 text-start">
                    <label for="dropdownMenuButton" class="form-label">Vali maakond:</label>
                    <div class="dropdown">
                        <button class="dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            Maakond:
                        </button>
                        <ul class="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownMenuButton">
                            <li v-for="county in counties"><a class="dropdown-item" href="#">{{ county.countyName }}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col col-2 mb-7">
                <div class="mb-3 text-start">
                    <label for="locationLongitude" class="form-label">Longitude:</label>
                    <input v-model="addFullListing.locationLongitude" type="text" id="locationLongitude" class="form-control">
                </div>
                <div class="mb-3 text-start">
                    <label for="locationLatitude" class="form-label">Latitude:</label>
                    <input v-model="addFullListing.locationLatitude" type="text" id="locationLatitude" class="form-control">
                </div>
            </div>
        </div>


        <!-- Lisa pildid -->
        <div class="row justify-content-center mt-4">
            <div class="col col-4 mb-4">
                <div class="mb-3 text-start">
                    <label for="listingDescription" class="form-label">Lisa pildid:</label><br>
                    <button @click="addListingInfo" type="submit" class="btn btn-dark me-3">Lisa pildid</button>
                </div>
            </div>
        </div>

        <!-- Additional information -->
        <div class="row justify-content-center mt-4">
            <div class="col col-4 mb-4">
                <div class="mb-3 text-start">
                    <label for="listingDescription" class="form-label">Lisainfo:</label>
                    <textarea v-model="addFullListing.additionalInfo" id="listingDescription"
                              class="form-control form-control-lg"></textarea>
                </div>
            </div>
        </div>

        <!-- Omadused -->
        <div class="row justify-content-center mt-4">
            <div class="col col-4 mb-4">
                <div class="mb-3 text-start">
                    <label for="listingDescription" class="form-label">Omadused:</label>
                    <div v-for="feature in features" class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            {{ feature.featureName }}
                        </label>
                    </div>
                </div>
            </div>
        </div>


    </form>


    <div class="row justify-content-center mb-4 mt-4">
        <div class="col col-4">
            <button @click="addListingInfo" type="submit" class="btn btn-dark me-3">Lisa</button>
            <button @click="abortAddListing" type="button" class="btn btn-dark ms-3">Loobu</button>
        </div>
    </div>

    <CustomFooter></CustomFooter>


</template>

<script>
import ImageInput from "@/components/ImageInput.vue";
import router from "@/router";
import CustomNavigationBar from "@/App.vue";
import CustomFooter from "@/components/CustomFooter.vue";

export default {
    name: "AddListingView",
    components: {ImageInput, CustomFooter, CustomNavigationBar},

    data() {
        return {
            message: '',
            features:
                [
                    {
                        id: 0,
                        featureName: '',
                        featureIsSelected: false
                    }
                ],
            counties:
                [
                    {
                        countyId: 0,
                        countyName: ''
                    }
                ],
            addFullListing: {
                ownerUserId: sessionStorage.getItem('userId'),
                listingId: Number(sessionStorage.getItem('listingId')),
                listingName: sessionStorage.getItem('listingName'),
                description: '',
                additionalInfo: '',
                price: 0,
                locationCountyId: 0,
                locationAddress: '',
                locationLongitude: 0,
                locationLatitude: 0,
                features: [
                    {
                        featureId: 0,
                        featureName: '',
                        featureIsSelected: true
                    }
                ],
                imagesData: [
                    ''
                ]
            }
        }


    },


    methods: {

        abortAddListing() {
            this.$http.delete("/add-listing", {
                    params: {
                        listingId: Number(sessionStorage.getItem('listingId'))
                    }
                }
            ).then(response => {
                sessionStorage.removeItem('locationId')
                sessionStorage.removeItem('locationName')
                router.push({name: 'homeRoute'})
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        },

        getFeatures() {
            this.$http.get("/add-listing-features")
                .then(response => {
                    this.features = response.data
                })
                .catch(error => {
                    router.push({name: 'errorRoute'})
                })
        },

        getCounties() {
            this.$http.get("/add-listing-counties")
                .then(response => {
                    this.counties = response.data
                })
                .catch(error => {
                    router.push({name: 'errorRoute'})
                })
        },

        addListingInfo() {
            this.$http.post("/signup-info", this.listing
            ).then(response => {
                router.push({name: 'homeRoute'})
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        }

    },
    mounted() {
        this.getFeatures()
        this.getCounties()
    }
}
</script>

<style scoped>

</style>