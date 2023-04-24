import Transaction from "../transaction.js";


let tra1 = new Transaction(1, "2022.03.23", 0, 10000, "HUF"); // Tax exempt income transaction
let tra2 = new Transaction(2, "2022.03.23", 0, 100000, "HUF"); // Taxable income transaction 
let tra3 = new Transaction(3, "2022.03.21", 23000, 0, "HUF"); // Expense transaction
let tra4 = new Transaction(4, "2022.03.20", 17000, 0, "HUF"); // Expense transaction
let tra5 = new Transaction(5, "2022.03.24", 0, 15000, "HUF"); // Tax exempt income transaction

test("Daily exchange rate", () => {
    expect(tra1.dailyExchangeRate).toBe(1);
    expect(tra2.dailyExchangeRate).toBe(1);
    expect(tra3.dailyExchangeRate).toBe(1);
    expect(tra4.dailyExchangeRate).toBe(1);
    expect(tra5.dailyExchangeRate).toBe(1);
});

test("Lower than minimum wage", () => {
    expect(tra1.lowerThanMinWage).toBe(false);
    expect(tra2.lowerThanMinWage).toBe(false);
    expect(tra3.lowerThanMinWage).toBe(false);
    expect(tra4.lowerThanMinWage).toBe(false);
    expect(tra5.lowerThanMinWage).toBe(false);
});

test("Is income transaction", () => {
    expect(tra1.isIncomeTransaction).toBe(true);
    expect(tra2.isIncomeTransaction).toBe(true);
    expect(tra3.isIncomeTransaction).toBe(false);
    expect(tra4.isIncomeTransaction).toBe(false);
    expect(tra5.isIncomeTransaction).toBe(true);
});

test("Is expense transaction", () => {
    expect(tra1.isExpenseTransaction).toBe(false);
    expect(tra2.isExpenseTransaction).toBe(false);
    expect(tra3.isExpenseTransaction).toBe(true);
    expect(tra4.isExpenseTransaction).toBe(true);
    expect(tra5.isExpenseTransaction).toBe(false);
});