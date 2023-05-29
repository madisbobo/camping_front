<template>
    <h1>UPS! Pakk läks kaduma</h1>
    <font-awesome-icon :icon="['far', 'face-sad-cry']" size="2xl"/>
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