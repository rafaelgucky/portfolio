var titulo = window.document.getElementById('titulo')
var nome = window.prompt('Qual é o seu nome?')
if(nome == null){
    titulo.innerHTML = `Olá, bem-vindo(a) ao meu potfólio!`
}else{
titulo.innerHTML = `Olá ${nome}, bem-vindo(a) ao meu potfólio!`
}
var v = 1
function menu(){
    v = v + 1
    var menu = window.document.getElementById('item')
    if(v % 2 == 0){
    menu.style.display = 'inline-block'
    }
    else{
    menu.style.display = 'none'
    }
}



