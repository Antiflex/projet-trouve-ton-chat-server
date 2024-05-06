const { createApp, ref } = Vue

createApp({
    data() {
        const message = "hey"
        return {
            message
        }
    },
    mounted() {
        getAllAnnonces().then(response =>{
            this.message = response
        })
    }
}).mount('#app')