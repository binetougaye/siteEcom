// Variables
let modal = document.querySelector(".modal");

let panier = document.getElementById("cart");
let modalBody = document.querySelector(".modal-body");
// alert("hello");

let supp = document.getElementById("delete");
modalBody.addEventListener("click", function (e) {
  let target = e.target;
  console.log(target.parentElement);
  target.remove();
});
