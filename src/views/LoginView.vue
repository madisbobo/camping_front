<template>
    <div class="container">

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
                <label for="password" class="form-label">Kasutajanimi</label>
                <input v-model="password" type="text" id="password" class="form-control">
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col col-4 mb-4">
                <button type="submit" class="btn btn-dark mb-3">Logi Sisse</button>
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
export default {
    name: "LoginView.vue",

    data() {
        return {
            username: '',
            password: ''
        }
    }
}
</script>

<style scoped>

</style>