<template>

<!--    <nav class="navbar navbar-expand-xl navbar-light bg-light">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav justify-content-center me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Avaleht</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Kõik Pakkumised</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blogi</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Kontakt</a>
                    </li>
                </ul>
            </div>

            <div class="d-flex align-items-center me-5">
                <div class="dropdown">
                    <a class="dropdown-toggle d-flex align-items-center hidden-arrow text-decoration-none" href="#" id="navbarDropdownMenuAvatar" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        username1
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuAvatar">
                        <li>
                            <a class="dropdown-item" href="#">Minu Broneeringud</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Minu Pakkumised</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Minu Profiil</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Logi Välja</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>-->



        <nav>
            <router-link to="/">Avaleht</router-link>
            |
            <router-link to="/listings">Kõik Pakkumised</router-link>
            |
            <router-link to="/blog">Blogi</router-link>
            |
            <router-link to="/contact">Kontakt</router-link>
            |
            <router-link v-if="userId === null" to="/login">Logi Sisse</router-link>
            <template v-else>
                <router-link to="#">Minu Asja</router-link>
                |
                <router-link to="#" @click="handleLogout">Logi Välja</router-link>
            </template>
        </nav>

    <router-view @event-update-nav-menu="updateNavMenu"/>
</template>


<script>
import router from "@/router";
import SignupInfoView from "@/views/SignupInfoView.vue";

export default {
    components: {SignupInfoView},
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
