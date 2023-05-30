<template>
    <modal class="modal fade add-image-style" ref="modalRef" close-button-name="Ei">
        <template #header>
            Pildi lisamine
        </template>
        <template #body>
            <img :src="addFullListing.imagesData" class="img-thumbnail" alt="add listing images"/>
            <ImageInput @event-emit-base64="setImage"/>
            <br>
            Kas soovid siia pilte lisada?
        </template>
        <template #footer>
            <button @click="closeAddImage" type="button" class="btn btn-primary">Lisa</button>
        </template>
    </modal>

</template>

<script>
import Modal from "@/components/modals/Modal.vue";
import ImageInput from "@/components/ImageInput.vue";

export default {
    name: "AddImageModal",
    components: {ImageInput, Modal},
    data() {
        return {
            addFullListing: {
                imagesData: ['']
            }
        }
    },
    methods: {
        setImage(selectedImage) {
            this.addFullListing.imagesData[0] = selectedImage
        },
        closeAddImage() {
            this.$refs.modalRef.closeModal()
        },
    }
}
</script>

<style scoped>
.img-thumbnail {
    height: 150px;
}
.add-image-style {
    height: 1200px;
}

</style>