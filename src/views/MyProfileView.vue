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
                        <h5>Eesnimi:</h5>
                        <p>{{ userContact.firstName }}</p>
                    </div>
                    <div class="mb-3 text-start">
                        <h5>Perekonnanimi:</h5>
                        <p>{{ userContact.lastName }}</p>
                    </div>
                    <div class="mb-3 text-start">
                        <h5>Email:</h5>
                        <p>{{ userContact.email }}</p>
                    </div>
                    <div class="mb-3 text-start">
                        <h5>Telefoni Nr:</h5>
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
                <button @click="editContact" type="button" class="btn btn-dark me-3">Muuda andmeid</button>
            </div>
        </div>



    </div>

    <CustomFooter></CustomFooter>
</template>

<script>
import router from "@/router";
import Modal from "@/components/modals/Modal.vue";
import CustomFooter from "@/components/CustomFooter.vue";

export default {
    name: "MyProfileView",
    components: {CustomFooter, Modal},
    data() {
        return {
            message: '',
            userId: Number(sessionStorage.getItem('userId')),
            userContact: {
                userId: null,
                firstName: '-',
                lastName: '-',
                email: '-',
                phoneNo: '-',
                imageData: ''
            },
            showModal: false,
        }
    },
    methods: {
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
        editContact() {
            router.push({name: 'editMyProfileRoute'})

        }
    },
    mounted() {
        this.getContact()
    }
}
</script>