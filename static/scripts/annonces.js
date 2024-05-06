
async function getAllAnnonces() {
    let url = "https://projet-trouve-ton-chat-server.onrender.com/api/get_annonces";

    const response = await fetch(url, {
        method: "GET",
        mode: 'cors',
    })
    const result = await response.json();
    return result

}

getAllAnnonces().then(value => {console.log(value)})
