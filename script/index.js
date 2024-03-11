let body = document.querySelector("#body")
let frase = document.querySelector('.frase_robo_1')
let audio = document.getElementById('audioplayer')
function claro() {
    body.style.background = '#014984'
}

function escuro() {
    body.style.background = '#1f395a'
}

function visual() {
    frase.style.display ='block'
    audio.play()
}
