<template>
    <modal ref="modalRef" close-button-name="Ei">
        <template #header>
            Telkimisplatsi kustutamine
        </template>
        <template #body>
            Kas oled kindel, et soovid teha nii, et kõnealusest telkimisplatsist ei jää andmebaasis üldse mingit jälgegi?
            <br>
            (Me tegelikult lihtsalt deaktiveerime selle staatuse.)
        </template>
        <template #footer>
            <button @click="deleteListing" type="button" class="btn btn-warning">Jah</button>
        </template>
    </modal>

</template>

<script>
import Modal from "@/components/modals/Modal.vue";
import router from "@/router";

export default {
    name: "DeleteListingModal",
    components: {Modal},
    emits: ['event-listing-deleted'],
    data() {
        return {
            listingId: null
        }
    },
    methods: {
        activateDelete(listingId) {
            this.listingId = listingId
            this.$refs.modalRef.openModal()
        },
        deleteListing() {
            this.$http.delete("/my-listings", {
                    params: {
                        listingId: this.listingId
                    }
                }
            ).then(response => {
                this.$emit('event-listing-deleted', 'Telkimisplatsi info on kustutatud')
                router.push({name: 'homeRoute'})
                this.$refs.modalRef.closeModal()
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        }
    }
}

</script>

<style scoped>

</style>