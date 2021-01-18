<template>
    <div
        id="contact"
        class="waxon_tm_contact"
    >
        <div class="bg_image" />
        <div class="container">
            <div class="contact_inner">
                <div class="waxon_tm_main_title">
                    <div class="title">
                        <h3>Get in Touch<span class="bg">Login</span></h3>
                    </div>
                </div>
                <div class="desc">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur ipsam nesciunt quo! Assumenda, beatae, culpa dicta dolore est eveniet iste magni maxime placeat quam ratione sed tempora tempore ullam?</p>
                </div>
                <div class="wrapper">
                    <div class="left">
                        <div class="fields">
                            <form
                                id="contact_form"
                                action="/"
                                method="post"
                                class="contact_form"
                            >
                                <div
                                    class="returnmessage"
                                    data-success="Your message has been received, We will contact you soon."
                                >
                                    <!--                                     <span class="contact_success">-->
                                </div>
                                <base-input :properties="form.name" />
                                <div class="empty_notice">
                                    <span>Please Fill Reuired Fields</span>
                                </div>
                                <div class="first">
                                    <ul>
                                        <li>
                                            <input
                                                id="name"
                                                type="text"
                                                placeholder="Name"
                                            >
                                        </li>
                                        <li>
                                            <input
                                                id="email"
                                                type="text"
                                                placeholder="Email"
                                            >
                                        </li>
                                    </ul>
                                </div>
                                <div class="last">
                                    <textarea
                                        id="message"
                                        placeholder="Message"
                                    />
                                </div>
                                <div
                                    class="waxon_tm_button"
                                    data-position="left"
                                >
                                    <a
                                        id="send_message"
                                        href="#"
                                    >
                                        <span>Send Message</span>
                                    </a>
                                </div>

                                <!-- If you want to change mail address to yours, please open modal.php and go to line 4 -->
                            </form>
                        </div>
                    </div>
                    <div class="right">
                        <div class="map_wrap">
                            <div
                                id="ieatmaps"
                                class="map"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BaseInput from "../Form/Input";
    import { ref, reactive } from 'vue'
    export default {
        components: {
            BaseInput
        },
        setup() {
            const form = reactive({
                name: {
                    type: 'email',
                    name: 'Email',
                    label: 'Email',
                    error: null,
                    disabled: false,
                    placeholder: 'Email'
                }
            })

            return { form }
        }
    }
</script>

<style scoped>

</style>
