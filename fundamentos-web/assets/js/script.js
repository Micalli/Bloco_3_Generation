//var
//let
//const

/*
por Tag getElementByTagName()
porId getElementById()
por nome getElementByName()
por Classe getElementsByClassName()
pot Seletor querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width= '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length <=3){
        nome.style.color = 'red'
        txt.innerHTML = 'Nome Inválido'

    }else{
        nome.style.color = 'limegreen'
        txt.innerHTML = ' '
    }
}

function validaEmail() {
    let txt = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || (email.value.indexOf('.') == -1)) {
        email.style.color = 'red'
        txt.innerHTML = 'E-mail invalido'
        
    }else{
        email.style.color = 'limegreen'
        txt.innerHTML = ' '
    }
}

