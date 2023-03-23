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
        // Get the result of the transaction (negative if expense, positive if income)
        return (this.expense == 0) ? (this.income * this.dailyExchangeRate):(this.expense * this.dailyExchangeRate * -1);
    }

    get isTaxExemptTransaction() {
        // Boolean, true if "financialResult" does not exceed 10% of the minimum wage
        return (this.financialResult <= (this.#minimumWage2022 * 0.1));
    }
}