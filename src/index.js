import calculateFromInput from "./calc.js";
import Transaction from "./transaction.js";

// Input will be a number of Transaction objects
let tra1 = new Transaction(1, "2022.03.23", 0, 10000, "HUF"); // Tax exempt income transaction
let tra2 = new Transaction(2, "2022.03.23", 0, 75000, "HUF"); // Non-tax excempt income transaction
let tra3 = new Transaction(3, "2022.03.21", 23000, 0, "HUF"); // Expense transaction
let tra4 = new Transaction(4, "2022.03.20", 17000, 0, "HUF"); // Expense transaction
let tra5 = new Transaction(5, "2022.03.24", 0, 15000, "HUF"); // Tax exempt income transaction

// Input objects will be added to an array
let transactionObjects = [tra1, tra2, tra3, tra4, tra5];

const output = calculateFromInput(transactionObjects);

console.log("*********Tárgyévi eredmény*********");
console.log("Veszteség: " + output.totalLoss);
console.log("Jövedelem: " + output.totalProfit);

console.log("*********Kisértékű total*********");
console.log("Kisértékű bevételek: " + output.totalExemptIncome);

console.log("*********Adózandó*********");
console.log("Évi veszteség: " + output.yearlyLoss);
console.log("Jövedelem: " + output.yearlyProfit);
console.log("Adó: " + output.taxPayable);