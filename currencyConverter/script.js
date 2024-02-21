let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");
const button1 = document.querySelector("#convert-button");

currencies.forEach((currency => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
}));

currencies.forEach((currency => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
}));

fromDropDown.value = "GBP";
toDropDown.value = "HKD";

let convertCurrency = () => {
    // the html element
    const amount1 = document.querySelector("#amount");
    // value of the html element -> 100 by default
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;


    if (amount.length != 0 ) {
        fetch(api)
            .then((resp) => resp.json())
            .then((data) => {
                let fromExchangeRate = data.conversion_rates[fromCurrency];
                let toExchangeRate = data.conversion_rates[toCurrency];
                let convertedAmount = (amount/fromExchangeRate) * toExchangeRate;
                result.innerText= `${amount}${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
             } );

    } else {
        alert("Please fill in a valid amount");
    }
};

//It’s important to note that using onclick we can add just one listener function. If you want to add more, just use addEventListener(), which is the preferred way for adding events.
// button1.onclick = convertCurrency;
document.addEventListener("click",convertCurrency);
window.addEventListener("load", convertCurrency );