console.log('Running assignment...');

const transactions = require('./simple-transaction-data').data;

// Assignment 1:
const filterFunction = (data) => {
    return data.filter((transaction) => {
        if(transaction.credit_card_company === 'VISA' && parseInt(transaction.transaction_date.substring(0, 4)) >= 2015 && parseInt(transaction.price) >= 50){
            return true
        }
    });
}

// Assignment 2:
const aboveAverageFunction = (data) => {
    return data.map(transaction => {
        if(parseInt(transaction.price) > 100){
            transaction.isPriceAboveAverage = true
        }else{
            transaction.isPriceAboveAverage = false
        }
        return transaction
    })
}

console.log(filterFunction(transactions), aboveAverageFunction(transactions))