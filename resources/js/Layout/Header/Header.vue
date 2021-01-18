<template>
    <div class="header">
        <div
            class="topbar"
            :class="staticHeader ? 'static' : ''"
        >
            <div class="menu">
                <div class="logo">
                    <img
                        src="img/logo/dark.png"
                        alt=""
                    >
                </div>
                <nav v-if="pageWidth > 1024">
                    <a href="#">Home</a>
                    <a href="#">Work with me</a>
                    <a href="#">About</a>
                    <a href="#">Testimonials</a>
                    <a href="#">Contacts</a>
                </nav>
                <template v-else>
                    <a
                        href="#"
                        class="btn-hamburger"
                        @click="isMenuOpened = !isMenuOpened"
                    > &#9776; </a>
                    <transition name="fade">
                        <div
                            v-show="isMenuOpened"
                            class="mobile-menu"
                        >
                            <nav>
                                <a href="#">Home</a>
                                <a href="#">Work with me</a>
                                <a href="#">About</a>
                                <a href="#">Testimonials</a>
                                <a href="#">Contacts</a>
                            </nav>
                        </div>
                    </transition>
                </template>
            </div>
        </div>

        <div class="left-col">
            <div class="slogan">
                <h2>Stefan</h2>
                <h2>Stefanov</h2>
                <span>Learn tennis whenever and wherever you are</span>
                <a
                    href="#"
                    class="btn"
                >Book A lesson</a>
                <a
                    href="#"
                    class="btn"
                >Upload a video</a>
            </div>
        </div>
        <div class="right-col">
            <div class="img" />
        </div>
    </div>
</template>

<script>
    import { ref, onMounted, computed  } from 'vue'
    export default {
        setup() {
            const staticHeader = ref(document.body.scrollTop > 100);
            const pageWidth = ref(window.innerWidth);
            const isMenuOpened = ref(false);

            onMounted(() => {
                window.addEventListener('scroll', _.debounce(() => {
                    staticHeader.value = document.body.scrollTop > 70
                }, 100))

                window.addEventListener('resize', _.debounce(() => {
                    pageWidth.value = window.innerWidth
                }, 100))
            })

            const openMenu = computed(() => {
                if(pageWidth.value > 1024) {
                    return true;
                }

                return isMenuOpened.value;
            })

            return { staticHeader, isMenuOpened, pageWidth, openMenu};
        },
    }
</script>

