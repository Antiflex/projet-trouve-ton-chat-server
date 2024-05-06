async function getAllAnnonces() {
    let invocation = new XMLHttpRequest();
    let url = "https://projet-trouve-ton-chat-server.onrender.com/api/get_annonces";

    if (invocation) {
        invocation.open("GET", url, true);
        console
        invocation.onreadystatechange = handler;
        invocation.send();
    }
}

let annonces = getAllAnnonces().then(annonces => {
    console.log(annonces)
})