<template>

    <div class="row justify-content-center">
        <div class="col col-4 mb-4">
            <h2>Lisa telkimisplatsi andmed:</h2>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col col-4 mb-4">

            <form>
                <div class="mb-3 text-start">
                    <label for="listingName" class="form-label ">Platsi nimi: </label>
                    <input v-model="listingName" type="text" id="listingName" class="form-control">
                </div>

                <div class="mb-3 text-start">
                    <label for="listingDescription" class="form-label">Kirjeldus:</label>
                    <textarea v-model="listingDescription" id="listingDescription" class="form-control form-control-lg"></textarea>
                </div>
                <div class="text-start">
                    <label for="dropdownMenuButton" class="form-label">Vali asukoht:</label>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            Maakond:
                        </button>
                        <ul class="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownMenuButton">
                            <li><a class="dropdown-item" href="#">Option 1</a></li>
                            <li><a class="dropdown-item" href="#">Option 2</a></li>
                            <li><a class="dropdown-item" href="#">Option 3</a></li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div class="row justify-content-center mb-4 mt-4">
        <div class="col col-2 mb-4">
            <div class="mb-3 text-start">
                <label for="address" class="form-label">Aadress:</label>
                <input v-model="address" type="text" id="address" class="form-control">
            </div>
        </div>
        <div class="col col-2 mb-7">
            <div class="mb-3 text-start">
                <label for="locationLongitude" class="form-label">Longitude:</label>
                <input v-model="locationLongitude" type="text" id="locationLongitude" class="form-control">
            </div>
            <div class="mb-3 text-start">
                <label for="locationLatitude" class="form-label">Latitude:</label>
                <input v-model="locationLatitude" type="text" id="locationLatitude" class="form-control">
            </div>
        </div>
    </div>


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
    components: {CustomFooter, CustomNavigationBar},

    data() {
        return {
            message: '',
            listingId: Number(sessionStorage.getItem('listingId')),

        }
    },


    methods: {

        abortAddListing() {
            this.$http.delete("/add-listing", {
                    params: {
                        listingId: this.listingId
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

        addListingInfo() {
            this.$http.post("/signup-info", this.listing
            ).then(response => {
                router.push({name: 'homeRoute'})
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        }

    }
}
</script>

<style scoped>

</style>