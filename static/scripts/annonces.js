async function getAllAnnonces() {
    let url = "https://projet-trouve-ton-chat-server.onrender.com/api/get_annonces";

    const response = await fetch(url, {
        method: "GET",
        mode: 'cors',
    })
    const result = await response.json();
    return result
}

async function LoadAnnonces() {
    let app = document.getElementById("app")
    app.innerHTML = '<img src="img/loading.gif" height=100px/ alt="loading">'
    let annonces =  await getAllAnnonces()
    let innerHTML = ""
    markerGroup.clearLayers()
    for(let i in annonces) {
        let annonce = annonces[i]
        let annonceInnerHML = `
            <div class="annonce">\n
               <h3>Chat ${annonce.type_annonce} : ${annonce.nom}</h3>\n
                <h4>Description :</h4>\n
                <ul>\n
                    <li>${annonce.date_annonce}</li>\n
                    <li>Fourrure de couleur ${annonce.couleur_fourrure}</li>\n
                    <li>Yeux de couleur ${annonce.couleur_yeux}</li>\n
                    <li>De race ${annonce.race}</li>\n
                    <li>Autre : ${annonce.annotations}</li>\n
                </ul>\n
            </div>`
        innerHTML += annonceInnerHML

        let marker = L.marker([annonce.emplacement_lat, annonce.emplacment_long]).addTo(markerGroup);;
        marker.bindPopup(annonceInnerHML);

        let markerClass
        switch (annonce.type_annonce){
            case "Trouvé":
                markerClass = "marker-found"
                break
            case "Perdu":
                markerClass = "marker-lost"
                break
            case "Vu":
                markerClass = "marker-seen"
                break
            default:
                markerClass = "Vu"
                break
        }
        marker._icon.classList.add(markerClass)

    }
    app.innerHTML = innerHTML
}


