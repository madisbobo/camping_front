<template>
    <div v-if="message !== '' && message !== null" class="row justify-content-center">
        <div class="col col-6 alert alert-danger mb-4" role="alert">
            {{ message }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'AlertDanger',
    props: {
        message: String
    }
}
</script>