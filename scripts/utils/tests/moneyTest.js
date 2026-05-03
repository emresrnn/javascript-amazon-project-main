import { formatCurrency } from "../scripts/utils/money.js";

console.log("Testing formatCurrency function...");

console.log("Testing formatCurrency(2095)...");

if (formatCurrency(2095) === "20.95"){
  console.log("Test passed");
} else {
  console.log("Test failed");
}

console.log("Testing formatCurrency(1000.5)...");
if (formatCurrency(1000.5) === "10.01"){
  console.log("Test passed");
} else {
  console.log("Test failed");
}

console.log("Testing formatCurrency(1000.4)...");
if (formatCurrency(1000.4) === "10.00"){
  console.log("Test passed");
} else {
  console.log("Test failed");
}

console.log("Testing formatCurrency(0)...");
if (formatCurrency(0) === "0.00"){
  console.log("Test passed");
} else {
  console.log("Test failed");
}
