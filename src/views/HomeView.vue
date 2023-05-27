<template>
    <div class="home">
        <img alt="Camping logo" src="../assets/logoTelk.png">
        <h1>Tule telkima, meil on tuhandeid jummalast ilusa vaatega (ookeanile) telkimisplatse! Sa ei kahetse. Maksmine
            sulas.</h1>
    </div>
<!--    <div class="row justify-content-center">-->
<!--        <div class="col col-8">-->
<!--            <h4 class="text-start mb-3">Minu pakkumised:</h4>-->
<!--            <div class="row row-cols-1 row-cols-md-2 g-4">-->
<!--                <div class="col px-3">-->
<!--                    <div class="card px-4">-->
<!--                        <img src="../assets/logoTelk.png" class="card-img-top" alt="...">-->
<!--                        <div class="card-body">-->
<!--                            <h5 class="card-title text-start mb-4">Aegviidu puhkekeskus</h5>-->
<!--                            <div class="d-flex justify-content-between">-->
<!--                                <p class="card-text text-start">4.7-->
<!--                                    <font-awesome-icon :icon="['fass', 'star']"/>-->
<!--                                </p>-->
<!--                                <p class="text-end">{{ listingPreview.price }} / € / €</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
</template>

<script>
// @ is an alias to /src

import router from "@/router";

export default {
    name: 'HomeView',
    components: {},
    data() {
        return {
            message: '',
            userId: 0,
            listingPreview: [{
                listingId: 0,
                listingName: '',
                price: 0,
                imageData: '',
                averageScore: 0,
                numberOfScores: 0
            }],


        }

    },
    // methods: {
    //     getListingPreview() {
    //         this.$http.get("/all-listings", {
    //                 params: {
    //                     userId: this.userId
    //                 }
    //             }
    //         ).then(response => {
    //             alert(this.listingPreview.listingName)
    //             this.listingPreview = response.data
    //         }).catch(error => {
    //             router.push({name: 'errorRoute'})
    //         })
    //     },
    // },
    // mounted() {
    //     this.getListingPreview()
    // }

}
</script>
