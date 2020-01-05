// récup des éléments html
var alertErreurElt = document.getElementById("alertErreur"); // Affichage d'alerte ERREUR
var formFrElt = document.getElementById("formFr"); // Affichage formulaire FR
var formMondeElt = document.getElementById("formMonde"); // Affichage formulaire Monde
var tbodyElt = document.querySelector("tbody"); // Affichage résultat requète

// création boutton envoie FR
var divFormFr = document.createElement("div");
btnFormFr = document.createElement("button");
btnFormFr.textContent = "valider";
btnFormFr.type = "button";
divFormFr.appendChild(btnFormFr);

// création boutton Envoie MONDE
var divFormMonde = document.createElement("div");
btnFormMonde = document.createElement("button");
btnFormMonde.textContent = "valider";
btnFormMonde.type = "button";
divFormMonde.appendChild(btnFormMonde);




// création formulaire FRANCE
function afficheFormFr() {
      var divFormFr = document.createElement("div");
      
      inputVilleFr = document.createElement("input");
      inputVilleFr.type = "text";
      inputVilleFr.placeholder = "Entrez votre ville FR";
      divFormFr.appendChild(inputVilleFr);

      ////////OPTIONS CHECKBOX////////
      
      //Température ressentie
      inputTempRessent = document.createElement("input");
      var labelTempRessent = document.createElement("label");

      inputTempRessent.type = "checkbox";
      inputTempRessent.id = "tempRessent";
      labelTempRessent.for = "tempRessent";
      labelTempRessent.innerText = "Température Ressentie";
      divFormFr.appendChild(labelTempRessent);
      divFormFr.appendChild(inputTempRessent);

      //Température MAX
      inputTempMax = document.createElement("input");
      var labelTempMax = document.createElement("label");

      inputTempMax.type = "checkbox";
      inputTempMax.id = "tempMax";
      labelTempMax.for = "tempMax";
      labelTempMax.innerText = "Température Maximum";
      divFormFr.appendChild(labelTempMax);
      divFormFr.appendChild(inputTempMax);

      //Température MIN
      inputTempMin = document.createElement("input");
      var labelTempMin = document.createElement("label");

      inputTempMin.type = "checkbox";
      inputTempMin.id = "tempMin";
      labelTempMin.for = "tempMin";
      labelTempMin.innerText = "Température Minimum";
      divFormFr.appendChild(labelTempMin);
      divFormFr.appendChild(inputTempMin);

      // création boutton envoie
      btnFormFr = document.createElement("button");
      btnFormFr.textContent = "valider";
      btnFormFr.type = "button";
      btnFormFr.id = "btnFormFr";
      btnFormFr.addEventListener("click", afficheThead);
      divFormFr.appendChild(btnFormFr);

      formFrElt.appendChild(divFormFr); // attache DIV FORM FR à élément HTML div formFR
}
// Event pour afficher formFR au clique sur checkox France
var chercheFrElt = document.getElementById("chercheFr");
chercheFrElt.addEventListener("click", afficheFormFr);


// création formulaire MONDE
function afficheFormMonde() {
      var divFormMonde = document.createElement("div");

      inputVilleMonde = document.createElement("input");
      inputVilleMonde.type = "text";
      inputVilleMonde.placeholder = "Entrez votre ville Monde";
      divFormMonde.appendChild(inputVilleMonde);

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
      btnFormMonde = document.createElement("button");
      btnFormMonde.textContent = "valider";
      btnFormMonde.type = "button";
      divFormMonde.appendChild(btnFormMonde);  

      formMondeElt.appendChild(divFormMonde); // atache DIV FORM MONDE à élément HTML div formMonde
}

// Event pour afficher formMonde au clique sur checkox Monde
var chercheMondeElt = document.getElementById("chercheMonde");
chercheMondeElt.addEventListener("click", afficheFormMonde);

/////////////// A REVOIR ////////////////////////////
//empécher de créer un autre formulaire à chaque clique
// chercheFrElt.removeEventListener('click', afficheFormFr);
// chercheMondeElt.removeEventListener('click', afficheFormMonde);



//////////////// A REVOIR EVENT clique sur valider = affiche THEAD
// Cacher THEAD au démarrage // event sur clique btn_envoie marche pas
var thead = document.querySelector("thead");
thead.style.visibility = "hidden";
// Fonction afficheThead au clique sur Valider
// var btnFormF = document.getElementById("btnFormFr");

// btnFormF

function afficheThead() {
      thead.style.visibility = "visible";
}


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

btnFormFr.addEventListener("click", makeRequestFrance);
btnFormMonde.addEventListener("click", makeRequestMonde);

function makeRequestFrance() {
      console.log("ppp")
      var france = (inputVilleFr).value;
      httpRequest.onreadystatechange = alertContents;
      httpRequest.open('GET', "http://api.openweathermap.org/data/2.5/weather?&lang=fr&q=" + france + ",fr&APPID=af8038cf4c6fc0df07fbbefa454181f2&units=metric", true);
      httpRequest.send();
}

function makeRequestMonde() {
      var monde = (inputVilleMonde).value;
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