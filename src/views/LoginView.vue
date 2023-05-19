<template>

    <div @keydown.enter="login" class="container">

        <AlertDanger :message="message"/>

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
import router from "@/router";
import AlertDanger from "@/components/alerts/AlertDanger.vue";

export default {
    name: "LoginView.vue",
    components: {AlertDanger},

    data() {
        return {
            username: '',
            password: '',
            message: '',
            loginResponse: {
                userId: 0,
                roleName: ''
            },
            errorResponse: {
                message: '',
                errorCode: 0
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
                this.loginResponse = response.data
                sessionStorage.setItem('userId', this.loginResponse.userId)
                sessionStorage.setItem('roleName', this.loginResponse.userId)
                this.$emit('event-update-nav-menu')
                router.push({name:'homeRoute'})
            }).catch(error => {
                this.errorResponse = error.response.data
                if (this.errorResponse.errorCode === 111) {
                    this.message = this.errorResponse.message
                } else {
                    alert(this.errorResponse.errorCode)
                    router.push({name:'errorRoute'})
                }

            })
        },
    }
}
</script>