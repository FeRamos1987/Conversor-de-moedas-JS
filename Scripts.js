function convertvalue() {
    const inputCurrencyValue = Number(
        document.querySelector('.input-currency').value.replace(',', '.')
    );

    const CurrencyValueToConvert = document.querySelector('.currency-value-to-convert');
    const CurrencyValueConverted = document.querySelector('.currency-value');

    const CurrencySelect = document.querySelector('.select-to');
    const CurrencyFrom = document.querySelector('.select-from');

    const dolartoday = 5.2;
    const eurotoday = 6.2;
    const libratoday = 7.45;
    const yentoday = 0.85;

        
    let valueInReais = inputCurrencyValue;

    if (CurrencyFrom.value == 'dolar') {
        valueInReais = inputCurrencyValue * dolartoday;
    }

    if (CurrencyFrom.value == 'euro') {
        valueInReais = inputCurrencyValue * eurotoday;
    }

    if (CurrencyFrom.value == 'libra') {
        valueInReais = inputCurrencyValue * libratoday;
    }

    if (CurrencyFrom.value == 'yen') {
        valueInReais = inputCurrencyValue * yentoday;
    }

    
if (CurrencyFrom.value == 'real') {
    CurrencyValueToConvert.innerHTML =
        new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue);
}

if (CurrencyFrom.value == 'dolar') {
    CurrencyValueToConvert.innerHTML =
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue);
}

if (CurrencyFrom.value == 'euro') {
    CurrencyValueToConvert.innerHTML =
        new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue);
}

if (CurrencyFrom.value == 'libra') {
    CurrencyValueToConvert.innerHTML =
        new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue);
}

if (CurrencyFrom.value == 'yen') {
    CurrencyValueToConvert.innerHTML =
        new Intl.NumberFormat('zh-CN', {
            style: 'currency',
            currency: 'CNY'
        }).format(inputCurrencyValue);
}

    
    if (CurrencySelect.value == 'dolar') {
        CurrencyValueConverted.innerHTML =
            new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(valueInReais / dolartoday);
    }

    if (CurrencySelect.value == 'euro') {
        CurrencyValueConverted.innerHTML =
            new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR'
            }).format(valueInReais / eurotoday);
    }

    if (CurrencySelect.value == 'libra') {
        CurrencyValueConverted.innerHTML =
            new Intl.NumberFormat('en-GB', {
                style: 'currency',
                currency: 'GBP'
            }).format(valueInReais / libratoday);
    }

    if (CurrencySelect.value == 'yen') {
        CurrencyValueConverted.innerHTML =
            new Intl.NumberFormat('zh-CN', {
                style: 'currency',
                currency: 'CNY'
            }).format(valueInReais / yentoday);
    }
}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name');
    const currencyImg = document.querySelector('.currency-img');
    const currencyImgFrom = document.querySelector('.currency-img-from');

    const CurrencySelect = document.querySelector('.select-to');
    const CurrencyFrom = document.querySelector('.select-from');

    // DESTINO
    if (CurrencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar Americano';
        currencyImg.src = './assets/estados-unidos.png';
    }

    if (CurrencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro';
        currencyImg.src = './assets/euro.png';
    }

    if (CurrencySelect.value == 'libra') {
        currencyName.innerHTML = 'Libra Esterlina';
        currencyImg.src = './assets/Reino-Unido.png';
    }

    if (CurrencySelect.value == 'yen') {
        currencyName.innerHTML = 'Yen Chinês';
        currencyImg.src = './assets/China.png';
    }

    // ORIGEM
    if (CurrencyFrom.value == 'real') {
        currencyImgFrom.src = './assets/brasil 2.png';
    }

    if (CurrencyFrom.value == 'dolar') {
        currencyImgFrom.src = './assets/estados-unidos.png';
    }

    if (CurrencyFrom.value == 'euro') {
        currencyImgFrom.src = './assets/euro.png';
    }

    if (CurrencyFrom.value == 'libra') {
        currencyImgFrom.src = './assets/Reino-Unido.png';
    }

    if (CurrencyFrom.value == 'yen') {
        currencyImgFrom.src = './assets/China.png';
    }

    convertvalue();
}

// BOTÃO
document.querySelector('.convert-button')
    .addEventListener('click', convertvalue);