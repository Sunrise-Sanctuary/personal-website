<template>
    <div class="w-full max-w-xl">
        <div v-if="!isButtonClicked">
                 <b-button  v-on:click="handleClick()" variant="light" pill>Intersted in your own site? Click to find out more</b-button>
        </div>
        <div v-else>
        <div v-if="isFormDisplayed">
            <form  name="contact-form" method="POST"
                data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="handleSubmit">
                <input type="hidden" name="form-name" value="contact-form" />
                <div class="mb-4">
                    <label class="block text-gray-700 text-xl font-bold mb-2" for="email">Email: </label>
                    <input id="email" v-model="email" name="email"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email" placeholder="satoshi@nakamoto.com" data-hj-whitelist>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-xl font-bold mb-2" for="name">Name: </label>
                    <input id="name" v-model="name" name="name"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Satoshi Nakamoto" data-hj-whitelist>
                </div>
                <div class="flex items-center justify-between">
                    <b-button :disabled="!canSubmit" :class="
            `${!canSubmit &&
              'opacity-90 cursor-not-allowed'} bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full`
          " type="submit">
                        Submit
                    </b-button>
                </div>
            </form>
        </div>
        </div>

    </div>
</template>
<script>
    import axios from "axios"

    export default {
        name: 'EmailListForm',
            components: {
    },
      
        data() {
            return {
                isButtonClicked: false,
                isFormDisplayed: true,
                email: '',
                name: '',
                displayMessage: "Fill out the form below and I'll reach out to you!"
            }
        },
        computed: {
            canSubmit() {
                return !!(this.email && this.name)
            }
        },

        methods: {
            encode(data) {
                return Object.keys(data)
                    .map(
                        key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
                    )
                    .join("&");
            },
            handleClick() {
                console.log("CLick")
                this.isButtonClicked = true
            },

            handleSubmit() {
                const axiosConfig = {
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                };
                axios.post(
                        "/",
                        this.encode({
                            "form-name": "contact-form",
                            "email": this.email,
                            "name": this.name,
                        }),
                        axiosConfig
                    ).then(() => {
                        console.log("Success")
                        this.isFormDisplayed = false
                        this.displayMessage =
                            "Thank You For Submitting the form, I look forward to discussing the next steps!"
                    })
                    .catch(() => {
                        console.log("Error")
                        this.isFormDisplayed = true
                        this.displayMessage =
                            "There was an error with your Submission. Please retry and if error continues, DM me @Macncheeasy on Instagram! "
                    })
            }
        }
    }
</script>
<style>

    .subtitle {

        font-size: "40px" !important
    }
</style>