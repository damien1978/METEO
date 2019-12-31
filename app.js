// récup des éléments html
var alertErreurElt = document.getElementById("alertErreur"); // Affichage d'alerte ERREUR
var formFrElt = document.getElementById("formFr"); // Affichage formulaire FR
var formMondeElt = document.getElementById("formMonde"); // Affichage formulaire Monde
var tbodyElt = document.querySelector("tbody"); // Affichage résultat requète

// création formulaire FRANCE
function afficheFormFr() {
    var divFormFr = document.createElement("div");

    inputVille = document.createElement("input");
    inputVille.type = "text";
    inputVille.id = "france";
    inputVille.placeholder = "Entrez votre ville FR";
    divFormFr.appendChild(inputVille);

    //options checkbox
    inputTempRessent = document.createElement("input");
    inputTempRessent.type = "checkbox";
    inputTempRessent.id = "tempRessent";
    inputTempRessent.innerText ="Température ressentie";
    divFormFr.appendChild(inputTempRessent);

    inputTempMax = document.createElement("input");
    inputTempMax.type = "checkbox";
    inputTempMax.id = "tempMax";
    inputTempMax.textContent = "Température Maximum";
    divFormFr.appendChild(inputTempMax);

    inputTempMin = document.createElement("input");
    inputTempMin.type = "checkbox";
    inputTempMin.id = "tempMin";
    
    divFormFr.appendChild(inputTempMin);

    // création boutton envoie
    btnForm = document.createElement("button");
    btnForm.textContent = "valider";
    btnForm.id = "btnEnvoieFr";
    btnForm.type = "button";
    divFormFr.appendChild(btnForm);

    formFrElt.appendChild(divFormFr); // attache DIV FORM FR à élément HTML div formFR
}
// Event pour afficher formFR au clique sur checkox France
var chercheFrElt = document.getElementById("chercheFr");
chercheFrElt.addEventListener("click", afficheFormFr);
/////////////////////////////
//empécher de créer un autre formulaire à chaque clique
////////////////////////////
// création formulaire MONDE
function afficheFormMonde() {
    var divFormMonde = document.createElement("div");

    inputVille = document.createElement("input");
    inputVille.type = "text";
    inputVille.id = "monde";
    inputVille.placeholder = "Entrez votre ville Monde";
    divFormMonde.appendChild(inputVille);

    //options checkbox
    inputTempRessent = document.createElement("input");
    inputTempRessent.type = "checkbox";
    inputTempRessent.id = "tempRessent";
    inputTempRessent.innerHTML = +"<label>Température ressentie</label>";
    divFormMonde.appendChild(inputTempRessent);

    inputTempMax = document.createElement("input");
    inputTempMax.type = "checkbox";
    inputTempMax.id = "tempMax";
    inputTempMax.textContent = "Température Maximum";
    divFormMonde.appendChild(inputTempMax);

    inputTempMin = document.createElement("input");
    inputTempMin.type = "checkbox";
    inputTempMin.id = "tempMin";
    inputTempMin.textContent = "Température Minimum";
    divFormMonde.appendChild(inputTempMin);

    // création boutton envoie
    btnForm = document.createElement("button");
    btnForm.textContent = "valider";
    btnForm.id = "btnEnvoieMonde";
    btnForm.type = "button";
    divFormMonde.appendChild(btnForm);

    formMondeElt.appendChild(divFormMonde); // atache DIV FORM MONDE à élément HTML div formMonde
}
// Event pour afficher formMonde au clique sur checkox Monde
var chercheMondeElt = document.getElementById("chercheMonde"); 
chercheMondeElt.addEventListener("click", afficheFormMonde); 

// Cacher THEAD au démarrage // event sur clique btn_envoie marche pas
// var thead=document.querySelector("thead");
// thead.style.visibility="hidden";
// Fonction afficheThead au clique sur Valider
// var btn_envoie = document.getElementById("btn_envoie");
// function afficheThead(){
//     thead.style.visibility="visible";
// }
// btn_envoie.addEventListener("click", afficheThead);




///// AJAX /////

// // création TR et TD
var newTr = document.createElement("tr");
var temp = document.createElement("td");
var ciel = document.createElement("td");
var vent = document.createElement("td");

// // rattachement
tbodyElt.appendChild(newTr);
newTr.appendChild(temp);
newTr.appendChild(ciel);
newTr.appendChild(vent);

var httpRequest = new XMLHttpRequest();

document.getElementById("btnEnvoiefr").addEventListener("click", makeRequestFrance);
document.getElementById("btnEnvoieMonde").addEventListener("click", makeRequestMonde);

function makeRequestFrance() {
    var france = document.getElementById("france").value;
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', "http://api.openweathermap.org/data/2.5/weather?&lang=fr&q=" + france + ",fr&APPID=af8038cf4c6fc0df07fbbefa454181f2&units=metric", true);
    httpRequest.send();
}

function makeRequestMonde() {
    var monde = document.getElementById("monde").value;
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', "http://api.openweathermap.org/data/2.5/weather?&lang=fr&q=" + monde + "&APPID=af8038cf4c6fc0df07fbbefa454181f2&units=metric", true);
    httpRequest.send();
}

function alertContents() {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        document.getElementById("zoneAffiche").innerHTML = httpRequest.response;

        var tableauObject = JSON.parse(httpRequest.response);
        document.getElementById("zoneAffiche").innerHTML = "la température à " + tableauObject.name + " (PAYS : " + tableauObject.sys.country + ") est de " + tableauObject.main.temp + " °C";
        console.log(tableauObject);
    }
}