// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer(){
  globalThis.bestCustomer = "not bob";
}

function overwriteBestCustomer(){
  bestCustomer = "maybe bob";
  return bestCustomer;
}

const leastFavoriteCustomer = "karen";

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = "bob";
  return leastFavoriteCustomer;
}
