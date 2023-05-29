<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col col-4 mb-4 ">
                <h1>Minu Pakkumised</h1>
            </div>
        </div>

        <AlertDanger :message="message"/>

        <div class="row justify-content-center">
            <div class="col col-8">
                <h4 class="text-start mb-3">Minu pakkumised:</h4>
            </div>
            <div class="col col-8 mb-4">
                <!--Listing card-->
                <ListingPreviewCard :listings-preview="myListingsPreview" :show-buttons="true"/>
            </div>
        </div>


    <div class="row justify-content-center">
        <div class="col col-8">
            <h4 class="text-start mb-3">Lisa pakkumine:</h4>
            <div class="row">
                <div class="col col-8">
                    <div class="input-group mb-3">
                        <input v-model="newListing.listingName" type="text" class="form-control" placeholder="Telkimisplatsi nimi">
                        <button @click="addNewListing" class="btn btn-dark" type="button" id="button-addon2">Lisa
                        </button>
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
import CustomFooter from "@/components/CustomFooter.vue";

export default {
    name: "MyListingsView",
    components: {CustomFooter, AlertDanger, ListingPreviewCard},
    data() {
        return {
            message: '',
            myListingsPreview: [
                {
                    listingId: 0,
                    listingName: '',
                    price: 0,
                    imageData: '',
                    numberOfScores: 0,
                    averageScore: 0.0
                }
            ],
            newListing: {
                ownerUserId: Number(sessionStorage.getItem('userId')),
                listingName: ''
            },
            errorResponse: {
                message: '',
                errorCode: 0,
            },
            addListingResponse: {
                listingId: 0,
            },
        }

    },
    methods: {
        getMyListingsPreview() {
            this.$http.get("/my-listings", {
                    params: {
                        userId: Number(sessionStorage.getItem('userId'))
                    }
                }
            ).then(response => {
                this.myListingsPreview = response.data
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        },

        addNewListing() {
            this.message = ''
            if (this.newListing.listingName === '') {
                this.message = 'Täida tühi väli'
            } else {
                this.$http.post("/my-listings", this.newListing
                ).then(response => {
                    this.addListingResponse = response.data
                    sessionStorage.setItem('listingId', this.addListingResponse.listingId)
                    sessionStorage.setItem('listingName', this.newListing.listingName)
                    router.push({name: 'addListingRoute'})
                }).catch(error => {
                    this.errorResponse = error.response.data
                    if (this.errorResponse.errorCode === 333) {
                        this.message = this.errorResponse.message;
                    } else {
                        router.push({name: 'errorRoute'})
                    }
                })
            }



        },

    },

    beforeMount() {
        this.getMyListingsPreview()
    }
}

</script>