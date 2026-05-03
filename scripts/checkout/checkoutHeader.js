import { updateCartQuantity } from "../../data/cart.js";

export function renderCheckoutHeader(){
  const quantity = updateCartQuantity();
  const checkoutHeaderHTML = `
    Checkout (<a class="return-to-home-link"href="amazon.html">${quantity} items</a>)
  `;
  
  document.querySelector(".js-checkout-header-middle-section").innerHTML = checkoutHeaderHTML;
}