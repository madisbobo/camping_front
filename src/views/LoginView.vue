<template>
    <div class="container">

        <div class="row justify-content-center">
            <div class="col col-4 mb-4">
                <h2>Sisselogimine</h2>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col col-4 mb-4">
                <label for="username" class="form-label">Kasutajanimi</label>
                <input v-model="username" type="text" id="username" class="form-control">
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col col-4 mb-4">
                <label for="password" class="form-label">Parool</label>
                <input v-model="password" type="text" id="password" class="form-control">
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col col-4 mb-4">
                <button @click="login" type="submit" class="btn btn-dark mb-3">Logi Sisse</button>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col col-4 mb-4">
                <h5>Sul ei ole veel kasutajat?</h5>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col col-4 mb-4">
                <button type="submit" class="btn btn-outline-dark mb-3">Registreeri</button>
            </div>
        </div>

    </div>

</template>

<script>
export default {
    name: "LoginView.vue",

    data() {
        return {
            username: '',
            password: '',
            message: '',
            loginResponse: {
                userId: 0,
                roleName: ''
            }
        }
    },

    methods: {
        login() {
            this.message = ''
            if (this.username === '' || this.password === '') {
                this.message = 'Täida kõik väljad'
            } else {
                this.sendLoginRequest();
            }
        },
        sendLoginRequest() {
            this.$http.get("/login", {
                    params: {
                        username: this.username,
                        password: this.password
                    }
                }
            ).then(response => {
                alert("success")
                this.loginResponse = response.data
            }).catch(error => {
                alert("error")
                const errorResponseBody = error.response.data
            })
        },
    }
}
</script>

<style scoped>

</style>