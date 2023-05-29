<template>
    <modal ref="modalRef" close-button-name="Ei">
        <template #header>
            Pildi lisamine
        </template>
<!--        todo: siia on vaja panna pildi input asi..-->
        <template #body>
            Kas soovid siia pilte lisada?
        </template>
        <template #footer>
            <button @click="executeAddImage" type="button" class="btn btn-primary">Lisa</button>
        </template>
    </modal>

</template>

<script>
import Modal from "@/components/modals/Modal.vue";

export default {
    name: "AddImageModal",
    components: {Modal},
    methods: {
        executeAddImage() {
            // todo: kirjuta edasi!!!
        },
    }
}
</script>

<style scoped>

</style>