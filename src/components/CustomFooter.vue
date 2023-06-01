<template>
    <footer class="text-center text-white mt-5 bg-light">
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
                <a class="btn btn-link btn-lg m-1" href="https://www.facebook.com/" target="_blank">
                    <img src="../assets/facebook.svg" class="footer-social-media"/>
                </a>

                <!-- Twitter -->
                <a class="btn btn-link btn-lg m-1" href="https://www.twitter.com/" target="_blank">
                    <img src="../assets/twitter.svg" class="footer-social-media"/>
                </a>

                <!-- Instagram -->
                <a class="btn btn-link btn-lg m-1" href="https://www.instagram.com/" target="_blank">
                    <img src="../assets/instagram.svg" class="footer-social-media"/>
                </a>
            </section>
            <!-- Section: Social media -->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center text-dark p-3" style="background-color: rgb(65, 184, 131);">
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

.footer-social-media{
    height: 35px;
}
</style>
