<template>
    <modal ref="modalRef" close-button-name="Ei">
        <template #header>
            Telkimisplatsi kustutamine
        </template>
        <template #body>
            Kas oled kindel, et soovid kõnealust telkimisplatsi kustutada?
        </template>
        <template #footer>
            <button @click="executeDelete" type="button" class="btn btn-primary">Jah</button>
        </template>
    </modal>

</template>

<script>
import Modal from "@/components/modals/Modal.vue";
import router from "@/router";

export default {
    name: "DeleteListingModal",
    components: {Modal},
    methods: {
        executeDelete() {
            this.$http.delete("/my-listings", {
                    params: {
                        listingId: this.listingId
                    }
                }
            ).then(response => {
                this.$refs.modalRef.closeModal()
                this.$emit('event-listing-deleted')
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        }
    },
}

</script>

<style scoped>

</style>