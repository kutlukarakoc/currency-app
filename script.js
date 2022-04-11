const country_from = document.querySelector('#currency-from');
const country_to = document.querySelector('#currency-to');
const amount = document.querySelector('.amount');
const result = document.querySelector('.currency-result');


async function getCurrencies(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
};


getCurrencies('https://v6.exchangerate-api.com/v6/fcb66ac742af4e577a91eefa/latest/USD')
    .then((data) => {
        // Adding countries to select menus
        const keys = Object.keys(data.conversion_rates);
        keys.forEach((country) => {
            let optionEl = `<option value="${country.toLowerCase()}">${country}</option>`;

            country_from.innerHTML += optionEl;
            country_to.innerHTML += optionEl;
        });
    });

let currency_from;
country_from.addEventListener('input', (e) => {
    currency_from = e.target.value;
    if (country_to.value && country_from.value) {
        convert();
    };
});

let currency_to;
country_to.addEventListener('input', (e) => {
    currency_to = e.target.value;
    if (country_from.value && country_to.value) {
        convert();
    };
});


amount.addEventListener('input', () => {
    if(currency_from && currency_to){
        convert();
    };
});


function convert() {
    async function convertRequest(url) {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    };

    if (amount.value) {
        convertRequest(`https://v6.exchangerate-api.com/v6/fcb66ac742af4e577a91eefa/latest/${currency_from.toUpperCase()}`)
            .then((data) => {
                result.value = amount.value * data.conversion_rates[currency_to.toUpperCase()];
            });
    };

};




