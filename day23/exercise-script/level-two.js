const inputInfoDiv = document.querySelector('.input-info')
const keyDiv = document.querySelector('.key')

document.body.addEventListener('keydown', (e) => {
    console.log(e.key)
    console.log(e.keyCode)
    inputInfoDiv.innerHTML = `You pressed <span>${e.key}</span>`
    keyDiv.innerHTML = e.keyCode
    

})