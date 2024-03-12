let body = document.querySelector("#body")
let frase = document.querySelector('.frase_robo_1')
let audio = document.getElementById('audioplayer')
let audiotchau = document.querySelector('#audiodespedida')
let musica = document.querySelector('#musicamenu')
let musica2 = document.querySelector('#musicamenu2')
let apresentacao = document.querySelector('.apresentacao')
let nomeheader = document.querySelector('#nomeheader')
let fala1 = document.querySelector('#fala1')
let sobre = document.getElementById('sobre')
let linkedin = document.getElementById('linkedin')
let portifolio = document.getElementById('portifolio')
let projetos = document.getElementById('projetos')
let container = document.querySelector('.container')
let menuaberto = document.getElementById('mobile')
let menunone = document.getElementById('menuaberto')
let menufechado = document.getElementById('menufechado')


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
    fala1.play()
    setTimeout(function() {
        nomeheader.style.display = 'none'
    }, 7000)
    setTimeout(function() {
        sobre.style.display = 'none'
    },17000 )
    setTimeout(function() {
        linkedin.style.display = 'none'
    }, 23000)
    setTimeout(function() {
        portifolio.style.display = 'none'
    }, 30000)
    setTimeout(function() {
        projetos.style.display = 'none'
    }, 37000)
    setTimeout(function() {
        body.style.background = '#014984'
    }, 46000)
    setTimeout(function() {
        body.style.background = '#1f395a'
    }, 47000)
    setTimeout(function() {
        nomeheader.style.display = 'block'
        sobre.style.display = 'block'
        linkedin.style.display = 'block'
        portifolio.style.display = 'block'
        projetos.style.display = 'block'
    }, 59000)
}


musica2.addEventListener('play', function() {
    if(!musica.pause()) {
        musica.pause()
    }
})


//menu

function abrirmenu() {
    menuaberto.style.display = 'block'
    menunone.style.display = 'none'
    menufechado.style.display = 'block'
}

function fecharmenu() {
    menuaberto.style.display = 'none'
    menufechado.style.display = 'none'
    menunone.style.display = 'block'
}