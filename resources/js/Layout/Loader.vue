<template>
    <div class="waxon_tm_preloader" :class="loaded ? '' : 'loaded'">
        <div class="spinner_wrap">
            <div class="spinner"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loaded: false,
            }
        },
        mounted() {
            setTimeout(() => {
                this.loaded = true;
            }, 1000)
        }
    };
</script>
