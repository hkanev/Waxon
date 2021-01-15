<template>
    <div class="waxon_tm_preloader" :class="loaded ? 'loaded' : ''">
        <div class="spinner_wrap">
            <div class="spinner"></div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
    export default {
        setup() {
            const loaded = ref(false);

            onMounted(() => {
                setTimeout(() => {
                    loaded.value = true;
                }, 1000)
            })

            return { loaded };
        }
    };
</script>
