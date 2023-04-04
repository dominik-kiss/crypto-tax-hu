export default class Transaction {
    #minimumWage2022 = 200000;

    constructor(id, date, expense, income, currency) {
        this.id = id,
        this.date = date,
        this.expense = expense * this.dailyExchangeRate;
        this.income = income * this.dailyExchangeRate;
        this.currency = currency,
        this.financialResult = (this.income > 0) ? this.income : (0 - this.expense);
    }

    get dailyExchangeRate() {
        // Get the daily exchange rate for "this.currency":HUF from the MNB API
        return 1;
    }

    get lowerThanMinWage() {
        return (this.income <= (this.#minimumWage2022 * 0.1));
    }

    get isIncomeTransaction() {
        return (this.income > 0);
    }

    get isExpenseTransaction() {
        return !isIncomeTransaction;
    }

}