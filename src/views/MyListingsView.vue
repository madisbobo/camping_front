<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col col-4 mb-4 ">
                <h1>Minu Pakkumised</h1>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col col-8">
                <h4 class="text-start mb-3">Minu pakkumised:</h4>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col px-3">
                        <div class="card px-4">
                            <img src="../assets/logoTelk.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-start mb-4">Aegviidu puhkekeskus</h5>
                                <div class="d-flex justify-content-between">
                                    <p class="card-text text-start">4.7 <font-awesome-icon :icon="['fass', 'star']"/>
                                    </p>
                                    <p class="text-end">10 / €</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col px-3">
                        <div class="card px-4">
                            <img src="../assets/logoTelk.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-start mb-4">Aegviidu puhkekeskus looduskauni järve ääres ja ilus mets on ka</h5>
                                <div class="d-flex justify-content-between">
                                    <p class="card-text text-start">4.7 <font-awesome-icon :icon="['fass', 'star']"/>
                                    </p>
                                    <p class="text-end">10/€</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col px-3">
                        <div class="card px-4">
                            <img src="../assets/logoTelk.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-start mb-4">Aegviidu puhkekeskus looduskauni järve ääres</h5>
                                <div class="d-flex justify-content-between">
                                    <p class="card-text text-start">4.7 <font-awesome-icon :icon="['fass', 'star']"/>
                                    </p>
                                    <p class="text-end">10 / €</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col px-3">
                        <div class="card px-4">
                            <img src="../assets/logoTelk.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-start mb-4">Aegviidu puhkekeskus looduskauni järve ääres</h5>
                                <div class="d-flex justify-content-between">
                                    <p class="card-text text-start">4.7 <font-awesome-icon :icon="['fass', 'star']"/>
                                    </p>
                                    <p class="text-end">10 / €</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </div>
</template>

<script>
import router from "@/router";

export default {
    name: "MyListingsView",
    data() {
        return {
            message: '',
            userId: Number(sessionStorage.getItem('userId')),
            myListingPreviews: [{
                listingId: 0,
                listingName: '',
                price: 0,
                imageData: '',
                rating: 0,
                numberOfRatings: 0
            }],


        }

    },
    methods: {
        getMyListingPreview() {
            this.$http.get("/my-listings", {
                    params: {
                        userId: this.userId
                    }
                }
            ).then(response => {
                alert(this.myListingPreviews.listingName)
                this.myListingPreviews = response.data
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        },
    },

    mounted() {
        this.getMyListingPreview()
    }
}

</script>

<style scoped>
.card-title {
    height: 2.5rem;
}

</style>