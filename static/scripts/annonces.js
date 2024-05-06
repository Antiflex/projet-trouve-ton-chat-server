
async function getAllAnnonces() {
    console.log("HEY")
    let url = "https://projet-trouve-ton-chat-server.onrender.com/api/get_annonces";

    const response = await fetch(url, {
        method: "GET",
        mode: 'cors',
    })
    console.log(("HEY2"))
    const result = await response.json();
    console.log(result)
    return result

}

getAllAnnonces().then(value => {console.log(value)})