const button = document.getElementById('display-button');
const display = document.getElementById('display-data');
const fromList = document.getElementById('from-list');
const toList = document.getElementById('to-list');


const apiKey = 'RSY8066JCSOQEQU8';
const functionType =  'CURRENCY_EXCHANGE_RATE';
const url = 'https://www.alphavantage.co/query?';
//const fetch = require("node-fetch");


async function getExchange() {
    
    let from = fromList.options[fromList.selectedIndex].value;
    let to = toList.options[toList.selectedIndex].value;

    const endpoint = `${url}function=${functionType}&from_currency=${from}&to_currency=${to}&apikey=${apiKey}`;
    
    display.innerHTML ='<h2>LOADING...</h2>';


    try{
        const response = await fetch(endpoint);
        if (response.ok){
            const jsonResponse = await response.json();
            const message = jsonResponse[Object.keys(jsonResponse)[0]];
            let text = '';           
           
            const keys = Object.keys(message);
            keys.forEach((prop)=> 
                text+=`<span style='font-weight: bold;'>${prop}:</span>
                <span style='color:red;'>${message[prop]}</span><br> `);
      
                display.innerHTML = text;

        }
    }
    catch(error){
        console.log(error);
    }

    
}



button.addEventListener('click',getExchange);

