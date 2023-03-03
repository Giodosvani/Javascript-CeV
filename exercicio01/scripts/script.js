var tempo = new Date()
var hora = tempo.getHours()

var msg = document.querySelector('#mensagem')
var imagemDia = document.querySelector('#dia')
var imagemTarde = document.querySelector('#tarde')
var imagemNoite = document.querySelector('#noite')

msg.innerHTML = `<p>Agora são ${hora} : ${tempo.getMinutes()}</p>`

if (hora <= 12) {
    imagemDia.style.display = 'block'
    document.body.style.background = '#a6c0e0'
    msg.innerHTML += `<p>BOM DIA!</p>`
} else if (hora <= 18) {
    imagemTarde.style.display = 'block'
    document.body.style.background = '#f79951'
    msg.innerHTML += `<p>BOA TARDE!</p>`
} else { 
    imagemNoite.style.display = 'block'
    document.body.style.background = '#2a2846'
    msg.innerHTML += `<p>BOA NOITE!</p>`
}
