<template>
  <!--Navigation bar-->
    <CustomNavigationBar :handle-logout="handleLogout" :user-id="userId" :username="username"/>

    <logout-modal ref="logoutModalRef" @event-update-nav-menu="updateNavMenu"/>
    <add-image-modal ref="addImageModalRef"/>
    <router-view @event-update-nav-menu="updateNavMenu"/>

</template>

<script>
import SignupInfoView from "@/views/SignupInfoView.vue";
import LogoutModal from "@/components/modals/LogoutModal.vue";
import CustomNavigationBar from "@/components/CustomNavigationBar.vue";


export default {
    components: {CustomNavigationBar, LogoutModal, SignupInfoView},
    data() {
        return {
            userId: sessionStorage.getItem('userId'),
            roleName: sessionStorage.getItem('roleName'),
            username: sessionStorage.getItem('username'),
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
