<template>
    <div @keydown.enter="signupAddContact" class="container">

        <AlertDanger :message="message"/>

        <div class="row justify-content-center">
            <div class="col mb-4">
                <h2>Ole hea, täida kõik kohustuslikud väljad!</h2>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col col-3 mb-5">

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
            <div class="col col-4 mt-5 justify-content-center">
                <img :src="userContact.imageData" class="img-thumbnail" alt="profile image"/>
                <ImageInput @event-emit-base64="setImage"/>
            </div>
        </div>

        <!--Buttons -->
        <div class="row justify-content-center">
            <div class="col col-4">
                <button @click="signupAddContact" type="submit" class="btn btn-dark me-3">Registreeri</button>
                <button @click="abortSignup" type="button" class="btn btn-dark ms-3">Loobu</button>
            </div>

        </div>


    </div>
</template>

<script>
import AlertDanger from "@/components/alerts/AlertDanger.vue";
import ImageInput from "@/components/ImageInput.vue";
import router from "@/router";

export default {
    name: "SignupInfoView",
    components: {ImageInput, AlertDanger},
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

        signupAddContact() {
            this.$http.post("/signup-info", this.userContact
            ).then(response => {
                const responseBody = response.data
                router.push({name: 'homeRoute'})
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        },

        abortSignup() {
            alert("SIIN" + this.userContact.userId)
            this.$http.delete("/signup", {
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
    }
}
</script>