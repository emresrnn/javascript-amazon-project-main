import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";

try {
  renderOrderSummary(renderCheckoutHeader);
} catch(e) {
  console.error("renderOrderSummary hatası:", e);
}

try {
  renderPaymentSummary();
} catch(e) {
  console.error("renderPaymentSummary hatası:", e);
}

try {
  renderCheckoutHeader();
} catch(e) {
  console.error("renderCheckoutHeader hatası:", e);
}