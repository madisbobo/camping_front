<template class="mt-4">
    <div class="container mt-4">

        <div class="row justify-content-center">
            <div class="col col-4 mb-4 ">
                <h1>Minu Porfiil</h1>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col col-4 mb-4">

                <form>
                    <div class="mb-3 text-start">
                        <h3>Eesnimi:</h3>
                        <p>{{ userContact.firstName }}</p>
                    </div>
                    <div class="mb-3 text-start">
                        <h3>Perekonnanimi:</h3>
                        <p>{{ userContact.lastName }}</p>
                    </div>
                    <div class="mb-3 text-start">
                        <h3>Email:</h3>
                        <p>{{ userContact.email }}</p>
                    </div>
                    <div class="mb-3 text-start">
                        <h3>Telefoni Nr:</h3>
                        <p>{{ userContact.phoneNo }}</p>
                    </div>
                </form>
            </div>

            <!--Add profile image-->
            <div class="col col-4 mb-4 justify-content-center">
                <img :src="userContact.imageData" class="img-thumbnail" alt="profile image"/>
                <div/>
            </div>
        </div>

        <!--Buttons -->
        <div class="row mb-4 mt-4 justify-content-center">
            <div class="col col-4">
                <button @click="editContact" type="submit" class="btn btn-dark me-3">Muuda andmeid</button>
            </div>

        </div>


    </div>
</template>

<script>
import AlertDanger from "@/components/alerts/AlertDanger.vue";
import ImageInput from "@/components/ImageInput.vue";
import router from "@/router";

export default {
    name: "MyProfileView",
    components: {ImageInput, AlertDanger},
    data() {
        return {
            message: '',
            userId: Number(sessionStorage.getItem('userId')),
            userContact: {
                firstName: '-',
                lastName: '-',
                email: '-',
                phoneNo: '-',
                imageData: ''
            }
        }
    },
    methods: {
        getContact() {
            this.$http.get("/my-profile", {
                    params: {
                        userId: this.userContact.userId
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