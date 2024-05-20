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

        let marker = L.marker([annonce.emplacement_lat, annonce.emplacement_long]).addTo(markerGroup);
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


async function sendAnnonce(){
    let form = document.getElementById("annonce_form")
    const body = {
        typeAnnonce: form.type_annonce.value,
        emplacementLat: popup._latlng.lat,
        emplacementLong: popup._latlng.lng,
        annotations: form.annotations.value,
        nom: form.nom_chat.value,
        race: form.race.value,
        couleurFourrure: form.couleur_fourrure.value,
        couleurYeux: form.couleur_yeux.value
    }

    let url = "http://localhost:3000/api/create_annonce_and_chat";

    const response = await fetch(url, {
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(body)
    })
    const result = await response.json().then(console.log);
    return result

}

function onMapClick(e) {
    hideAnnonceForm()
    const popupContent =
        `<button type="button" onClick='showAnnonceForm()'>
            <img src="img/plus.png" height=20>
            <p style="margin: 2px; color: #f8f9fa">Annonce</p>
        </button>`;

    popup
        .setLatLng(e.latlng)
        .setContent(popupContent)
        .openOn(myMap);
    popup._contentNode.style.margin = "1px";
}


function hideAnnonceForm(){
    document.getElementById("annonce_form_div").style.display = "none";
}

function showAnnonceForm(){
    document.getElementById("annonce_form_div").style.display = "block";
}


myMap.on('click', onMapClick);

