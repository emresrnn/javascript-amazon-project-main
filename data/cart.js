export let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveToLocalStorage(){
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function updateQuantity(productId, newQuantity){
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      cartItem.quantity = newQuantity;
      saveToLocalStorage();
    }
  });
}
export function addToCart(productId){
  let matchingItem;
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });
  const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
  const quantity = Number(quantitySelector.value);
  
  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
      deliveryOptionId: "1"
    });
  }
  saveToLocalStorage();
}

export function removeFromCart(productId){
  const newCart = [];
  cart.forEach((cartItem) =>{
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveToLocalStorage();
}

export function updateCartQuantity(){
  let cartQuantity = 0;
  cart.forEach((cartItem)=> {
    cartQuantity += cartItem.quantity;
  });
  return cartQuantity;
}

/*
export function removeFromCart(productId){
  let newCart = [];
  newCart = cart.filter((cartItem) => {
    if (cartItem.productId !== productId) {
      return true;
    } else {
      return false;
    }
  });
  cart = newCart;
}
*/