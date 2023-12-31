const divResult = document.querySelector('.result')
const resultNumberDrawn = document.querySelector('#number-drawn');

divResult.addEventListener('submit', function (event){
    event.preventDefault(); 
});

function numberRandom () {
    const random = Math.random () * (50 - 1) + 1;
    return resultNumberDrawn.innerHTML = `Numero Sorteado: ${random.toFixed(0)}`;
}