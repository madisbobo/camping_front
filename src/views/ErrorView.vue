<template>
    <h1>*UPS! Pakk läks kaduma*</h1>
    <h2>Kas sul back-end server on sees?</h2>
    <font-awesome-icon :icon="['far', 'face-sad-tear']" size="7x" style="color: #1e3050;"/>
    <CustomFooter></CustomFooter>
</template>

<script>
import CustomFooter from "@/components/CustomFooter.vue";

export default {
    name: "ErrorView",
    components: {CustomFooter}
}
</script>

<style scoped>

</style>