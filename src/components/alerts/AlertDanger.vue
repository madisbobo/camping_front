<template>
    <div v-if="message !== '' && message !== null" class="row justify-content-center">
        <div class="col col-5 alert alert-danger" role="alert">
            {{message}}
        </div>
    </div>
</template>
<script>
export default {
    name: 'AlertDanger',
    props: {
        message: {}
    }
}
</script>