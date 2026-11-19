const galerie = document.getElementById("galerietemp");


const urlsImages = [];
for (let i = 1; i <= 100; i++) {
  urlsImages.push("https://picsum.photos/seed/" + i + "/400/300");
}

let index = 0;


function chargerImages() {
  const lot = urlsImages.slice(index, index + 10);

  for (let i = 0; i < lot.length; i++) {
    const img = document.createElement("img");
    img.src = lot[i];
    img.alt = "Image " + (index + i + 1);
    img.width = 400;  
    img.height = 300;
    galerie.append(img);
  }

  index = index + 10;
}

function verifierBas() {
  const basEcran = window.scrollY + window.innerHeight;
  const hauteurPage = document.documentElement.scrollHeight;

  if (basEcran >= hauteurPage - 200 && index < urlsImages.length) {
    chargerImages();
    verifierBas(); 
  }
}

chargerImages();
verifierBas();

window.addEventListener("scroll", verifierBas);
