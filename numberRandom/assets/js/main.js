const divResult = document.querySelector('.result')
const resultNumberDrawn = document.querySelector('#number-drawn');
const responseP = document.createElement('p');
resultNumberDrawn.appendChild(responseP);
const h2 = document.querySelector('#result-input');
const userInput = document.querySelector('#user-response');
let lastRandom;

divResult.addEventListener('submit', function (event) {
    event.preventDefault();
});


let counterNumber = 1;

function numberRandom() {
    const random = Math.random() * (5 - 0) + 1;
    const rand = Math.floor(random)
    responseP.style.backgroundColor = '#0076a3';
    responseP.style.color = '#0076a3';
    responseP.innerHTML = rand;
    h2.innerHTML = 'Boa sorte!';
    h2.style.color = 'white';
    h2.style.backgroundColor = '#0076a3'
    h2.style.padding = '5px 12px 5px 12px'
    h2.style.borderRadius = '20px'
    lastRandom = rand
    return rand;
}

function numberSent() {
    const valueInput = Number(userInput.value);
    const valueP = lastRandom;
    
        function gamersResult(number) {
            const resultFunc = (number % 2 === 0) ? 'Jogador 02' : 'Jogador 01';
            return resultFunc;
        }
    
        let userGamers = gamersResult(counterNumber);

    if (valueInput === valueP) {
        responseP.style.backgroundColor = 'rgba(58, 252, 58, 0.658)';
        responseP.style.color = 'white';
        h2.innerHTML = `${userGamers} Ganhou!`
        h2.style.color = 'white';
        h2.style.backgroundColor = 'rgba(58, 252, 58, 0.658)'

    }
    else {
        responseP.style.backgroundColor = 'rgba(255, 0, 0, 0.9)';
        responseP.style.color = 'rgba(255, 0, 0, 0.01)';
        h2.innerHTML = 'Tente Novamente!'
        h2.style.backgroundColor = 'rgba(255, 0, 0, 0.9)'
        h2.style.color = 'white';
    }
    

    //INCREMENT IN TABLE 
    
    
    const table = document.querySelector('#table-increment');
    const arrayTable = [];


    arrayTable.push({
        number: valueInput,
        times: counterNumber,
        gamers: userGamers,
    });

    for (const increment of arrayTable) {
        table.innerHTML += `
        <tr>
        <td>${increment.times}</td>
        <td>${increment.gamers}</td>
        <td>${increment.number}</td>
        </tr>`
        
    }
    counterNumber++
    console.log(valueP);
    return valueP, valueInput;
}

