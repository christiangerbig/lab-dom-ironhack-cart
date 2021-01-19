// ITERATION 1

function updateSubtotal(product) {
  const priceSelector = product.querySelector(".price span");
  const quantitySelector = product.querySelector(".quantity input");
  let price = Number(priceSelector.innerText);
  let quantity = (quantitySelector.value);
  let subtotal = price * quantity;
  const subtotalSelector = product.querySelector(".subtotal span");
  subtotalSelector.innerText = subtotal;
  return subtotal;
}

function calculateAll() {

  // ITERATION 2
  let productsSelectors = document.getElementsByClassName("product");
  let totalSum = 0;
  for (let singleProduct of productsSelectors) {
    totalSum += updateSubtotal(singleProduct);
  }

  // ITERATION 3
  let = totalSumSelector = document.querySelector("#total-value span");
  totalSumSelector.innerText = totalSum;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let parent = target.parentNode;
  parent.removeChild(target);
 
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtnSelectors = document.getElementsByClassName("btn-remove");
  for (let removeBtnSelector of removeBtnSelectors) {
    removeBtnSelector.addEventListener('click', removeProduct);
  }
});
  
