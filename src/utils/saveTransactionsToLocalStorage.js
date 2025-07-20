export const saveTransactionsToLocalStorage = (transactions) => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
}