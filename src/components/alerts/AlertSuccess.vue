<template>
    <div v-if="message !== '' && message !== null" class="row justify-content-center mt-4">
        <div class="col col-4 alert alert-success mb-4" role="alert">
            {{ message }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'AlertSuccess',
    props: {
        message: {}
    }
}
</script>