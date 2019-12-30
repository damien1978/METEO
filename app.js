// récup des éléments html
var alertErreurElt = document.getElementById("alertErreur");
var formFrElt = document.getElementById("formFr");
var formMondeElt = document.getElementById("formMonde");
var tbodyElt = document.querySelector("tbody");
var chercheFrElt = document.getElementById("chercheFr");

// 

// création formulaire FRANCE
function afficheFormFr() {
    var divFormFr = document.createElement("div");

    inputVille = document.createElement("input");
    inputVille.type = "text";
    inputVille.id = "france";
    inputVille.placeholder = "Entrez votre ville";
    divFormFr.appendChild(inputVille);

    //options checkbox
    inputTempRessent = document.createElement("input");
    inputTempRessent.type = "checkbox";
    inputTempRessent.id = "tempRessent";
    inputTempRessent.innerHTML = +"<label>Température ressentie</label>";
    divFormFr.appendChild(inputTempRessent);

    inputTempMax = document.createElement("input");
    inputTempMax.type = "checkbox";
    inputTempMax.id = "tempMax";
    inputTempMax.textContent = "Température Maximum";
    divFormFr.appendChild(inputTempMax);

    inputTempMin = document.createElement("input");
    inputTempMin.type = "checkbox";
    inputTempMin.id = "tempMin";
    inputTempMin.textContent = "Température Minimum";
    divFormFr.appendChild(inputTempMin);

    // création boutton envoie
    btnForm = document.createElement("button");
    btnForm.textContent = "valider";
    btnForm.id = "btn_envoie";
    btnForm.type = "button";
    divFormFr.appendChild(btnForm);

    divFormFr.appendChild(formFrElt);
    
}
chercheFrElt.addEventListener("click", afficheFormFr);

// création formulaire MONDE


/// FORM A REPRODUIRE //
//  <form>
//     <label for="france">En France</label><input type="text" name="selection" id="france"
//         placeholder="Entrez votre Ville"><br>
//     <label for="tempRessent">Température ressentie</label><input type="checkbox" name="tempRessent"
//         id="tempRessent">
//     <label for="tempMax">Température Max.</label><input type="checkbox" name="tempMax" id="tempMax">
//     <label for="tempMin">Température Min.</label><input type="checkbox" name="tempMin"
//         id="tempMin"><br>
// </form>
// <button type="button" id="btn_envoie"> Valider</button>



// // création TR et TD
// var newTr = document.createElement("tr");
// var temp = document.createElement("td");
// var ciel = document.createElement("td");
// var vent = document.createElement("td");

// // rattachement
// tbodyElt.appendChild(newTr);
// newTr.appendChild(temp);
// newTr.appendChild(ciel);
// newTr.appendChild(vent);

// var httpRequest = new XMLHttpRequest();

// document.getElementById("btn_envoie_fr").addEventListener("click", makeRequestFrance);
// document.getElementById("btn_envoie_monde").addEventListener("click", makeRequestMonde);

// function makeRequestFrance() {
//     var france = document.getElementById("france").value;
//     httpRequest.onreadystatechange = alertContents;
//     httpRequest.open('GET', "http://api.openweathermap.org/data/2.5/weather?&lang=fr&q=" + france + ",fr&APPID=af8038cf4c6fc0df07fbbefa454181f2&units=metric", true);
//     httpRequest.send();
// }

// function makeRequestMonde() {
//     var monde = document.getElementById("monde").value;
//     httpRequest.onreadystatechange = alertContents;
//     httpRequest.open('GET', "http://api.openweathermap.org/data/2.5/weather?&lang=fr&q=" + monde + "&APPID=af8038cf4c6fc0df07fbbefa454181f2&units=metric", true);
//     httpRequest.send();
// }

// function alertContents() {
//     if (httpRequest.readyState == 4 && httpRequest.status == 200) {
//         document.getElementById("zoneAffiche").innerHTML = httpRequest.response;

//         var tableauObject = JSON.parse(httpRequest.response);
//         document.getElementById("zoneAffiche").innerHTML = "la température à " + tableauObject.name + " (PAYS : " + tableauObject.sys.country + ") est de " + tableauObject.main.temp + " °C";
//         console.log(tableauObject);
//     }
// }