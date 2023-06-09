<template>
    <div>
        <AlertDanger :message="message"/>

        <!-------- KOHA NIMI -------->
        <div class="container-fluid pt-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col col-12 text-start">
                        <h1>{{ listingResponse.listingName }}</h1>
                    </div>
                </div>
            </div>
        </div>

        <!-------- PILDID JA KIRJELDUS -------->

        <div class="container-fluid pt-5 pb-3">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col col-5 text-start">
                        <div v-if="listingResponse.imagesData.length === 0 || listingResponse.imagesData[0] === ''">
                            <font-awesome-icon :icon="['fass', 'image']" size="2xl"/>
                        </div>
                        <div v-else>
                            <img class="figure-img listing-img" :src="listingResponse.imagesData[0]" alt="">
                        </div>
                    </div>
                    <div class="col col-1 text-start"></div>
                    <div class="col col-6 text-start">
                        <div class="row justify-content-center">
                            <div class="col-12 text-start mb-2">
                                <h3>Kirjeldus:</h3>
                            </div>
                        </div>
                        <p>{{ listingResponse.listingDescription }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-------- OMADUSED -------->
        <div class="container-fluid pt-5 pb-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 text-start mb-2">
                        <h3>Omadused</h3>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-6 text-start">
                        <ul class="list-unstyled">
                            <li class="mb-2"
                                v-for="feature in listingResponse.features.slice(0, listingResponse.features.length/2)"
                                :key="feature.featureName">
                                <span v-if="feature.featureIsSelected" class="me-2"><font-awesome-icon
                                        :icon="['fas', 'check']"/></span>
                                <span v-else class="me-2"><font-awesome-icon :icon="['fas', 'x']"/></span>
                                {{ feature.featureName }}
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 text-start">
                        <ul class="list-unstyled">
                            <li class="mb-2"
                                v-for="feature in listingResponse.features.slice(listingResponse.features.length/2)"
                                :key="feature.featureName">
            <span v-if="feature.featureIsSelected" class="me-2">
              <font-awesome-icon :icon="['fas', 'check']"/>
            </span>
                                <span v-else class="me-2">
              <font-awesome-icon :icon="['fas', 'x']"/>
            </span>
                                {{ feature.featureName }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-------- ASUKOHT -------->
        <div class="container-fluid custom-div-bg-1 pt-5 pb-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-6 text-start mb-2">
                        <h3>Asukoht</h3>
                    </div>
                    <div class="col-6 text-start mb-2">
                        <h3>Kontakt</h3>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col col-5 text-start">
                        <p><span class="fw-bold">Aadress:</span> {{ listingResponse.locationAddress }} |
                            {{ listingResponse.countyName }}</p>
                        <p><span class="fw-bold">Longitude:</span> {{ listingResponse.locationLongitude }}</p>
                        <p><span class="fw-bold">Latitude:</span> {{ listingResponse.locationLatitude }}</p>

                        <div id=" map-container-google-2
            " class="z-depth-1-half map-container-2 mt-4">
                            <iframe v-if="listingResponse.locationLongitude !== 0 || listingResponse.locationLatitude !== 0"
                                    :src="`https://maps.google.com/maps?q=${listingResponse.locationLongitude},${listingResponse.locationLatitude}&output=embed`"
                                    allowfullscreen></iframe>
                            <iframe v-else
                                    src="https://www.google.com/maps/place/Estonia/@58.8056051,24.4744411,7.75z/data=!4m6!3m5!1s0x4692949c82a04bfd:0x40ea9fba4fb425c3!8m2!3d58.595272!4d25.0136071!16zL20vMDJrbW0?entry=ttu&output=embed`"
                                    allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="col col-1 text-start">
                    </div>
                    <!-------- KONTAKT -------->
                    <div class="col col-4 text-start">
                        <p><span class="fw-bold">Võõrustaja:</span> {{ listingResponse.contact.firstName }}
                            {{ listingResponse.contact.lastName }}</p>
                        <p><span class="fw-bold">E-post:</span> {{ listingResponse.contact.email }}</p>
                        <p><span class="fw-bold">Telefon:</span> {{ listingResponse.contact.phoneNo }}</p>
                        <!-------- LISAINFO -------->
                        <div class="col col-12 text-start mt-4">
                            <h3>Lisainfo</h3>
                            <p>{{ listingResponse.listingAdditionalInfo }}</p>
                        </div>
                    </div>
                    <div class="col col-2">
                        <div v-if="listingResponse.contact.imageData === 0">
                            <font-awesome-icon :icon="['fass', 'image']" size="2xl"/>
                        </div>
                        <div v-else>
                            <img class="figure-img profile-img" :src="listingResponse.contact.imageData"/>
                        </div>
                    </div>


                </div>
            </div>
        </div>

        <!-------- BRONEERI -------->
        <div class="container-fluid pt-5 pb-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col col-12 text-start">
                        <h3 class="mb-4">Broneeri</h3>
                        <AlertDanger :message="messageDate"/>

                        <div class="row justify-content-center mb-4">
                            <div class="col col-6 text-start">
                                <div class="booking-form">
                                    <form>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <span class="form-label">Saabumine</span>
                                                    <input v-model="checkInDate" class="form-control" type="date"
                                                           required>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <span class="form-label">Lahkumine</span>
                                                    <input v-model="checkOutDate" class="form-control" type="date"
                                                           required>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <span class="form-label">Telkide arv</span>
                                                    <select v-model="numberOfTents" class="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                    <span class="select-arrow"></span>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <span class="form-label">Inimeste arv</span>
                                                    <select v-model="numberOfPeople" class="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                        <option>7</option>
                                                        <option>8</option>
                                                        <option>9</option>
                                                        <option>10</option>
                                                    </select>
                                                    <span class="select-arrow"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-btn text-center">
                                            <button class="submit-btn">Broneeri</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col col-1">
                            </div>
                            <div class="col col-5">
                                <div class="col col-6 text-start booking-summary">
                                    <p class="mb-3 fw-bold">Broneeringu kokkuvõte:</p>
                                    <p>Inimeste arv: {{ numberOfPeople }} </p>
                                    <p>Ööde arv: {{ calculateNumberOfNights() }} </p>
                                    <p>Hind inimese kohta / öö: {{ listingResponse.price }} €</p>
                                    <p>Hind kokku: {{ calculateTotalPrice() }} €</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>

    <CustomFooter></CustomFooter>
</template>

<script>
import router from "@/router";
import ListingPreviewCard from "@/components/ListingPreviewCard.vue";
import AlertDanger from "@/components/alerts/AlertDanger.vue";
import moment from 'moment';
import CustomFooter from "@/components/CustomFooter.vue";


export default {
    name: "ListingView",
    components: {CustomFooter, AlertDanger, ListingPreviewCard},
    data() {
        return {
            listingId: '',
            message: '',
            messageDate: '',
            showMap: false,
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
            checkInDate: '',
            checkOutDate: '',
            numberOfTents: 0,
            numberOfPeople: 0,
            numberOfNights: 0,
            totalPrice: 0
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

            if (this.listingResponse.locationLatitude === 0 || this.listingResponse.locationLongitude === 0) {

            }
        },
        calculateNumberOfNights() {
            if (this.checkInDate && this.checkOutDate) {
                // Convert the input date values to Moment.js objects
                const checkInDate = moment(this.checkInDate);
                const checkOutDate = moment(this.checkOutDate);
                // Calculate the number of days between the two dates
                this.numberOfNights = checkOutDate.diff(checkInDate, 'days');
                if (this.numberOfNights < 0) {
                    this.numberOfNights = 0
                    this.messageDate = 'Alguskuupäev peab olema varajasem kui lahkumiskuupäev'
                }
                return this.numberOfNights
            }
            return 0;
        },
        calculateTotalPrice() {
            if (this.checkInDate && this.checkOutDate && this.numberOfNights) {
                this.totalPrice = this.listingResponse.price * this.numberOfNights * this.numberOfPeople;
                return this.totalPrice
            }
            return 0;
        }
    },
    mounted() {
        this.getListingData()
    }
}
</script>

<style scoped>

.profile-img {
    height: 120px;
    border-radius: 100%;
}

.listing-img {
    max-width: 100%;
    max-height: 500px;
    height: auto;
    border-radius: 1%;
}

.booking-summary {
    font-size: 20px;
}


.section {
    position: relative;
    height: 100vh;
}

#booking::before {
    content: '';
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
}

.booking-form {
    background-color: #fff;
    padding: 50px 20px;
    -webkit-box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
}

.booking-form .form-group {
    position: relative;
    margin-bottom: 30px;
}

.booking-form .form-control {
    background-color: #ebecee;
    border-radius: 4px;
    border: none;
    height: 40px;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #3e485c;
    font-size: 14px;
}

.booking-form .form-control::-webkit-input-placeholder {
    color: rgba(62, 72, 92, 0.3);
}

.booking-form .form-control:-ms-input-placeholder {
    color: rgba(62, 72, 92, 0.3);
}

.booking-form .form-control::placeholder {
    color: rgba(62, 72, 92, 0.3);
}

.booking-form input[type="date"].form-control:invalid {
    color: rgba(62, 72, 92, 0.3);
}

.booking-form select.form-control {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

.booking-form select.form-control + .select-arrow {
    position: absolute;
    right: 0px;
    bottom: 4px;
    width: 32px;
    line-height: 32px;
    height: 32px;
    text-align: center;
    pointer-events: none;
    color: rgba(62, 72, 92, 0.3);
    font-size: 14px;
}

.booking-form select.form-control + .select-arrow:after {
    content: '\279C';
    display: block;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
}

.booking-form .form-label {
    display: inline-block;
    color: #3e485c;
    font-weight: 700;
    margin-bottom: 6px;
    margin-left: 7px;
}

.booking-form .submit-btn {
    display: inline-block;
    color: #fff;
    background-color: black;
    font-weight: 700;
    padding: 14px 30px;
    border-radius: 4px;
    border: none;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
}

.booking-form .submit-btn:hover,
.booking-form .submit-btn:focus {
    opacity: 0.9;
}

.map-container-2 {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
}

.map-container-2 iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
}

.custom-div-bg-1 {
    background-color: #bee8d4;
}


</style>