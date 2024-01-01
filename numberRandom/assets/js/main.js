const divResult = document.querySelector('.result')
const resultNumberDrawn = document.querySelector('#number-drawn');
const responseP = document.createElement('p');
resultNumberDrawn.appendChild(responseP);

const userInput = document.querySelector('#user-response');


divResult.addEventListener('submit', function (event){
    event.preventDefault(); 
    
});

function numberRandom () {
    const random = Math.random () * (50 - 1) + 1;
    responseP.style.backgroundColor = '#0076a3';
    
    var resNumberR = random.toFixed(0);
    console.log(resNumberR);
    
    return responseP.innerHTML = random.toFixed(0);
}

function numberSent (){
    const valueInput = Number(userInput.value);
    const valueP = Number(resNumberR);
    
    if (valueInput === valueP){
        console.log('igual');
    }
    else{ 
        console.log('diferente');
    }

    return console.log(valueInput, valueP);
}
