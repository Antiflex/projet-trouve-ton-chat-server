const { createApp, ref } = Vue

createApp({
    data() {
        const annonces = []
        return {
            annonces
        }
    },
    mounted() {
        getAllAnnonces().then(response =>{
            this.annonces = response
        })
    }
}).mount('#app')