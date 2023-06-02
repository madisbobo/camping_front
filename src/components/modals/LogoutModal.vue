<template>
    <modal ref="modalRef" close-button-name="Ei">
        <template #header>
            Väljalogimine
        </template>
        <template #body>
            Kas soovid välja logida?
        </template>
        <template #footer>
            <button @click="executeLogout" type="button" class="btn btn-primary">Jah</button>
        </template>
    </modal>

</template>

<script>
import Modal from "@/components/modals/Modal.vue";
import router from "@/router";

export default {
    name: "LogoutModal",
    components: {Modal},
    methods: {
        executeLogout() {
            sessionStorage.clear();
            this.$refs.modalRef.closeModal()
            this.$emit('event-update-nav-menu')
            router.push({name: 'homeRoute'})
        },
    }
}
</script>

<style scoped>

</style>