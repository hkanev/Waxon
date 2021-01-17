<template>
    <div class="header">
        <div class="topbar" :class="staticHeader ? 'static' : ''">
            <div class="logo">
                <img src="img/logo/dark.png" alt="" />
            </div>

            <nav>
                <a href="#">Home</a>
                <a href="#">Work with me</a>
                <a href="#">About</a>
                <a href="#">Testimonials</a>
                <a href="#">Contacts</a>
            </nav>
        </div>

        <div class="left-col">
          <div class="slogan">
              <h2>Stefan</h2>
              <h2>Stefanov</h2>
              <span>Learn tennis whenever and wherever you are</span>
              <a href="#" class="btn">Book A lesson</a>
              <a href="#" class="btn">Upload a video</a>
          </div>

        </div>
        <div class="right-col"></div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
    setup() {
        const staticHeader = ref(document.body.scrollTop > 100);

        onMounted(() => {
            window.addEventListener('scroll', _.debounce(() => {
                staticHeader.value = document.body.scrollTop > 70
            }, 100))
        })

        return {staticHeader};
    }
}
</script>

