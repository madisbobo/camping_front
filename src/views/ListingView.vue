<template>
    <div class="container mt-4">
        <AlertDanger :message="message"/>

        <!-------- KOHA NIMI -------->
        <div class="row justify-content-center mb-5">
            <div class="col col-12 text-start">
                <h3>{{ listingResponse.listingName }}</h3>
            </div>
        </div>

        <!-------- PILDID JA KIRJELDUS -------->
        <div class="row justify-content-center mb-5">
            <div class="col col-6 text-start">
                <h3>Pildid</h3>
            </div>
            <div class="col col-6 text-start">
                <h3>Kirjeldus:</h3>
                <p>{{ listingResponse.listingDescription }}</p>
            </div>
        </div>

        <!-------- OMADUSED -------->
        <div class="row justify-content-center mb-5">
            <div class="col col-12 text-start">
                <h3>Omadused</h3>
                <ul>
                    <li v-for="feature in listingResponse.features"> {{ feature.featureName }}:
                        {{ feature.featureIsSelected }}
                    </li>
                </ul>
            </div>
        </div>

        <!-------- ASUKOHT -------->
        <div class="row justify-content-center mb-5">
            <div class="col col-12 text-start">
                <h3>Asukoht</h3>
                <p>{{ listingResponse.locationAddress }}</p>
                <button @click="openMap" type="submit" class="btn btn-dark me-3">Vaata kaardilt</button>
            </div>
        </div>

        <!-------- KONTAKT -------->
        <div class="row justify-content-center mb-5">
            <div class="col col-6 text-start">
                <h3>Kontakt</h3>
                <p><span class="fw-bold">Võõrustaja:</span> {{ listingResponse.contact.firstName }} {{ listingResponse.contact.lastName }}</p>
                <p><span class="fw-bold">E-post:</span> {{ listingResponse.contact.email }}</p>
                <p><span class="fw-bold">Telefon:</span> {{ listingResponse.contact.phoneNo }}</p>
            </div>
            <div class="col col-6">
                <img class="figure-img" src="../assets/logoTelk.png"/>
            </div>
        </div>

        <!-------- LISAINFO -------->
        <div class="row justify-content-center mb-5">
            <div class="col col-12 text-start">
                <h3>Lisainfo</h3>
                <p>{{ listingResponse.listingAdditionalInfo }}</p>
            </div>
        </div>

        <!-------- BRONEERI -------->
        <div class="row justify-content-center">
            <div class="col col-12 text-start">
                <h3>Broneeri</h3>
            </div>
        </div>

        <div class="row justify-content-center mb-5">
            <div class="col col-6 text-start">
                <p>Saabumine / Lahkumine</p>
                <p>kirjed</p>
                <p>Hind inimese kohta / öö: {{ listingResponse.price }} €</p>
                <p>Hind kokku: {{ listingResponse.price * 5 * 2}} €</p>
            </div>
            <div class="col col-6">
                <div class="form-outline " style="width: 15rem;">
                    <label class="form-label" for="typeNumber">Number input</label>
                    <input value="1" type="number" id="typeNumber" class="form-control" />
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import router from "@/router";
import ListingPreviewCard from "@/components/ListingPreviewCard.vue";
import AlertDanger from "@/components/alerts/AlertDanger.vue";

export default {
    name: "ListingView",
    components: {AlertDanger, ListingPreviewCard},
    data() {
        return {
            listingId: '',
            message: '',
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
                countyName: '',
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
            }
        }
    },
    methods: {
        getListingData() {
            this.listingId = this.$route.params.id
            this.$http.get("/listing", {
                    params: {
                        listingId: this.listingId,
                    }
                }
            ).then(response => {
                this.listingResponse = response.data
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        },
        openMap() {
            alert("Open map")
        }
    },
    mounted() {
        this.getListingData()
    }
}
</script>

<style scoped>

</style>