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
                          <img src="img/pull.jpeg" class="" alt="...">
                          <div class="card-body d-flex justify-content-between">
                          <div>
                          <p>Pull-over Lurex grosse maille</p>
                          <p>49,99 €</p>
                          </div>
                          <div>
                          <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                          <div>
                              <i class="fa fa-plus" aria-hidden="true"></i>
                          </div>
                          <span class="add ms-3 me-3">Ajouter</span>
                          <div>
                              <i class="fa fa-minus" aria-hidden="true"></i>
                          </div>
                      </button>
                      </div>   
                          </div>
                      </div>
                  </div>

                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/pull2.jpeg" class="" alt="...">
                          <div class="card-body d-flex justify-content-between">
                            <div>
                                <p>Pull-over torsadé foil</p>
                                <p>59,99 €</p>
                            </div>
                            <div>
                            <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                            <div>
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </div>
                            <span class="add ms-3 me-3">Ajouter</span>
                            <div>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </div>
                        </button>
                            </div>
                          </div>
                      </div>
                     
                  </div>
              </div>
              <div class="row">
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/pull3.jpeg" class="" alt="...">
                      <div class="card-body d-flex justify-content-between">
                      <div>
                        <p>Cardigan liserés contrastants</p>
                        <p>79,99 €</p>
                      </div>
                      <div>
                      <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                      <div>
                          <i class="fa fa-plus" aria-hidden="true"></i>
                      </div>
                      <span class="add ms-3 me-3">Ajouter</span>
                      <div>
                          <i class="fa fa-minus" aria-hidden="true"></i>
                      </div>
                  </button>
                      </div>
                      </div>
                  </div>
                 
              </div>
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/pull4.jpeg" class="" alt="...">
                      <div class="card-body d-flex justify-content-between">
                      <div>
                      <p>Pull-over oversize col V</p>
                      <p>69,99 €</p>
                      </div>
                      <div>
                        <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center; width: 120px; ">
                            <div>
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </div>
                            <span class="add ms-3 me-3">Ajouter</span>
                            <div>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </div>
                        </button>
                      </div>
                      </div>
                  </div>
                 
              </div>
          </div>
          <div class="d-flex justify-content-center align-items-center">
          <button  onclick="refresh()" class="border-0 text-white p-1 rounded shadow back" style="background-color:#000;width:150px;">Back</button>
          </div>
      `;
      let plus = document.querySelectorAll(".fa-plus");
      let minus = document.querySelectorAll(".fa-minus");
      let add = document.querySelectorAll(".add");
      let shop = document.querySelector(".panier");
      console.log(minus);
      let p = 1;
      function increment() {
        for (let i = 0; i < plus.length; i++) {
          plus[i].addEventListener("click", function () {
            // let z = p++;
            let nbrProduit = (add[i].innerHTML = shop.innerHTML = p++);
            if (nbrProduit === 1) {
              modalTitle.innerHTML = `Ton panier(${nbrProduit} produit)`;
            } else {
              modalTitle.innerHTML = `Ton panier(${nbrProduit} produits)`;
            }
          });
        }
      }

      function decrement() {
        for (let i = 0; i < minus.length; i++) {
          minus[i].addEventListener("click", function () {
            add[i].innerHTML = shop.innerHTML = p--;
          });
        }
      }
      increment();
      decrement();

    } else if (names.innerText === "Robes") {
      text.innerText = "ROBES ET COMBINAISONS POUR FEMME";
      container.innerHTML = `
      <div class="row">
  
                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/robe1.jpeg" class="" alt="...">
                          <div class="card-body d-flex justify-content-between">
                            <div>
                              <p>Robe asymétrique sequins</p>
                              <p>49,99 €</p>
                            </div>
                            <div>
                            <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                            <div>
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </div>
                            <span class="add ms-3 me-3">Ajouter</span>
                            <div>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </div>
                        // </button>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/robe2.jpeg" class="" alt="...">
                          <div class="card-body d-flex justify-content-between">
                          <div>
                            <p>Robe maille col roulé
                            </p>
                            <p>39,99 €</p>
                          </div>
                          <div>
                            <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                                <div>
                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                </div>
                                <span class="add ms-3 me-3">Ajouter</span>
                                <div>
                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                </div>
                            </button>
                          </div>  
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row">
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/robe3.jpeg" class="" alt="...">
                      <div class="card-body d-flex justify-content-between">
                      <div>
                      <p>Robe maille col roulé
                      </p>
                      <p>39,99 €</p>
                      </div>
                      <div>
                        <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                            <div>
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </div>
                            <span class="add ms-3 me-3">Ajouter</span>
                            <div>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </div>
                        </button>
                      </div>
                      </div>
                  </div>
                  
             
              </div>
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/robe4.jpeg" class="" alt="...">
                      <div class="card-body d-flex justify-content-between">
                        <div>
                            <p>Robe midi maille côtelée col montant
                            </p>
                            <p>49,99 €</p>
                        </div>
                        <div>
                            <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                                <div>
                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                </div>
                                <span class="add ms-3 me-3">Ajouter</span>
                                <div>
                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                </div>
                            </button>
                        </div>
                      </div>
                  </div>
                 
              </div>
          </div>
          <div class="d-flex justify-content-center align-items-center">
          <button  onclick="refresh()" class="border-0 text-white p-1 rounded shadow back" style="background-color:#000;width:150px;">Back</button>
          </div>
      `;
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify({}));
}

function increment() {
  let plus = document.querySelectorAll(".fa-plus");
  let add = document.querySelectorAll(".add");
  let shop = document.querySelector(".panier");

  for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function () {
      let p = parseInt(add[i].innerText);
      add[i].innerText = shop.innerText = p++;

      updateLocalStorage(i, p + 1);
    });
  }
}

function decrement() {
  let minus = document.querySelectorAll(".fa-minus");
  let add = document.querySelectorAll(".add");
  let shop = document.querySelector(".panier");

  for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", function () {
      let p = parseInt(add[i].innerText);
      if (p > 1) {
        add[i].innerText = shop.innerText = p - 1;

        updateLocalStorage(i, p - 1);
      }
    });
  }
}

function updateLocalStorage(index, quantity) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  let itemName = document.querySelectorAll(".card-body h5")[index].innerText;

  cart[itemName] = quantity;

  localStorage.setItem('cart', JSON.stringify(cart));
}

increment();
decrement();

function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart'));

  for (let itemName in cart) {
    let index = Array.from(document.querySelectorAll(".card-body h5")).findIndex(item => item.innerText === itemName);
    let add = document.querySelectorAll(".add")[index];
    let shop = document.querySelector(".panier");

    add.innerText = shop.innerText = cart[itemName];
  }
}

displayCart();
    } else if (names.innerText === "Best sellers") {
      text.innerHTML = "BEST SELLERS";
      container.innerHTML = `
      <div class="row">
                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/b1.jpeg" class="" alt="...">
                          <div class="card-body d-flex justify-content-between">
                            <div>
                                <h5>NOUVELLE COLLECTION - PREMIUM</h5>
                                <p>Manteau laine ceinture</p>
                                <p>Prix actuel 199,99€</p>
                            </div>
                            <div>
                                <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center;  width: 120px;">
                                    <div>
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </div>
                                    <span class="add ms-3 me-3">Ajouter</span>
                                    <div>
                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                    </div>
                                </button>
                            </div>
                          </div>
                      </div>
                      
                  </div>
                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/b2.jpeg" class="" alt="...">
                          <div class="card-body d-flex justify-content-between">
                            <div>
                                <h5>NOUVELLE COLLECTION</h5>
                                <p>Manteau laine ajusté</p>
                                <p>119,99 €</p>
                            </div>
                            <div>
                                <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center;  width: 120px;">
                                    <div>
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </div>
                                    <span class="add ms-3 me-3">Ajouter</span>
                                    <div>
                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                    </div>
                                </button>
                            </div>
                             
                          </div>
                      </div>
                      
                  </div>
              </div>
              <div class="row">
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/b3.jpeg" class="" alt="...">
                      <div class="card-body d-flex justify-content-between">
                        <div>
                            <h5>NOUVELLE COLLECTION</h5>
                            <p>Robe cache-cœur boucle</p>
                            <p>69,99 €</p>
                        </div>
                        <div>
                            <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                                <div>
                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                </div>
                                <span class="add ms-3 me-3">Ajouter</span>
                                <div>
                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                </div>
                            </button>
                        </div>
                      </div>
                  </div>
                  
              </div>
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/b4.jpeg" class="img" alt="...">
                      <div class="card-body d-flex justify-content-between">
                        <div>
                            <h5>NOUVELLE COLLECTION</h5>
                            <p>Veste costume droite</p>
                            <p>75,99 €</p>
                        </div>
                        <div>
                            <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                                <div>
                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                </div>
                                <span class="add ms-3 me-3">Ajouter</span>
                                <div>
                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                </div>
                            </button>
                        </div>
                      </div>
                  </div>
                  
              </div>
          </div>
          <div class="d-flex justify-content-center align-items-center">
          <button  onclick="refresh()" class="border-0 text-white p-1 rounded shadow back" style="background-color:#000;width:150px;">Back</button>
          </div>
      `;
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify({}));
}

function increment() {
  let plus = document.querySelectorAll(".fa-plus");
  let add = document.querySelectorAll(".add");
  let shop = document.querySelector(".panier");

  for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function () {
      let p = parseInt(add[i].innerText);
      add[i].innerText = shop.innerText = p + 1;

      updateLocalStorage(i, p + 1);
    });
  }
}

function decrement() {
  let minus = document.querySelectorAll(".fa-minus");
  let add = document.querySelectorAll(".add");
  let shop = document.querySelector(".panier");

  for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", function () {
      let p = parseInt(add[i].innerText);
      if (p > 1) {
        add[i].innerText = shop.innerText = p - 1;

        updateLocalStorage(i, p - 1);
      }
    });
  }
}

function updateLocalStorage(index, quantity) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  let itemName = document.querySelectorAll(".card-body h5")[index].innerText;

  cart[itemName] = quantity;

  localStorage.setItem('cart', JSON.stringify(cart));
}

increment();
decrement();

function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart'));
  for (let itemName in cart) {
    let index = Array.from(document.querySelectorAll(".card-body h5")).findIndex(item => item.innerText === itemName);
    let add = document.querySelectorAll(".add")[index];
    let shop = document.querySelector(".panier");

    add.innerText = shop.innerText = cart[itemName];
  }
}

displayCart();
    } else if (names.innerText === "Total look") {
      textMiddle.innerHTML = "TOTAL LOOK";
      bgHeader.src = "img/bg.avif";
      text.innerHTML = "Total look";
      lien.style.display = "none";
      container.innerHTML = `
      <div class="row">
  
                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/look1.jpeg" class="" alt="...">
                          <div class="card-body d-flex justify-content-between">
                            <div>
                                <h5>NOUVELLE COLLECTION</h5>
                                <p>Cardigan cache-cœur côtelée</p>
                                <p>39,99 €</p>
                            </div>
                            <div>
                                <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                                    <div>
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </div>
                                    <span class="add ms-3 me-3">Ajouter</span>
                                    <div>
                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                    </div>
                                </button>
                            </div>
                          </div>
                      </div>
                     
                  </div>
                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/look2.jpeg" class="" alt="...">
                          <div class="card-body d-flex justify-content-between">
                            <div>
                                <h5>NOUVELLE COLLECTION</h5>
                                <p>Jupe portefeuille imprimée</p>
                                <p>49,99 €</p>
                            </div>
                            <div>
                                <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                                    <div>
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </div>
                                    <span class="add ms-3 me-3">Ajouter</span>
                                    <div>
                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                    </div>
                                </button>
                            </div>
                          </div>
                      </div>
                      
                  </div>
              </div>
              <div class="row">
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/look3.jpeg" class="" alt="...">
                      <div class="card-body d-flex justify-content-between">
                        <div>
                            <h5>NOUVELLE COLLECTION</h5>
                            <p>Pantalon maille wideleg</p>
                            <p>29,99 €</p>
                        </div>
                        <div>
                            <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                                <div>
                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                </div>
                                <span class="add ms-3 me-3">Ajouter</span>
                                <div>
                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                </div>
                            </button>
                        </div>
                      </div>
                  </div>
                
              </div>
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/look4.jpeg" class="" alt="...">
                      <div class="card-body d-flex justify-content-between">
                      <div>
                        <h5>NOUVELLE COLLECTION</h5>
                        <p>Pantalon coutures décoratives</p>
                        <p>29,99 €</p>
                      </div>
                      <div>
                        <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                            <div>
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </div>
                            <span class="add ms-3 me-3">Ajouter</span>
                            <div>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </div>
                        </button>
                      </div>
                      </div>
                  </div>
                 
              </div>
          </div>
          <div class="d-flex justify-content-center align-items-center">
          <button  onclick="refresh()" class="border-0 text-white p-1 rounded shadow back" style="background-color:#000;width:150px;">Back</button>
          </div>
      `;
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify({}));
}
function increment() {
  let plus = document.querySelectorAll(".fa-plus");
  let add = document.querySelectorAll(".add");
  let shop = document.querySelector(".panier");

  for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function () {
      let p = parseInt(add[i].innerText);
      add[i].innerText = shop.innerText = p++;
      updateLocalStorage(i, p + 1);
    });
  }
}

function decrement() {
  let minus = document.querySelectorAll(".fa-minus");
  let add = document.querySelectorAll(".add");
  let shop = document.querySelector(".panier");

  for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", function () {
      let p = parseInt(add[i].innerText);
      if (p > 1) {
        add[i].innerText = shop.innerText = p - 1;

        updateLocalStorage(i, p - 1);
      }
    });
  }
}

function updateLocalStorage(index, quantity) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  let itemName = document.querySelectorAll(".card-body h5")[index].innerText;

  cart[itemName] = quantity;

  localStorage.setItem('cart', JSON.stringify(cart));
}

increment();
decrement();

function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart'));

  for (let itemName in cart) {
    let index = Array.from(document.querySelectorAll(".card-body h5")).findIndex(item => item.innerText === itemName);
    let add = document.querySelectorAll(".add")[index];
    let shop = document.querySelector(".panier");

    add.innerText = shop.innerText = cart[itemName];
  }
}

displayCart();
    } else if (names.innerText === "Coat") {
      textMiddle.innerHTML = "COAT TIME";
      bgHeader.src = "img/coatTime.avif";
      text.innerHTML = "COAT TIME";
      container.innerHTML = `
      <div class="row">
  
                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/coat1.jpeg" class="" alt="...">
                          <div class="card-body d-flex justify-content-between">
                            <div>
                                <h5>NOUVELLE COLLECTION - PREMIUM</h5>
                                <p>Anorak imperméable duvet</p>
                                <p>179,99 €</p>
                            </div>
                            <div>
                                <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                                    <div>
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </div>
                                    <span class="add ms-3 me-3">Ajouter</span>
                                    <div>
                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                    </div>
                                </button>
                            </div>
                          </div>
                      </div>
                     
                  </div>
                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/coat2.jpeg" class="" alt="...">
                          <div class="card-body d-flex justify-content-between">
                            <div>
                                <h5>NOUVELLE COLLECTION</h5>
                                <p>Manteau en fausse fourrure à ornements</p>
                                <p>119,99 €</p>
                            </div>
                            <div>
                                <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                                    <div>
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </div>
                                    <span class="add ms-3 me-3">Ajouter</span>
                                    <div>
                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                    </div>
                                </button>
                            </div>
                             
                          </div>
                      </div>
                     
                  </div>
              </div>
              <div class="row">
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/coat3.jpeg" class="" alt="...">
                      <div class="card-body d-flex justify-content-between">
                        <div>
                            <h5>NOUVELLE COLLECTION</h5>
                            <p>Manteau en fausse fourrure à ornements</p>
                            <p>119,99 €</p>
                        </div>
                        <div>
                            <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                                <div>
                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                </div>
                                <span class="add ms-3 me-3">Ajouter</span>
                                <div>
                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                </div>
                            </button>
                        </div>
                      </div>
                  </div>
                  
              </div>
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/coat4.avif" class="" alt="...">
                      <div class="card-body d-flex justify-content-between">
                      <div>
                        <h5>NOUVELLE COLLECTION</h5>
                        <p>Manteau laine fait main oversize</p>
                        <p>149,99 €</p>
                      </div>
                      <div>
                         <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                            <div>
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </div>
                            <span class="add ms-3 me-3">Ajouter</span>
                            <div>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </div>
                        </button>
                      </div>
                      </div>
                  </div>
                 
              </div>
          </div>
          <div class="d-flex justify-content-center align-items-center">
          <button  onclick="refresh()" class="border-0 text-white p-1 rounded shadow back" style="background-color:#000;width:150px;">Back</button>
          </div>
      `;
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify({}));
}

function increment() {
  let plus = document.querySelectorAll(".fa-plus");
  let add = document.querySelectorAll(".add");
  let shop = document.querySelector(".panier");

  for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function () {
      let p = parseInt(add[i].innerText);
      add[i].innerText = shop.innerText = p + 1;

      updateLocalStorage(i, p + 1);
    });
  }
}

function decrement() {
  let minus = document.querySelectorAll(".fa-minus");
  let add = document.querySelectorAll(".add");
  let shop = document.querySelector(".panier");

  for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", function () {
      let p = parseInt(add[i].innerText);
      if (p > 1) {
        add[i].innerText = shop.innerText = p - 1;

        updateLocalStorage(i, p - 1);
      }
    });
  }
}

function updateLocalStorage(index, quantity) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  let itemName = document.querySelectorAll(".card-body h5")[index].innerText;

  cart[itemName] = quantity;

  localStorage.setItem('cart', JSON.stringify(cart));
}

increment();
decrement();

function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart'));

  for (let itemName in cart) {
    let index = Array.from(document.querySelectorAll(".card-body h5")).findIndex(item => item.innerText === itemName);
    let add = document.querySelectorAll(".add")[index];
    let shop = document.querySelector(".panier");

    add.innerText = shop.innerText = cart[itemName];
  }
}

displayCart();
    } else if (names.innerText === "Basiques") {
      textMiddle.innerHTML = "UP-TO-DATE BASICS";
      bgHeader.src = "img/bgBase.avif";
      text.innerHTML = "Basiques";
      container.innerHTML = `
      <div class="row">
  
                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/base1.jpeg" class="" alt="...">
                          <div class="card-body d-flex justify-content-between">
                            <div>
                                <h5>NOUVELLE COLLECTION</h5>
                                <p>Manteau laine ceinture</p>
                                <p>179,99 €</p>
                            </div>
                            <div>
                                <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                                    <div>
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </div>
                                    <span class="add ms-3 me-3">Ajouter</span>
                                    <div>
                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                    </div>
                                </button>
                            </div>
                          </div>
                      </div>
                     
                  </div>
                  <div class="col-lg-6">
                      <div class="card border-0">
                          <img src="img/base2.jpeg" class="" alt="...">
                          <div class="card-body d-flex justify-content-between">
                          <div>
                            <h5>NOUVELLE COLLECTION</h5>
                            <p>Manteau laine ajusté</p>
                            <p>119,99 €</p>
                          </div>
                          <div>
                            <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                                <div>
                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                </div>
                                <span class="add ms-3 me-3">Ajouter</span>
                                <div>
                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                </div>
                            </button>
                          </div>
                             
                          </div>
                      </div>
                     
                  </div>
              </div>
              <div class="row">
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/base3.jpeg" class="" alt="...">
                      <div class="card-body d-flex justify-content-between">
                      <div>
                        <h5>NOUVELLE COLLECTION</h5>
                        <p>Manteau fait main avec ceinture</p>
                        <p>149,99 €</p>
                      </div>
                      <div>
                      <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                      <div>
                          <i class="fa fa-plus" aria-hidden="true"></i>
                      </div>
                      <span class="add ms-3 me-3">Ajouter</span>
                      <div>
                          <i class="fa fa-minus" aria-hidden="true"></i>
                      </div>
                  </button>
                      </div>
                      </div>
                  </div>
              </div>
  
              <div class="col-lg-6">
                  <div class="card border-0">
                      <img src="img/base4.jpeg" class="" alt="...">
                      <div class="card-body d-flex justify-content-between">
                      <div>
                        <h5>NOUVELLE COLLECTION</h5>
                        <p>Veste double face similicuir</p>
                        <p>79,99 €</p>
                      </div>
                      <div>
                        <button class="border-0 bg-dark text-white p-1 shadow rounded" id="test" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                            <div>
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </div>
                            <span class="add ms-3 me-3">Ajouter</span>
                            <div>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </div>
                        </button>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="d-flex justify-content-center align-items-center">
          <button  onclick="refresh()" class="border-0 text-white p-1 rounded shadow back" style="background-color:#000;width:150px;">Back</button>
          </div>
      `;
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify({}));
}

function increment() {
  let plus = document.querySelectorAll(".fa-plus");
  let add = document.querySelectorAll(".add");
  let shop = document.querySelector(".panier");

  for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function () {
      let p = parseInt(add[i].innerText);
      add[i].innerText = shop.innerText = p + 1;

      updateLocalStorage(i, p + 1);
    });
  }
}

function decrement() {
  let minus = document.querySelectorAll(".fa-minus");
  let add = document.querySelectorAll(".add");
  let shop = document.querySelector(".panier");

  for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", function () {
      let p = parseInt(add[i].innerText);
      if (p > 1) {
        add[i].innerText = shop.innerText = p - 1;

        updateLocalStorage(i, p - 1);
      }
    });
  }
}

function updateLocalStorage(index, quantity) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  let itemName = document.querySelectorAll(".card-body h5")[index].innerText;

  cart[itemName] = quantity;

  localStorage.setItem('cart', JSON.stringify(cart));
}

increment();
decrement();

function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart'));

  for (let itemName in cart) {
    let index = Array.from(document.querySelectorAll(".card-body h5")).findIndex(item => item.innerText === itemName);
    let add = document.querySelectorAll(".add")[index];
    let shop = document.querySelector(".panier");

    add.innerText = shop.innerText = cart[itemName];
  }
}

displayCart();
    }
  });
}

// let inc = document.querySelectorAll(".inc");
// let dec = document.querySelectorAll(".dec");
// let span = document.querySelectorAll(".span");
// let p = 1;

// FUNCTION AJOUT DANS LE PANIER

// FUNCTION DIMINUER DANS LE PANIER
// function diminue() {
//   let incr = p--;
//   add.innerHTML = incr;
//   shop.innerHTML = incr;
// }
// FUNCTION BACK
function refresh() {
  location.reload();
}
// Voir le panier
let img = document.querySelectorAll(".img");
let Buttons = document.querySelectorAll(".buttons");
console.log(img);






