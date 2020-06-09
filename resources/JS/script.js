const apiKey = 'RSY8066JCSOQEQU8';
const functionType =  'CURRENCY_EXCHANGE_RATE';
const fromCurrency = 'from_currency=USD';
const toCurrency = 'to_currency=JPY';
const url = 'https://www.alphavantage.co/query?';
const fetch = require("node-fetch");

const getExchange = async () =>{
    const endpoint = `${url}function=${functionType}&${fromCurrency}&${toCurrency}&apikey=${apiKey}`;
    
    try{
        const response = await fetch(endpoint);
        if (response.ok){
            const jsonResponse = await response.json();


        }
    }
    catch(error){

        console.log(error);
    }

    
}


const data = getExchange();

