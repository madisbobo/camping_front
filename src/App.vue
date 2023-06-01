<template>
  <!--Navigation bar-->
    <CustomNavigationBar :handle-logout="handleLogout" :user-id="userId" :username="username"/>

    <logout-modal ref="logoutModalRef" @event-update-nav-menu="updateNavMenu"/>
    <router-view @event-update-nav-menu="updateNavMenu"/>
    <AlertSuccess :message="successMessage"/>
    <AlertDanger :message="dangerMessage"/>

    <router-view @event-update-nav-menu="updateNavMenu"
                 @event-listing-edited="alertSuccess"
                 @event-listing-deleted="alertSuccess"
                 @event-error-message="alertDanger"/>
</template>

<script>
import router from "@/router";
import LogoutModal from "@/components/modals/LogoutModal.vue";
import CustomNavigationBar from "@/components/CustomNavigationBar.vue";
import SignupInfoView from "@/views/SignupInfoView.vue";
import AlertSuccess from "@/components/alerts/AlertSuccess.vue";
import AlertDanger from "@/components/alerts/AlertDanger.vue";

export default {
    components: {AlertDanger, AlertSuccess, CustomNavigationBar, LogoutModal, SignupInfoView},
    data() {
        return {
            userId: sessionStorage.getItem('userId'),
            roleName: sessionStorage.getItem('roleName'),
            username: sessionStorage.getItem('username'),
            successMessage: '',
            dangerMessage: ''
        }
    },
    methods: {
        updateNavMenu() {
            this.userId = sessionStorage.getItem('userId')
            this.roleName = sessionStorage.getItem('roleName')
            this.username = sessionStorage.getItem('username')
        },
        handleLogout() {
            this.$refs.logoutModalRef.$refs.modalRef.openModal()
        },
        alertSuccess(message) {
            this.successMessage = message
            this.timeout(4000)

        },
        alertDanger(message) {
            this.dangerMessage = message
            this.timeout(4000)
        },
        timeout(delay) {
            setTimeout(() => {
                this.successMessage = ''
                this.dangerMessage = ''
            }, delay);
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
