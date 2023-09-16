'use strict';

function AppState() {
  this.allProducts = [];
}
function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    //  let newProduct = new Product(`${productNames[i]}.png`)
    //  this.allProducts.push(newProduct);
    } else {
      // let newProduct = new Product(`${productNames[i]}.jpg`)
      // this.allProducts.push(newProduct); 
      this.allProducts.push(new Product(`${productNames[i]}.jpg`))
    }
  }
  console.log("This.allProducts: ", this.allProducts);
}

AppState.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save product data to local storage
  localStorage.setItem("AppState", JSON.stringify(currentAppState.allProducts));
  console.log("Data Being stored is : ", JSON.stringify(currentAppState.allProducts));
}



AppState.prototype.loadItems = function () {

  // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load
 // console.log(localStorage.getItem("AppState"));
  let storedData = JSON.parse(localStorage.getItem("AppState"));
  //console.log("Stored Data from AppState.loadItems: ", storedData);
 

  for (let i = 0; i < storedData.productNames.length; i++) {
    if (storedData.productNames[i] === 'sweep') {
      this.allProducts.push(new Product(storedData.productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(storedData.productNames[i]))
    }
  }
  console.log(this.allProducts);

  //this.instantiateProducts();

}

let currentAppState = new AppState();
currentAppState.instantiateProducts();
console.log("CurrentAppState.allProducts: ",currentAppState.allProducts);
currentAppState.saveToLocalStorage();
currentAppState.loadItems();


// function Product(name, fileExtension = 'jpg') {
//   this.name = name;
//   this.source = `assets/${name}.${fileExtension}`;
//   this.timesClicked = 0;
//   this.timesShown = 0;
// }
