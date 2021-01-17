<template>
    <div class="form-row">
        <label v-if="properties.label" :for="properties.name">{{ properties.label }}</label>
        <input
            :class="properties.disabled ? 'disabled' : ''"
            :id="properties.name" :type="properties.type"
            :placeholder="properties.placeholder"
        >
        <span class="error">Your message has been received, We will contact you soon.</span>
    </div>

</template>

<script>
export default {
    props: {
        properties: {
            type: Object,
            required: true
        }
    },
}
</script>

<style scoped>

</style>
