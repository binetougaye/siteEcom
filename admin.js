// Variables
let modal = document.querySelector(".modal");

let panier = document.getElementById("cart");
let modalBody = document.querySelector(".modal-body");
// alert("hello");

let supp = document.getElementById("delete");

//

// HIS CODE

// let btnBuy = document.querySelectorAll(".buyButton");
// Fonction AJOUT dans le Panier
let clothes = document.querySelectorAll(".clothes");
let span = document.querySelector(".span");
let product = document.getElementById("cart");
let buttons = document.querySelectorAll(".buttons");
console.log(buttons);
let modalTitle = document.querySelector(".modal-title");
let n = 1;
let nomDuProduit = document.getElementById("productName");
let prixDuProduit = document.getElementById("productPrice");
const tabProduct = [
  {
    id: 1,
    nom: "Doudoune",
    prix: "200$",
  },
  {
    id: 2,
    nom: "Pulls et cardigans",
    prix: "170$",
  },
  {
    id: 3,
    nom: "Robe",
    prix: "269$",
  },
  {
    id: 4,
    nom: "Robe portefeuille",
    prix: "300$",
  },
  {
    id: 5,
    nom: "Total look",
    prix: "350$",
  },
  {
    id: 6,
    nom: "Trench",
    prix: "210$",
  },
  {
    id: 7,
    nom: "Best sellers",
    prix: "295$",
  },
  {
    id: 8,
    nom: "Coat",
    prix: "200$",
  },
];
let price = document.querySelectorAll(".price");
let bgHeader = document.querySelector(".bgHeader");
let container = document.querySelector(".pro");
let text = document.querySelector(".text");
let textMiddle = document.querySelector(".text-middle");
let lien = document.querySelector("#lien");
console.log(price);
// console.log(price.innerText);
for (i = 0; i < clothes.length; i++) {
  let names = clothes[i];
  console.log(names);
  let prix = clothes[i];

  // console.log(prix.innerText);
  clothes[i].addEventListener("click", function () {
    if (names.innerText === "Pulls et cardigans") {
      text.innerHTML = "PULL-OVERS ET CARDIGANS POUR FEMME";
      container.innerHTML = `
      <div class="row">
  
                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/pull.jpeg" class="img" alt="...">
                          <div class="card-body">
                              
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/pull2.jpeg" class="img" alt="...">
                          <div class="card-body">
  
                             
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row">
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/pull3.jpeg" class="img" alt="...">
                      <div class="card-body">
                         
                      </div>
                  </div>
              </div>
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/pull4.jpeg" class="img" alt="...">
                      <div class="card-body">
                          
                      </div>
                  </div>
              </div>
          </div>
      `;
    } else if (names.innerText === "Robes") {
      text.innerText = "ROBES ET COMBINAISONS POUR FEMME";
      container.innerHTML = `
      <div class="row">
  
                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/robe1.jpeg" class="img" alt="...">
                          <div class="card-body">
                              
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/robe2.jpeg" class="img" alt="...">
                          <div class="card-body">
  
                             
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row">
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/robe3.jpeg" class="img" alt="...">
                      <div class="card-body">
                         
                      </div>
                  </div>
              </div>
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/robe4.jpeg" class="img" alt="...">
                      <div class="card-body">
                          
                      </div>
                  </div>
              </div>
          </div>
      `;
    } else if (names.innerText === "Best sellers") {
      text.innerHTML = "BEST SELLERS";
      container.innerHTML = `
      <div class="row">
  
                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/b1.jpeg" class="img" alt="...">
                          <div class="card-body">
                              
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/b2.jpeg" class="img" alt="...">
                          <div class="card-body">
  
                             
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row">
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/b3.jpeg" class="img" alt="...">
                      <div class="card-body">
                         
                      </div>
                  </div>
              </div>
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/b4.jpeg" class="img" alt="...">
                      <div class="card-body">
                          
                      </div>
                  </div>
              </div>
          </div>
      `;
    } else if (names.innerText === "Total look") {
      textMiddle.innerHTML = "TOTAL LOOK";
      bgHeader.src = "img/bg.avif";
      text.innerHTML = "Total look";
      lien.style.display = "none";
      container.innerHTML = `
      <div class="row">
  
                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/look1.jpeg" class="img" alt="...">
                          <div class="card-body">
                              
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/look2.jpeg" class="img" alt="...">
                          <div class="card-body">
  
                             
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row">
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/look3.jpeg" class="img" alt="...">
                      <div class="card-body">
                         
                      </div>
                  </div>
              </div>
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/look4.jpeg" class="img" alt="...">
                      <div class="card-body">
                          
                      </div>
                  </div>
              </div>
          </div>
      `;
    } else if (names.innerText === "Coat") {
      textMiddle.innerHTML = "COAT TIME";
      bgHeader.src = "img/coatTime.avif";
      text.innerHTML = "COAT TIME";
      container.innerHTML = `
      <div class="row">
  
                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/coat1.jpeg" class="img" alt="...">
                          <div class="card-body">
                              
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/coat2.jpeg" class="img" alt="...">
                          <div class="card-body">
  
                             
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row">
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/coat3.jpeg" class="img" alt="...">
                      <div class="card-body">
                         
                      </div>
                  </div>
              </div>
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/coat4.avif" class="img" alt="...">
                      <div class="card-body">
                          
                      </div>
                  </div>
              </div>
          </div>
      `;
    } else if (names.innerText === "Basiques") {
      textMiddle.innerHTML = "UP-TO-DATE BASICS";
      bgHeader.src = "img/bgBase.avif";
      text.innerHTML = "Basiques";
      container.innerHTML = `
      <div class="row">
  
                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/base1.jpeg" class="img" alt="...">
                          <div class="card-body">
                              
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/base2.jpeg" class="img" alt="...">
                          <div class="card-body">
  
                             
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row">
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/base3.jpeg" class="img" alt="...">
                      <div class="card-body">
                         
                      </div>
                  </div>
              </div>
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/base4.jpeg" class="img" alt="...">
                      <div class="card-body">
                          
                      </div>
                  </div>
              </div>
          </div>
      `;
    }

    // for (i = 0; i < tabProduct.length; i++) {
    // console.log(tabProduct[i]);

    let ind = 0;
    let total = document.getElementById("total");
    nomDuProduit.innerHTML += `<p>Nom du produit: ${names.innerText}</p>`;
    // prixDuProduit.innerHTML += `<p>Prix du produit : ${prix.innerText}</p>`;
    // let prixTotal = ;

    total.innerHTML = `<p>Prix total =${Number(prix.innerText)}</p>`;
    // }
    let inc = n++;
    span.innerHTML = inc;
    if (inc === 1) {
      modalTitle.innerHTML = `Ton panier (${inc} produit)`;
    } else {
      modalTitle.innerHTML = `Ton panier (${inc} produits)`;
    }
  });
}
// Voir le panier
// Mode dark/sombre
let img = document.querySelectorAll(".img");
let Buttons = document.querySelectorAll(".buttons");
console.log(img);
