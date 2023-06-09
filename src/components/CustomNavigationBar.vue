<template>
    <nav class="navbar navbar-expand-xl navbar-light bg-light">
        <div class="container-fluid">

            <div class="col col-2 collapse navbar-collapse" id="navbarSupportedContent"></div>


            <div class=" collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-xl-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Avaleht</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/listings">Kõik Pakkumised</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/blog">Blogi</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Kontakt</router-link>
                    </li>
                </ul>
            </div>

            <div v-if="userId === null" class="col col-2 d-flex align-items-center">
                <router-link class="nav-link me-3" to="/login">Logi Sisse</router-link>
                <router-link class="nav-link" to="/signup">Registreeri</router-link>
            </div>


            <template v-else>
                <div class="col col-2 d-flex align-items-center">
                    <div class="dropdown">
                        <a class="dropdown-toggle d-flex align-items-center hidden-arrow text-decoration-none" href="#"
                           id="navbarDropdownMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {{ username }}
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenu">
                            <li>
                                <router-link class="dropdown-item" to="/my-bookings">Minu Broneeringud</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/my-listings">Minu Pakkumised</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/my-profile">Minu Profiil</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="#" @click="handleLogout">Logi Välja</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </template>
        </div>
    </nav>
</template>
<script>
import SignupInfoView from "@/views/SignupInfoView.vue";

export default {
    name: 'CustomNavigationBar',
    components: {SignupInfoView},
    props: {
        handleLogout: {},
        userId: {},
        username: {},
    },
}
</script>
<style>

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}


</style>