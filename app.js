

// -------------------panier
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
let buttons = document.querySelector(".buttons");
let modalTitle = document.querySelector(".modal-title");
let n = 1;
for (i = 0; i < clothes.length; i++) {
  clothes[i].addEventListener("click", function () {
    let inc = n++;
    span.innerHTML = inc;
    if (inc === 1) {
      modalTitle.innerHTML = `Ton panier (${inc} produit)`;
    } else {
      modalTitle.innerHTML = `Ton panier (${inc} produits)`;
    }
  });

  // if (inc > 1) {
  //   product.innerHTML = `(${inc} produits)`;
  // } else {
  //   product.innerHTML = `(${inc} produit)`;
  // }
}
