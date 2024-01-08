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
            <button class="border-0 bg-dark text-white p-1 shadow rounded btn"  style="display: flex; justify-content: center; align-items: center; width: 120px;">
              <span class="add ms-3 me-3">Ajouter</span>
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
                            <button class="border-0 bg-dark text-white p-1 shadow rounded btn"  style="display: flex; justify-content: center; align-items: center; width: 120px;">
                           
                            <span class="add ms-3 me-3">Ajouter</span>
                           
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
                      <button class="border-0 bg-dark text-white p-1 shadow rounded btn"  style="display: flex; justify-content: center; align-items: center; width: 120px;">
                      
                      <span class="add ms-3 me-3">Ajouter</span>
                     
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
                        <button class="border-0 bg-dark text-white p-1 shadow rounded btn"  style="display: flex; justify-content: center; align-items: center; width: 120px; ">
                           
                            <span class="add ms-3 me-3">Ajouter</span>
                            
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
      let button = document.querySelectorAll(".btn");
      let spanPanier = document.querySelector(".panier");
      console.log(button);
      let n = 1;
      for (i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function () {
          let incr = n++;
          spanPanier.innerHTML = incr;
          if (incr == 1) {
            modalTitle.innerHTML = `Ton panier(${incr} produit)`;
          } else {
            modalTitle.innerHTML = `Ton panier(${incr} produits)`;
          }
        });
      }
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
                            <button class="border-0 bg-dark text-white p-1 shadow rounded btn"  style="display: flex; justify-content: center; align-items: center; width: 120px;">
                           
                            <span class="add ms-3 me-3">Ajouter</span>
                           
                        </button>

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
                            <button class="border-0 bg-dark text-white p-1 shadow rounded btn" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                               
                                <span class="add ms-3 me-3">Ajouter</span>
                                
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
                        <button class="border-0 bg-dark text-white p-1 shadow rounded btn"  style="display: flex; justify-content: center; align-items: center; width: 120px;">
                           
                            <span class="add ms-3 me-3">Ajouter</span>
                           
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
                            <button class="border-0 bg-dark text-white p-1 shadow rounded btn"  style="display: flex; justify-content: center; align-items: center; width: 120px;">
                               
                                <span class="add ms-3 me-3">Ajouter</span>
                               
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
      let button = document.querySelectorAll(".btn");
      let spanPanier = document.querySelector(".panier");
      console.log(button);
      let n = 1;
      for (i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function () {
          let incr = n++;
          spanPanier.innerHTML = incr;
          if (incr == 1) {
            modalTitle.innerHTML = `Ton panier(${incr} produit)`;
          } else {
            modalTitle.innerHTML = `Ton panier(${incr} produits)`;
          }
        });
      }
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
                                <button class="border-0 bg-dark text-white p-1 shadow rounded btn"  style="display: flex; justify-content: center; align-items: center;  width: 120px;">
                                   
                                    <span class="add ms-3 me-3">Ajouter</span>
                                   
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
                                <button class="border-0 bg-dark text-white p-1 shadow rounded btn"  style="display: flex; justify-content: center; align-items: center;  width: 120px;">
                                    
                                    <span class="add ms-3 me-3">Ajouter</span>
                                   
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
                            <button class="border-0 bg-dark text-white p-1 shadow rounded btn"  style="display: flex; justify-content: center; align-items: center; width: 120px;">
                               
                                <span class="add ms-3 me-3">Ajouter</span>
                                
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
                            <button class="border-0 bg-dark text-white p-1 shadow rounded btn"  style="display: flex; justify-content: center; align-items: center; width: 120px;">
                               
                                <span class="add ms-3 me-3">Ajouter</span>
                                
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
      let button = document.querySelectorAll(".btn");
      let spanPanier = document.querySelector(".panier");
      console.log(button);
      let n = 1;
      for (i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function () {
          let incr = n++;
          spanPanier.innerHTML = incr;
          if (incr == 1) {
            modalTitle.innerHTML = `Ton panier(${incr} produit)`;
          } else {
            modalTitle.innerHTML = `Ton panier(${incr} produits)`;
          }
        });
      }
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
                                <button class="border-0 bg-dark text-white p-1 shadow rounded btn" style="display: flex; justify-content: center; align-items: center; width: 120px;">
                                    
                                    <span class="add ms-3 me-3">Ajouter</span>
                                    
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
                                <button class="border-0 bg-dark text-white p-1 shadow rounded btn"  style="display: flex; justify-content: center; align-items: center; width: 120px;">
                                   
                                    <span class="add ms-3 me-3">Ajouter</span>
                                    
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
                            <button class="border-0 bg-dark text-white p-1 shadow rounded btn"  style="display: flex; justify-content: center; align-items: center; width: 120px;">
                               
                                <span class="add ms-3 me-3">Ajouter</span>
                               
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
                        <button class="border-0 bg-dark text-white p-1 shadow rounded btn"  style="display: flex; justify-content: center; align-items: center; width: 120px;">
                           
                            <span class="add ms-3 me-3">Ajouter</span>
                            
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
      let button = document.querySelectorAll(".btn");
      let spanPanier = document.querySelector(".panier");
      console.log(button);
      let n = 1;
      for (i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function () {
          let incr = n++;
          spanPanier.innerHTML = incr;
          if (incr == 1) {
            modalTitle.innerHTML = `Ton panier(${incr} produit)`;
          } else {
            modalTitle.innerHTML = `Ton panier(${incr} produits)`;
          }
        });
      }
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
                                <button class="border-0 bg-dark text-white p-1 shadow rounded btn"  style="display: flex; justify-content: center; align-items: center; width: 120px;">
                                   
                                    <span class="add ms-3 me-3">Ajouter</span>
                                    
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
                                <button class="border-0 bg-dark text-white p-1 shadow rounded btn"  style="display: flex; justify-content: center; align-items: center; width: 120px;">
                                   
                                    <span class="add ms-3 me-3">Ajouter</span>
                                    
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
                            <button class="border-0 bg-dark text-white p-1 shadow rounded btn"  style="display: flex; justify-content: center; align-items: center; width: 120px;">
                               
                                <span class="add ms-3 me-3">Ajouter</span>
                               
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
                         <button class="border-0 bg-dark text-white p-1 shadow rounded btn"  style="display: flex; justify-content: center; align-items: center; width: 120px;">
                           
                            <span class="add ms-3 me-3">Ajouter</span>
                            
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
      let button = document.querySelectorAll(".btn");
      let spanPanier = document.querySelector(".panier");
      console.log(button);
      let n = 1;
      for (i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function () {
          let incr = n++;
          spanPanier.innerHTML = incr;
          if (incr == 1) {
            modalTitle.innerHTML = `Ton panier(${incr} produit)`;
          } else {
            modalTitle.innerHTML = `Ton panier(${incr} produits)`;
          }
        });
      }
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
                                <button class="border-0 bg-dark text-white p-1 shadow rounded btn"  style="display: flex; justify-content: center; align-items: center; width: 120px;">
                                   
                                    <span class="add ms-3 me-3">Ajouter</span>
                                    
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
                            <button class="border-0 bg-dark text-white p-1 shadow rounded btn"  style="display: flex; justify-content: center; align-items: center; width: 120px;">
                               
                                <span class="add ms-3 me-3">Ajouter</span>
                               
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
                      <button class="border-0 bg-dark text-white p-1 shadow rounded btn"  style="display: flex; justify-content: center; align-items: center; width: 120px;">
                     
                      <span class="add ms-3 me-3">Ajouter</span>
                      
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
                        <button class="border-0 bg-dark text-white p-1 shadow rounded btn"  style="display: flex; justify-content: center; align-items: center; width: 120px;">
                            
                            <span class="add ms-3 me-3">Ajouter</span>
                           
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
      let button = document.querySelectorAll(".btn");
      let spanPanier = document.querySelector(".panier");
      console.log(button);
      let n = 1;
      for (i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function () {
          let incr = n++;
          spanPanier.innerHTML = incr;
          if (incr == 1) {
            modalTitle.innerHTML = `Ton panier(${incr} produit)`;
          } else {
            modalTitle.innerHTML = `Ton panier(${incr} produits)`;
          }
        });
      }
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
