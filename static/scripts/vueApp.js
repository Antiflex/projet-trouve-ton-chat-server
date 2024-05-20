const { createApp, ref } = Vue

createApp({
    data() {
        const annonces = []
        return {
            annonces
        }
    },
    mounted() {
        LoadAnnonces()
    }
}).mount('#app')