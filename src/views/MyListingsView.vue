<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col col-4 mb-4 ">
                <h1>Minu Pakkumised</h1>
            </div>
        </div>

        <div class="row justify-content-center mb-5">
            <div class="col col-8">
                <h4 class="text-start mb-3">Minu pakkumised:</h4>
                <!--Listing card-->
                <ListingPreviewCard :listings-preview="myListingsPreview" :show-buttons = "true"/>
            </div>
        </div>

        <div class="row justify-content-center mt-5">
            <div class="col col-8">
                <h4 class="text-start mb-3">Lisa pakkumine:</h4>

            </div>
        </div>


        <AlertDanger :message="message"/>

        <div class="row justify-content-center">
            <div class="d-flex col col-6 mb-4">
                <label for="listingName" class="form-label">Telkimisplatsi nimi</label>
                <input v-model="newListing.listingName" type="text" id="listingName" class="form-control">
            </div>
        </div>


        <div class="row justify-content-center">
            <div class="col col-4 mb-4">
                <button @click="addNewListing" type="submit" class="btn btn-dark mb-3">Registreeri</button>
            </div>
        </div>




    </div>
</template>

<script>
import router from "@/router";
import ListingPreviewCard from "@/components/ListingPreviewCard.vue";
import AlertDanger from "@/components/alerts/AlertDanger.vue";

export default {
    name: "MyListingsView",
    components: {AlertDanger, ListingPreviewCard},
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
            alert("Lisan uue listingu!")
        }
    },

    beforeMount() {
        this.getMyListingsPreview()
    }
}

</script>