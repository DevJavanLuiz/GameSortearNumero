const divResult = document.querySelector('.result')
const resultNumberDrawn = document.querySelector('#number-drawn');
const responseP = document.createElement('p');
resultNumberDrawn.appendChild(responseP);

const userInput = document.querySelector('#user-response');

let lastRandom;
divResult.addEventListener('submit', function (event){
    event.preventDefault(); 
    
});

function numberRandom () {
    const random = Math.random () * (5 - 0) + 1;
    const rand = Math.floor(random)
    responseP.style.backgroundColor = '#0076a3';
    responseP.style.color = '#0076a3';
    responseP.innerHTML = rand;

    lastRandom = rand
    return  rand;
}

function numberSent (){
    const valueInput = Number(userInput.value);
    const valueP = lastRandom;
    
    
    if (valueInput === valueP){
        responseP.style.backgroundColor = 'green';
        responseP.style.color = 'white';
    }
    else{ 
        responseP.style.backgroundColor = 'red';
        responseP.style.color = 'red' 
    }

    console.log(valueP, valueInput);
    return  valueP, valueInput;
}