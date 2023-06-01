<template>
    <div @keydown.enter="editContact" class="container mt-4">

        <AlertDanger :message="message"/>

        <div class="row justify-content-center">
            <div class="col col-4 mb-4">
                <h1>Muuda andmeid</h1>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col col-4 mb-4">

                <form>
                    <div class="mb-3 text-start">
                        <label for="firstName" class="form-label ">Eesnimi *</label>
                        <input v-model="userContact.firstName" type="text" id="firstName" class="form-control">
                    </div>
                    <div class="mb-3 text-start">
                        <label for="lastName" class="form-label">Perekonnanimi *</label>
                        <input v-model="userContact.lastName" type="text" id="lastName" class="form-control">
                    </div>
                    <div class="mb-3 text-start">
                        <label for="email" class="form-label">E-posti aadress *</label>
                        <input v-model="userContact.email" type="text" id="email" class="form-control">
                    </div>
                    <div class="mb-3 text-start">
                        <label for="phoneNo" class="form-label">Telefoni nr</label>
                        <input v-model="userContact.phoneNo" type="text" id="phoneNo" class="form-control">
                    </div>
                </form>
            </div>

            <!--Add profile image-->
            <div class="col col-4 mb-4">
                <img :src="userContact.imageData" class="img-thumbnail" alt="profile image"/>
                <ImageInput @event-emit-base64="setImage"/>
                <div/>
            </div>
        </div>

        <!--Buttons -->
        <div class="row justify-content-center mb-4 mt-4">
            <div class="col col-4">
                <button @click="editContact" type="submit" class="btn btn-dark me-3">Kinnita</button>
                <button @click="toMyProfile" type="button" class="btn btn-dark ms-3">Tagasi</button>
            </div>

        </div>
    </div>
    <CustomFooter></CustomFooter>
</template>

<script>
import AlertDanger from "@/components/alerts/AlertDanger.vue";
import ImageInput from "@/components/ImageInput.vue";
import router from "@/router";
import CustomFooter from "@/components/CustomFooter.vue";

export default {
    name: "EditMyProfileView",
    components: {CustomFooter, ImageInput, AlertDanger},
    data() {
        return {
            message: '',
            userId: Number(sessionStorage.getItem('userId')),
            userContact: {
                userId: 0,
                firstName: '',
                lastName: '',
                email: '',
                phoneNo: '',
                imageData: ''
            }

        }
    },
    methods: {
        toMyProfile() {
            router.push({name: 'myProfileRoute'})
        },
        setImage(selectedImage) {
            this.userContact.imageData = selectedImage
        },

        editContact() {
            if (this.userContact.firstName === '' || this.userContact.lastName === '' || this.userContact.email === '') {
                this.$emit('event-error-message', 'Täida kõik väljad.')
            } else {
                this.userContact.userId = this.userId
                this.$http.put("/edit-profile", this.userContact
                ).then(response => {
                    router.push({name: 'myProfileRoute'})
                }).catch(error => {
                    router.push({name: 'errorRoute'})
                })
            }
        },


        getContact() {
            this.$http.get("/my-profile", {
                    params: {
                        userId: this.userId
                    }
                }
            ).then(response => {
                this.userContact = response.data

            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        },


    },
    mounted() {
        this.getContact()
    }
}
</script>

<style scoped>

</style>