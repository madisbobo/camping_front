<template>
    <h1 class="mt-4">Kontakt</h1>
    <div class="container mt-5">
        <div class="row justify-content-start">
            <div class="col">
                Meie idukas on väga väike, mis tähendab, et kõigi töötajatega isiklikku kontakti astumine on imekiire.
            </div>
            <div class="col">
                <p>Võta ühendust tootejuhiga: Anton Antonson.</p>
                <p>Telefoni number +372 55 0607</p>
                <p>E-posti aadress anton@telkima.ee</p>
            </div>
        </div>

    </div>
    <CustomFooter></CustomFooter>
</template>

<script>
import CustomFooter from "@/components/CustomFooter.vue";

export default {
    name: "ContactView",
    components: {CustomFooter}
}
</script>

<style scoped>

</style>