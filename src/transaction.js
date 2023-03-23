export default class Transaction {
    #minimumWage2022 = 200000;

    constructor(id, date, expense, income, currency) {
        this.id = id,
        this.date = date,
        this.expense = expense,
        this.income = income,
        this.currency = currency
    }

    get dailyExchangeRate() {
        // Get the daily exchange rate for "this.currency":HUF from the MNB API
        return 350;
    }

    get financialResult() {
        // "income" or "expense" multiplied by "currency"
        return (this.income * this.dailyExchangeRate);
    }

    get isTaxExemptTransaction() {
        // Boolean, true if "financialResult" does not exceed 10% of the minimum wage
        return (this.financialResult <= (this.#minimumWage2022 * 0.1));
    }
}

let rowOne = new Transaction(1, "2023.03.23", 0, 57, "EUR");
