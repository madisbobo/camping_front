<template>

    <!--Navigation bar-->
    <CustomNavigationBar :handle-logout="handleLogout" :user-id="userId" :username="username"/>

    <router-view @event-update-nav-menu="updateNavMenu"/>
</template>


<script>
import router from "@/router";
import CustomNavigationBar from "@/components/CustomNavigationBar.vue";
import SignupInfoView from "@/views/SignupInfoView.vue";

export default {
    components: {SignupInfoView, CustomNavigationBar},
    data() {
        return {
            userId: sessionStorage.getItem('userId'),
            roleName: sessionStorage.getItem('roleName'),
            username: sessionStorage.getItem('username')

        }
    },
    methods: {
        updateNavMenu() {
            alert("olen siin UPDATE NAV MENU")
            this.userId = sessionStorage.getItem('userId')
            this.roleName = sessionStorage.getItem('roleName')
            this.username = sessionStorage.getItem('username')

        },
        handleLogout() {
            sessionStorage.clear()
            this.updateNavMenu()
            router.push({name: 'homeRoute'})
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
