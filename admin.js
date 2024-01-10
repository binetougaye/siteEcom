// Variables
let modal = document.querySelector(".modal");
let modalTitle = document.querySelector(".modal-title");
let panier = document.getElementById("cart");
let modalBody = document.querySelector(".modal-body");
//
// Fonction AJOUT dans le Panier
// let img = document.querySelectorAll(".img")
let clothes = document.querySelectorAll(".clothes");
let span = document.querySelector(".span");
let product = document.getElementById("cart");
let buttons = document.querySelectorAll(".buttons");
console.log(buttons);
let nomDuProduit = document.getElementById("productName");
let prixDuProduit = document.getElementById("productPrice");
let price = document.querySelectorAll(".price");
let bgHeader = document.querySelector(".bgHeader");
let container = document.querySelector(".pro");
let text = document.querySelector(".text");
let textMiddle = document.querySelector(".text-middle");
let lien = document.querySelector("#lien");
console.log(price);
// console.log(price.innerText);
const tabProduct = [
  {
    id: 1,
    product: "pull.jpeg",
    title: "Pull-over Lurex grosse maille",
    price: 49.99,
  },
  {
    id: 2,
    product: "pull2.jpeg",
    title: "Pull-over torsadé foil",
    price: 59.99,
  },
  {
    id: 3,
    product: "pull3.jpeg",
    title: "Cardigan liserés contrastants",
    price: 79.99,
  },
  {
    id: 4,
    product: "pull4.jpeg",
    title: "Pull-over oversize col V",
    price: 69.99,
  },
];
for (i = 0; i < clothes.length; i++) {
  let names = clothes[i];
  console.log(names);
  let prix = clothes[i];
  clothes[i].addEventListener("click", function (e) {
    container.innerHTML = "";
    for (i = 0; i < tabProduct.length; i++) {
      // clothes[i] = tabProduct[i].id;
      // console.log(clothes[1].innerText);

      container.innerHTML += `
        <div class="row">
            <div class="col-lg-4">
              <div class="card border-0">
                  <img src="img/${tabProduct[i].product}"  alt="...">
                  <div class="card-body">
                      <h4 class="clothes text-white fw-bold">${tabProduct[i].title}</h4>
                      </p>
                      <p class="icon"><i class="bi bi-heart"></i></p>
                  </div>
              </div>
          </div>
        </div>
        `;
    }
  });
}

// FUNCTION BACK
function refresh() {
  location.reload();
}
// Voir le panier
let img = document.querySelectorAll(".img");
let Buttons = document.querySelectorAll(".buttons");
console.log(img);
