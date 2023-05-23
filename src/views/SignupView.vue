<template>
    <div @keydown.enter="signup" class="container">
        <AlertDanger :message="message"/>

        <div class="row justify-content-center">
            <div class="col col-4 mb-4">
                <h2>Registreeri end kasutajaks!</h2>
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
                <label for="password" class="form-label">Salasõna</label>
                <input v-model="password" type="password" id="password" class="form-control">
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col col-4 mb-4">
                <label for="password" class="form-label">Korda salasõna</label>
                <input v-model="repeat_password" type="password" id="password" class="form-control">
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col col-4 mb-4">
                <button @click="signup" type="submit" class="btn btn-dark mb-3">Registreeri</button>
            </div>
        </div>

    </div>
</template>

<script>
import AlertDanger from "@/components/alerts/AlertDanger.vue";
import router from "@/router";

export default {
    name: "SignupView",
    components: {AlertDanger},
    data() {
        return {
            repeat_password: '',
            message: '',
            loginResponse: {
                userId: 0,
                roleName: ''
            },
            newUser: {
                username: '',
                password: ''
            },
            errorResponse: {
                message: '',
                errorCode: 0
            }
        }
    },
    methods: {
        signup() {
            this.message = ''
            if (this.newUser.username === '' || this.newUser.password === '') {
                this.message = 'Täida kõik väljad!'
            } else if (this.newUser.password !== this.repeat_password) {
                this.message = 'Kaks parooli peavad kattuma'
            } else {
                this.sendSignupRequest();
            }
        },
        sendSignupRequest() {
            this.$http.post("/signup", this.newUser
            ).then(response => {
                this.loginResponse = response.data
                sessionStorage.setItem('userId', this.loginResponse.userId)
                sessionStorage.setItem('roleName', this.loginResponse.roleName)
                sessionStorage.setItem('username', this.username)
                this.$emit('event-update-nav-menu')
                router.push({name: 'signupInfoRoute'})
            }).catch(error => {
                this.errorResponse = error.response.data
                if (this.errorResponse.errorCode === 222) {
                    this.message = this.errorResponse.message;
                } else {
                    router.push({name: 'errorRoute'})
                }
            })
        }
    }
}
</script>

<style scoped>

</style>