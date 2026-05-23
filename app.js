const stepCount = document.getElementById('stepcount')
const what = document.getElementById('what')
const block = document.getElementById("block")

const randomPossitionRabbit = () => {
    let randomRabbit = Math.floor(Math.random() * 100) +1
    return randomRabbit
}


let rabbitPos = randomPossitionRabbit()

block.addEventListener('click' , event => {
    if(stepCount.innerText <50) {
        stepCount.innerText++
        let clickPos = Number(event.target.innerText)
        console.log(rabbitPos);
        
        if(clickPos === rabbitPos) {
            alert('you win')
        } else if(Number(stepCount.innerText) ===25) {
            what.innerText = `${rabbitPos - 15} - ${rabbitPos + 15}`
        } else if(Number(stepCount.innerText) === 26) {
            what.innerText = '?'
        } else {
            Math.random() > 0.5 ? rabbitPos-- : rabbitPos++
        }
    } else{
        alert('your step count > 50 yoy lose ')
    }
})
