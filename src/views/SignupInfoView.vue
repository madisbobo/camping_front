<template>
    <div @keydown.enter="signupAddContact" class="container mt-4">

        <AlertDanger :message="message"/>

        <div class="row justify-content-center">
            <div class="col col-4 mb-4">
                <h2>Ole hea, täida kõik kohustuslikud väljad!</h2>
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
                <img v-if="userContact.imageData === ''"  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" class="img-thumbnail" alt="profile image"/>
                <img v-else :src="userContact.imageData" class="img-thumbnail" alt="profile image"/>
                <ImageInput @event-emit-base64="setImage"/>
            </div>
        </div>

        <!--Buttons -->
        <div class="row justify-content-center mb-4 mt-4">
            <div class="col col-4">
                <button @click="signupAddContact" type="submit" class="btn btn-dark me-3">Registreeri</button>
                <button @click="abortSignup" type="button" class="btn btn-dark ms-3">Loobu</button>
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
    name: "SignupInfoView",
    components: {CustomFooter, ImageInput, AlertDanger},
    data() {
        return {
            message: '',
            userContact: {
                userId: Number(sessionStorage.getItem('userId')),
                firstName: '',
                lastName: '',
                email: '',
                phoneNo: '',
                imageData: ''
            }
        }
    },
    methods: {
        setImage(selectedImage) {
            this.userContact.imageData = selectedImage
        },

        abortSignup() {
            this.$http.delete("/signup-info", {
                    params: {
                        userId: this.userContact.userId
                    }
                }
            ).then(response => {
                sessionStorage.clear()
                this.$emit('event-update-nav-menu')
                router.push({name: 'homeRoute'})
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        },
        signupAddContact() {
            this.$http.post("/signup-info", this.userContact
            ).then(response => {
                router.push({name: 'homeRoute'})
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        },

    }
}
</script>