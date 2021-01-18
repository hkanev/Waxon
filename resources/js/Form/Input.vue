<template>
    <div class="form-row">
        <label
            v-if="properties.label"
            :for="properties.name"
        >{{ properties.label }}</label>
        <input
            :id="properties.name"
            :class="properties.disabled ? 'disabled' : ''"
            :type="properties.type"
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
