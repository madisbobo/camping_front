<template>
    <footer class="text-center text-white mt-5" style="background-color: #f1f1f1;">
        <!-- Grid container -->
        <div class="container pt-4">

            <!-- Section: Links -->
            <section class="mb-3">
                <!-- Grid row-->
                <div class="row text-center d-flex justify-content-center pt-4">
                    <!-- Grid column -->
                    <div class="col-md-2">
                        <h6 class="text-uppercase font-weight-bold">
                            <router-link class="nav-link text-dark text-decoration-underline" to="/">Avaleht
                            </router-link>
                        </h6>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-2">
                        <h6 class="text-uppercase font-weight-bold">
                            <router-link class="nav-link text-dark text-decoration-underline" to="/listings">Kõik
                                Pakkumised
                            </router-link>
                        </h6>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-2">
                        <h6 class="text-uppercase font-weight-bold">
                            <router-link class="nav-link text-dark text-decoration-underline" to="/blog">Blogi
                            </router-link>
                        </h6>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-2">
                        <h6 class="text-uppercase font-weight-bold">
                            <router-link class="nav-link text-dark text-decoration-underline" to="/contact">Kontakt
                            </router-link>
                        </h6>
                    </div>
                    <!-- Grid column -->
                </div>
                <!-- Grid row-->
            </section>

            <!-- Section: Social media -->
            <section class="mb-4">
                <!-- Facebook -->
                <a
                        class="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                >
                    <font-awesome-icon :icon="['fas', 'x']"/>
                </a>

                <!-- Twitter -->
                <a
                        class="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                >
                    <font-awesome-icon :icon="['fas', 'x']"/>
                </a>

                <!-- Instagram -->
                <a
                        class="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                >
                    <font-awesome-icon :icon="['fas', 'x']"/>
                </a>
            </section>
            <!-- Section: Social media -->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2023 Copyright: Camping OÜ
        </div>
        <!-- Copyright -->
    </footer>
</template>
<script>
export default {
    name: 'CustomFooter'
}
</script>
<style>
footer {
    position: relative;
    bottom: 0;
}
</style>
