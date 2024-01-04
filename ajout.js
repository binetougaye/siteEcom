function Products(photos, nom, prix) {
    this.photos = photos,
    this.nom = nom,
    this.prix = prix
}

const product1 = new Products('jordan.png','Jordan',20000);
const product2 = new Products('blazer.png','Blazer',15000);
const product3 = new Products('crater.png','Crater',10000);
const product4 = new Products('hippie.png','Hippie',14000);
const product5 = new Products('best.png','Best',18000);
const product6 = new Products('air.png','Air Force',13500);
const product7 = new Products('jordan.png','Jordan',24000);
const product8 = new Products('vost.png','Vost',34000);
const product9 = new Products('best.png','Best',25000);

let products = [];
products.push(product1, product2, product3, product4, product5, product6, product7 ,product8,product9);

function populateTableList() {
    let listOfProducts = '';
    
    products.forEach(prod => {
        listOfProducts += `
        <tr class="text-center">
            <td><img src="${prod.photos}" class="img-fluid img-thumbnail w-50"></td>
            <td >${prod.nom}</td>
            <td >${prod.prix}</td>
            <td class="w-25">
             <button class="btn-info">Add</button>
             <button class="btn-danger">Delete</button>
            </td>
        </tr>
        `;
    });

    document.getElementById('productList').innerHTML = listOfProducts;
}
