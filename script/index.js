let body = document.querySelector("#body")
let frase = document.querySelector('.frase_robo_1')
let audio = document.getElementById('audioplayer')
let audiotchau = document.querySelector('#audiodespedida')
let musica = document.querySelector('#musicamenu')
let musica2 = document.querySelector('#musicamenu2')
let apresentacao = document.querySelector('.apresentacao')


function claro() {
    body.style.background = '#014984'
}

function escuro() {
    body.style.background = '#1f395a'
}

function visual() {
    frase.style.display ='block'
    audio.play()
    musica.play()
}

function removeroboot() {
    frase.style.display = 'none'
    audiotchau.play()
}

audiotchau.addEventListener('play', function() {
    if(!audio.pause()) {
        audio.pause()
        musica.pause()
    }
})

function ajustarvolume() {
    musica.volume = 0.1
}

function desligar() {
    musica.pause()
}

function tour() {
    frase.style.display = 'none'
    apresentacao.style.display = 'block'
    musica2.play()
}

musica2.addEventListener('play', function() {
    if(!musica.pause()) {
        musica.pause()
    }
})


