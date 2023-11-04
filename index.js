const key = document.querySelectorAll('.key')
const display = document.getElementById('display')
let operatorCount = 0

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('equal')) {
        let calculo = display.value;
        if (operatorCount <= 1) {
            display.value = eval(calculo.toString())
            operatorCount = 0
        }
    } else if (e.target.classList.contains('clear')) {
        display.value = '';
        operatorCount = 0;
    } else if (e.target.classList.contains('number')) {
        display.value += e.target.innerText
    } else if (e.target.classList.contains('operator')) {
        if (operatorCount < 1) {
            display.value += e.target.innerText
            operatorCount++
        }
    } else if (e.target.classList.contains('period')) {
            display.value += e.target.innerText
    }
})