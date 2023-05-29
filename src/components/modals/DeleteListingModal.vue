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

export default {
    name: "DeleteListingModal",
    components: {Modal},
    methods: {
        executeDelete() {
            //todo: kirjuta edasi!
        },
    }
}
</script>

<style scoped>

</style>