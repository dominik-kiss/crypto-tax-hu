
export default function calculateFromInput(transactionArray) {
    // Filter the array for only those that are positive (income)
    let incomeTransactions = transactionArray.filter((transaction) => transaction.isIncomeTransaction);
    
    // Loop through the income transactions and merge those with the same date
    function filterIncomeTransactions() {
        for (let i = incomeTransactions.length - 1; i >= 0; i--) {
            if (incomeTransactions[i] == undefined) {
                continue;
            }
            for (let j = incomeTransactions.length - 1; j >= 0; j--) {
                if (incomeTransactions[j] == undefined) {
                    continue;
                }
                if (incomeTransactions[i].date == incomeTransactions[j].date && incomeTransactions[i] != incomeTransactions[j]) {
                    incomeTransactions[i].income += incomeTransactions[j].income;
                    incomeTransactions[i].financialResult += incomeTransactions[j].financialResult;
                    incomeTransactions.splice(j, 1);
                }
            }
        }
    }

    // Filter the processed income transactions for those that are "tax exempt"
    let taxExemptTransactions = incomeTransactions.filter((transaction) => transaction.lowerThanMinWage);

    // Calculate total expense - the sum of all expense transactions
    const totalExpense = transactionArray.reduce(
        (accumulator, currentObj) => accumulator + currentObj.expense,
        0
    );

    // Calculate total income - the sum of all income transactions
    const totalIncome = transactionArray.reduce(
        (accumulator, currentObj) => accumulator + currentObj.income,
        0
    );

    // Calculate total tax-exempt income - the sum of all income transactions that are also "tax-exempt"
    function getTotalExemptIncome() {
        return taxExemptTransactions.reduce((accumulator, currentObj) => accumulator + currentObj.income, 0);
    }
    
    // Calculate display values
    // let totalLoss = totalExpense - totalIncome > 0 ? totalExpense - totalIncome : 0;
    function getTotalLoss() {
        return totalExpense - totalIncome > 0 ? totalExpense - totalIncome : 0;
    }
    function getTotalProfit() {
        return totalIncome - totalExpense > 0 ? totalIncome - totalExpense : 0;
    }
    function getYearlyLoss() {
        return getTotalLoss() - getTotalExemptIncome() > 0 ? getTotalLoss() - getTotalExemptIncome() : 0;
    }
    function getYearlyProfit() {
        return getTotalProfit() - getTotalExemptIncome();
    }
    function getTaxPayable() {
        return getYearlyProfit() * 0.15;
    }

    return {
        "totalExemptIncome": getTotalExemptIncome(),
        "totalLoss": getTotalLoss(),
        "totalProfit": getTotalProfit(),
        "yearlyLoss": getYearlyLoss(),
        "yearlyProfit": getYearlyProfit(),
        "taxPayable": getTaxPayable()
    }

}
