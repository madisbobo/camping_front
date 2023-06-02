<template>
    <div class="row justify-content-center mt-5">
        <div class="col col-4 mb-4">
            <h2>Telkimisplatsi andmete muutmine:</h2>
        </div>
    </div>
    <form>

        <!-- SUBHEADING 1 -->
        <div class="row justify-content-center mt-4 mb-3">
            <div class="col col-4">
                <div class="text-start">
                    <h5 class="fw-bold">Nimi, kirjeldus ja asukoht</h5>
                </div>
            </div>
        </div>

        <!-- Name and description -->
        <div class="row justify-content-center mb-4">
            <div class="col col-4">
                <div class="mb-3 text-start">
                    <label for="listingName" class="form-label ">Platsi nimi: </label>
                    <input v-model="listingResponse.listingName" type="text" id="listingName" class="form-control"
                           disabled>
                </div>

                <div class="mb-3 text-start">
                    <label for="listingDescription" class="form-label">Kirjeldus:</label>
                    <textarea v-model="listingResponse.listingDescription" id="listingDescription"
                              class="form-control form-control-lg"></textarea>
                </div>
            </div>
        </div>


        <!-- Location info -->
        <div class="row justify-content-center mb-4">
            <div class="col col-2 mb-4">
                <div class="mb-3 text-start">
                    <label for="address" class="form-label">Aadress:</label>
                    <input v-model="listingResponse.locationAddress" type="text" id="address" class="form-control">
                </div>
                <div class="mb-3 text-start">
                    <label for="dropdownMenuButton" class="form-label">Vali maakond:</label>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            {{ listingResponse.countyName }}
                        </button>
                        <ul class="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownMenuButton">
                            <li @click="addFullListing.locationCountyId = county.countyId; listingResponse.countyName = county.countyName"
                                v-for="county in counties"><a class="dropdown-item" href="#">{{ county.countyName }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col col-2 mb-7">
                <div class="mb-3 text-start">
                    <label for="locationLongitude" class="form-label">Longitude:</label>
                    <input v-model="listingResponse.locationLongitude" type="text" id="locationLongitude"
                           class="form-control">
                </div>
                <div class="mb-3 text-start">
                    <label for="locationLatitude" class="form-label">Latitude:</label>
                    <input v-model="listingResponse.locationLatitude" type="text" id="locationLatitude"
                           class="form-control">
                </div>
            </div>
        </div>


        <!-- SUBHEADING 2 -->
        <div class="row justify-content-center mt-4 mb-3">
            <div class="col col-4">
                <div class="text-start">
                    <h5 class="fw-bold">Pildid</h5>
                </div>
            </div>
        </div>

        <!-- Lisa pildid -->
        <div class="row justify-content-center">
            <div class="col col-4 mb-4">
                <div class="mb-3 text-start">
                    <label for="listingDescription" class="form-label">Lisa pildid:</label><br>
                    <img v-if="addFullListing.imagesData[0] === '' || addFullListing.imagesData[0].length === 3"
                         src="../assets/logoTelk.png"
                         class="img-thumbnail mb-3" alt="profile image"/>
                    <img v-else :src="addFullListing.imagesData[0]" class="img-thumbnail mb-3" alt="image"/>
                    <br>
                    <ImageInput @event-emit-base64="setImage"/>
                </div>
            </div>
        </div>

        <!-- SUBHEADING 3 -->
        <div class="row justify-content-center mt-4 mb-3">
            <div class="col col-4">
                <div class="text-start">
                    <h5 class="fw-bold">Hind, omadused, lisainfo</h5>
                </div>
            </div>
        </div>

        <!-- Pricing -->
        <div class="row justify-content-center">
            <div class="col col-2 mb-4">
                <div class="mb-3 text-start">
                    <label for="price" class="form-label">Hind inimese kohta per öö (€):</label>
                    <input v-model="listingResponse.price" type="number" id="number" min="1" class="form-control"
                           placeholder="10">
                </div>
            </div>
            <div class="col col-2 mb-4"></div>
        </div>

        <!-- Omadused -->
        <div class="row justify-content-center">
            <div class="col col-4 mb-3">
                <div class="mb-3 text-start">
                    <label for="listingDescription" class="form-label">Omadused:</label>
                    <div v-for="feature in listingResponse.features" class="form-check">
                        <input v-model="feature.featureIsSelected" class="form-check-input" type="checkbox" value=""
                               id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            {{ feature.featureName }}
                        </label>
                    </div>
                </div>
            </div>
        </div>


        <!-- Additional information -->
        <div class="row justify-content-center">
            <div class="col col-4 mb-4">
                <div class="mb-3 text-start">
                    <label for="listingDescription" class="form-label">Lisainfo:</label>
                    <textarea v-model="listingResponse.listingAdditionalInfo" id="listingDescription"
                              class="form-control form-control-lg"></textarea>
                </div>
            </div>
        </div>
    </form>

  <!-- Buttons -->
    <div class="row justify-content-center mb-4 mt-4">
        <div class="col col-4">
            <button @click="addListingInfo" type="submit" class="btn btn-dark me-3">Muuda</button>
            <button @click="router().push({name: 'myListingsRoute'})" type="button" class="btn btn-outline-dark ms-3">Loobu
            </button>
        </div>
    </div>

    <div class="row justify-content-center mb-4 mt-4">
        <div class="col col-6">
            <AlertDanger :message="message"/>
        </div>
    </div>

    <CustomFooter></CustomFooter>

</template>

<script>
import CustomFooter from "@/components/CustomFooter.vue";
import AlertDanger from "@/components/alerts/AlertDanger.vue";
import ListingPreviewCard from "@/components/ListingPreviewCard.vue";
import router from "@/router";
import moment from "moment/moment";
import ImageInput from "@/components/ImageInput.vue";


export default {
    name: "EditListingView",
    components: {ImageInput, CustomFooter, AlertDanger, ListingPreviewCard},
    emits: ['event-listing-edited'],

    data() {
        return {
            listingId: '',
            message: '',
            messageDate: '',
            counties:
                [
                    {
                        countyId: 0,
                        countyName: ''
                    }
                ],
            listingResponse: {
                listingName: '',
                listingDescription: '',
                listingAdditionalInfo: '',
                numberOfScores: 0,
                averageScore: 0,
                imagesData: [
                    ''
                ],
                features: [
                    {
                        featureId: 0,
                        featureName: '',
                        featureIsSelected: true
                    }
                ],
                countyId: 0,
                countyName: '',
                locationId: 0,
                locationAddress: '',
                locationLongitude: 0,
                locationLatitude: 0,
                owner_id: '',
                contact: {
                    userId: 0,
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNo: '',
                    imageData: ''
                },
                price: 0
            },
            addFullListing: {
                ownerUserId: Number(sessionStorage.getItem('userId')),
                listingId: 0,
                listingName: '',
                description: '',
                additionalInfo: '',
                price: 0,
                locationCountyId: 0,
                locationId: 0,
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
        router() {
            return router
        },
        getListingData() {
            this.listingId = this.$route.params.id
            this.$http.get("/listing", {
                    params: {
                        listingId: this.listingId,
                    }
                }
            ).then(response => {
                this.listingResponse = response.data
                this.addFullListing.imagesData[0] = this.listingResponse.imagesData[0]
                this.addFullListing.locationCountyId = this.listingResponse.countyId
                this.addFullListing.locationId = this.listingResponse.locationId
            }).catch(error => {
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

        setImage(selectedImage) {
            this.addFullListing.imagesData[0] = selectedImage
        },

        addListingInfo() {
            this.mapToAddFullListing()
            if (this.addFullListing.description === '' || this.addFullListing.locationAddress === '') {
                this.message = 'Täida kõik kohustuslikud väljad ja/või lisa vähemalt üks pilt'
            } else {
                this.$http.put("/edit-listing", this.addFullListing
                ).then(response => {
                    this.$emit('event-listing-edited', 'Telkimisplatsi info edukalt muudetud!');
                    router.push({name: 'myListingsRoute'})
                }).catch(error => {
                    router.push({name: 'errorRoute'})
                })
            }
        },

        mapToAddFullListing() {
            this.addFullListing.listingId = Number(this.listingId)
            this.addFullListing.listingName = this.listingResponse.listingName
            this.addFullListing.description = this.listingResponse.listingDescription
            this.addFullListing.additionalInfo = this.listingResponse.listingAdditionalInfo
            this.addFullListing.price = this.listingResponse.price
            this.addFullListing.locationAddress = this.listingResponse.locationAddress
            this.addFullListing.locationLongitude = this.listingResponse.locationLongitude
            this.addFullListing.locationLatitude = this.listingResponse.locationLatitude
            this.addFullListing.features = this.listingResponse.features

        }


    },
    mounted() {
        this.getListingData()
        this.getCounties()

    }
}
</script>

<style scoped>
.img-thumbnail {
    height: 150px;
}

</style>