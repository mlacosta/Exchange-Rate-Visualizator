const apiKey = 'RSY8066JCSOQEQU8';
const functionType =  'CURRENCY_EXCHANGE_RATE';
const fromCurrency = 'from_currency=USD';
const toCurrency = 'to_currency=USD';
const url = 'https://www.alphavantage.co/query?';
const fetch = require("node-fetch");

async function getExchange() {
    const endpoint = `${url}function=${functionType}&${fromCurrency}&${toCurrency}&apikey=${apiKey}`;
    
    try{
        const response = await fetch(endpoint);
        if (response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse)
            //console.log(jsonResponse['Realtime Currency Exchange Rate'])
        }
    }
    catch(error){

        console.log(error);
    }

    
}


getExchange();

