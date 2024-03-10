let body = document.querySelector("#body")
let modos = document.querySelector('.robo_modos')
let frase = document.querySelector('.frase_robo_1')

function claro() {
    body.style.background = '#014984'
}

function escuro() {
    body.style.background = '#1f395a'
}

modos.style.transition = '1s';

setTimeout(function() {
    modos

    modos.style.display='none'
}, 3000).style.transition = '1s'

