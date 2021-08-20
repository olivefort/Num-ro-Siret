
let map;
map = L.map('mapid');
map.setView([47.39, 0.68], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const form = document.getElementById('form');
form.addEventListener('submit',(ev) => {
    ev.preventDefault();
    let saisi = document.getElementById('sic').value;
    if(isNaN(saisi) || saisi.length != 14){
        document.getElementById('mapid').style.display = "none";
        document.getElementById('ent').textContent = "Veuillez rentrer un numéro SIRET valable (14 chiffres)";
        document.getElementById('add').textContent = ' ';
        document.getElementById('ddt').textContent = ' ';
    }else{
        document.getElementById('mapid').style.display = "block";
        document.getElementById('ent').textContent ='';
        fonctionTest(saisi);
    }
})

function fonctionTest(siret){
    let request = new XMLHttpRequest();
    request.open("GET", 'apireq.php?texte='+siret, true);
    request.addEventListener("readystatechange",  () => {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            const reponse = JSON.parse(request.responseText);
            // window.location.href = 'apireq.php?texte='+siret;
            addResult(reponse.etablissement.unite_legale.denomination, reponse.etablissement.unite_legale.nom, reponse.etablissement.geo_l4, reponse.etablissement.code_postal, reponse.etablissement.libelle_commune, reponse.etablissement.unite_legale.etablissement_siege.date_dernier_traitement, reponse.etablissement.etat_administratif);
            console.log(reponse);
            addCoor(reponse.etablissement.unite_legale.etablissement_siege.longitude, reponse.etablissement.unite_legale.etablissement_siege.latitude, reponse.etablissement.etat_administratif)
        }else{
            document.getElementById('ent').textContent = "Ce numéro de siret n'existe pas !"
        }              
    });
    request.send();
}

function addResult(deno, nom, add, cp, ville, date, etat){
    if(deno == null){
        document.getElementById('ent').textContent = nom;
        if(etat == "F"){
            document.getElementById('ent').setAttribute("style", "color:red");
        }else{
            document.getElementById('ent').setAttribute("style", "color:black");
        }
    }else{
        document.getElementById('ent').textContent = deno;
        if(etat == "F"){
            document.getElementById('ent').setAttribute("style", "color:red");
        }else{
            document.getElementById('ent').setAttribute("style", "color:black");
        }
    }
    document.getElementById('add').textContent = add+' - '+cp+' '+ville;
    document.getElementById('ddt').textContent = date.substr(0, 10).replaceAll('-', '/');
}

function addCoor(long, lat, etat){
    map.setView([lat, long], 15);  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    const redIcon = L.icon({
        iconUrl:'red.png',
        iconSize:     [20, 30], 
    });
    const blueIcon = L.icon({
        iconUrl:'blue.png',
        iconSize:     [20, 30], 
    });
    if(etat == "F"){
        L.marker([lat, long], {icon: redIcon}).addTo(map)
    }else{
        L.marker([lat, long], {icon: blueIcon}).addTo(map)
    }
}