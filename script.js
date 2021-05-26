const pwEl = document.getElementById('pw')
const copyEl = document.getElementById('copy')
const lengthEl = document.getElementById('length')
const upperEl = document.getElementById('upper')
const lowerEl = document.getElementById('lower')
const numberEl = document.getElementById('number')
const symbolEl = document.getElementById('symbol')
const generateEl = document.getElementById('generate')

const upperLetters = 'ABCDEFGIJKLMNOPRSTUVWQZ'
const lowerLetters = upperLetters.toLowerCase()
const numbers = '1234567890'
const symbols ='~!@£$%^&*()_+{}:"|<>?±'



// Strigs can be treated like Arrays - can loop through it - IMPORTANT


// GENERATE RANDOM VALUE 
function getUpperCase() {
    // decimal * 26 - will produce value between 0-26
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]

}   

function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}


// GENERATE PASSWORD BASED OF PASSWORD LENGTH

function generatePassword() {
    // Length of password
    const len = lengthEl.value;
    // Empty string
    let password = '';
    // call function to populate for each item 
    for (let i=0; i<len; i++) {
        const x = generateVALUE()
        password += x
    }
   // Save password
    pwEl.innerText = password
}


// GENEATE PASSWORD VALUE 

function generateVALUE() {

    const xs = [];

    if(upperEl.checked) {
        xs.push(getUpperCase());
    }
    if(lowerEl.checked) {
        xs.push(getLowerCase());
    }
    if(numberEl.checked) {
        xs.push(getNumber());
    }
    if(symbolEl.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0 ) return '';

    return xs[Math.floor(Math.random() * xs.length)]

}


generateEl.addEventListener('click', generatePassword)


copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});

