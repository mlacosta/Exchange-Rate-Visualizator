const apiKey = 'RSY8066JCSOQEQU8';
const functionType =  'CURRENCY_EXCHANGE_RATE';
const fromCurrency = 'from_currency=USD';
const toCurrency = 'to_currency=USD';
const url = 'https://www.alphavantage.co/query?';

const getExchange = ()=>{
    requestUrl = `${url}${functionType}&${fromCurrency}&${toCurrency}&apikey=${apiKey}`;
    
    fetch(requestUrl).then(
        response =>{
            console.log(response);
        },
        rejection =>{
            console.error(rejection.message);
        }
    );
    
}

getExchange()