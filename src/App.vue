<template>
  <nav style="background-color: #90EE90">
    <router-link to="/">Avaleht</router-link> |
    <router-link to="/listings">Kõik pakkumised</router-link> |
    <router-link v-if="userId === null" to="/login">Logi sisse</router-link>
        <template v-else>
            <router-link to="/mylistings">Minu asjad</router-link> |
            <router-link to="/#" @click="handleLogout">Logi välja</router-link>
        </template>

  </nav>
  <router-view @event-update-nav-menu="updateNavMenu"/>
</template>

<script>
    import router from "@/router";

    export default {
        data() {
            return {
                userId: sessionStorage.getItem('userId'),
                roleName: sessionStorage.getItem('roleName')
            }
        },
        methods: {
            updateNavMenu() {
                this.userId = sessionStorage.getItem('userId')
                this.roleName = sessionStorage.getItem('roleName')
            },
            handleLogout() {
                sessionStorage.clear()
                this.updateNavMenu()
                router.push({name: 'homeRoute'})
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
