export let cart;
loadFromStorage();

export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem("cart")) || [];
}



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
export function addToCart(productId, quantity = 1){
  let matchingItem;
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });
  
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

export function updateDeliveryOption(productId, deliveryOptionId){
  let matchingItem;
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });
  
  matchingItem.deliveryOptionId = deliveryOptionId;
  saveToLocalStorage();
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