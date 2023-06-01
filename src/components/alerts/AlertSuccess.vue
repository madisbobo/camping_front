<template>
    <div v-if="successMessage !== '' && successMessage !== null" class="row justify-content-center">
        <div class="col col-6 alert alert-success mb-4" role="alert">
            {{ successMessage }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'AlertSuccess',
    props: {
        successMessage: {}
    }
}
</script>