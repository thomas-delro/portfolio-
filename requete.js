
function fetchSimulatedData() {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 3000 + 1000;
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve(["Donnée 1", "Donnée 2", "Donnée 3"]);
      } else {
        reject("récupération de données échec");
      }
    }, delay);
  });
}

let bouton = document.getElementById("boutonDonnees");
let liste = document.getElementById("listeDonnees");
let texteStatut = document.getElementById("statut");
let texteErreurs = document.getElementById("compteurErreurs");

let erreurs = 0;

async function chargerDonnees() {
  texteStatut.textContent = "chargement...";
  texteStatut.style.color = "grey";
  liste.innerHTML = "";

  try {
    let data = await fetchSimulatedData();
    console.log(data);


    for (let i = 0; i < data.length; i++) {
      liste.innerHTML += "<li>" + data[i] + "</li>";
    }

    texteStatut.textContent = "données récupérées";
    texteStatut.style.color = "green";
  } catch (error) {
    console.log(error);
    erreurs = erreurs + 1;
    texteErreurs.textContent = erreurs;
    texteStatut.textContent = error;
    texteStatut.style.color = "red";
  }
}

bouton.addEventListener("click", chargerDonnees);
