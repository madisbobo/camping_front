<template>
    <div @keydown.enter="signupAddContact" class="container">

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
                        <input v-model="firstName" type="text" id="firstName" class="form-control">
                    </div>
                    <div class="mb-3 text-start">
                        <label for="lastName" class="form-label">Perekonnanimi *</label>
                        <input v-model="lastName" type="text" id="lastName" class="form-control">
                    </div>
                    <div class="mb-3 text-start">
                        <label for="email" class="form-label">E-posti aadress *</label>
                        <input v-model="email" type="text" id="email" class="form-control">
                    </div>
                    <div class="mb-3 text-start">
                        <label for="phoneNo" class="form-label">Telefoni nr</label>
                        <input v-model="phoneNo" type="text" id="phoneNo" class="form-control">
                    </div>
                </form>
            </div>

            <!--Add profile image-->
            <div class="col col-4 mb-4">
                <img src="../assets/logo.png" height="200" width="200" alt="profile image"/>
                <div/>
            </div>
        </div>

        <!--Buttons -->
        <div class="row justify-content-center mb-4 mt-4">
            <div class="col col-4">
                <button @click="signupAddContact" type="submit" class="btn btn-dark me-3">Registreeri</button>
                <button @click="signupAddContact" type="submit" class="btn btn-dark ms-3">Loobu</button>
            </div>

        </div>


    </div>
</template>

<script>
import AlertDanger from "@/components/alerts/AlertDanger.vue";

export default {
    name: "SignupInfoView",
    components: {AlertDanger}
}
</script>

<style scoped>

</style>