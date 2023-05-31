<template>
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <div v-for="listing in listingsPreview" :key="listing.listingId" class="col">
            <div class="card px-4">
                <img @click="navigateToListing(listing.listingId)" src="../assets/logoTelk.png" class="card-img-top"
                     alt="...">
                <div @click="navigateToListing(listing.listingId)" class="card-body">
                    <h5 class="card-title text-start mb-4">{{ listing.listingName }}</h5>

                    <div class="d-flex justify-content-between">
                        <p class="card-text text-start">{{ listing.averageScore }}
                            <font-awesome-icon :icon="['fass', 'star']"/>
                            ({{ listing.numberOfScores }})
                        </p>
                        <p class="text-end">{{ listing.price }}€ /öö</p>
                    </div>
                </div>
                <!--Buttons -->
                <div v-if="showButtons === true" class="row mb-3 mt-3 justify-content-center">
                    <div class="col col-6">
                        <button @click="editListing" type="button" class="btn btn-dark">Muuda</button>
                    </div>
                    <div class="col col-6">
                        <button @click="deleteListing(listing.listingId)" type="button" class="btn btn-dark">Kustuta
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <!--    <delete-listing-modal ref="deleteListingModalRef"/>-->
    <modal v-show="showModal" @close="showModal = false" close-button-name="Ei">
        <template v-slot:header>
            Telkimisplatsi kustutamine
        </template>
        <template v-slot:body>
            Kas oled kindel, et soovid teha nii, et kõnealusest telkimisplatsist ei jää andmebaasis üldse mingit
            jälgegi?
            <br>
            (Me tegelikult lihtsalt deaktiveerime selle staatuse.)
        </template>
        <template v-slot:footer>
            <button @click="onDeleteConfirm" type="button" class="btn btn-warning">Jah</button>
        </template>
    </modal>
</template>
<script>
import router from "@/router";
import DeleteListingModal from "@/components/modals/DeleteListingModal.vue";
import Modal from "@/components/modals/Modal.vue";

export default {
    name: 'ListingPreviewCard',
    components: {Modal, DeleteListingModal},
    data() {
        return {
            showModal: false
        }
    },
    props: {
        listingsPreview: {},
        showButtons: false,
    },
    methods: {
        editListing() {
            alert("Muudan listingut")
        },
        onDelete() {
            this.showModal = true
        },
        onDeleteConfirm() {
            this.showModal = false
        },
        deleteListing(listingId) {
            this.onDelete()
            this.onDeleteConfirm()
            this.$http.delete("/my-listings", {
                    params: {
                        listingId: listingId,
                    }
                }
            ).then(response => {
                alert("Listing kustutatud")
            }).catch(error => {
                router.push({name: 'errorRoute'})
            });

        },
        navigateToListing(listingId) {
            router.push({name: 'listingRoute', params: {id: listingId}})
        }
    }
}
</script>
<style scoped>
.card {
    cursor: pointer;
}

.card-title {
    height: 2.5rem;
}

</style>