<template>
    <h1 class="mt-4">Minu Listingud/Pakkumised</h1>
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

</style>