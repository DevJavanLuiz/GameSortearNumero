const divResult = document.querySelector('.result')
const resultNumberDrawn = document.querySelector('#number-drawn');
const responseP = document.createElement('p');
resultNumberDrawn.appendChild(responseP);
const h2 = document.querySelector('#result-input');
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
    h2.innerHTML = 'Boa sorte!';
    h2.style.color = '#0076a3'
    lastRandom = rand
    return  rand;
}

function numberSent (){
    const valueInput = Number(userInput.value);
    const valueP = lastRandom;
    
    
    if (valueInput === valueP){
        responseP.style.backgroundColor = 'rgba(58, 252, 58, 0.658)';
        responseP.style.color = 'white';
        h2.innerHTML = 'Parabéns você achou!'
        h2.style.color = 'rgba(58, 252, 58, 0.658)';
    }
    else{ 
        responseP.style.backgroundColor = 'rgba(255, 0, 0, 0.9)';
        responseP.style.color = 'rgba(255, 0, 0, 0.01)'; 
        h2.innerHTML = 'Tente Novamente!'
        h2.style.color = 'rgba(255, 0, 0, 0.9)'; 

    }

    console.log(valueP, valueInput);
    return  valueP, valueInput;
}