var num1 = window.document.getElementById('a')
var num2 = window.document.getElementById('b')
var num3 = window.document.getElementById('c')
var resultado = window.document.getElementById('resultado')
var res1 = window.document.getElementById('res1')
var res2 = window.document.getElementById('res2')
var res3 = window.document.getElementById('res3')


function calcular(){
    var a = Number(num1.value)
    var b = Number(num2.value)
    var c = Number(num3.value)
    var calculando = b * b - 4 * a * c

    resultado.innerHTML = `${b}² - 4 x ${a} x ${c} <br>`
    resultado.innerHTML += `${b * b} + (${-4 * a * c}) <br>` 
    resultado.innerHTML += ` Delta = ${calculando}`
}
function bhaskarapositivo(){
    var resposi = window.document.getElementById('resposi')
    var a = Number(num1.value)
    var b = Number(num2.value)
    var c = Number(num3.value)
    var calculando = b * b - 4 * a * c

     resposi.innerHTML = `- (${b}) + ${Math.sqrt(calculando)} : ${2*a}<br>`
     resposi.innerHTML +=` X' = ${(-b + Math. sqrt(calculando)) / 2 * a}`
}
function bhaskaranegativo(){
    var resnega = window.document.getElementById('resnega')
    var a = Number(num1.value)
    var b = Number(num2.value)
    var c = Number(num3.value)
    var calculando = b * b - 4 * a * c

     resnega.innerHTML = `- (${b}) - ${Math.sqrt(calculando)} : ${2*a}<br>`
     resnega.innerHTML +=` X'' = ${(-b - Math. sqrt(calculando)) / 2 * a}`
}

function caso1(){

    var a = Number(num1.value)
    var b = Number(num2.value)
    var c = Number(num3.value)
    var resultado1 = -c / a

    res1.innerHTML = ''
    res1.innerHTML = `X² = +- (${resultado1}) <br>`
    res1.innerHTML += `X = +- ${Math.sqrt(resultado1)}`
}
function caso2(){

    var a = Number(num1.value)
    var b = Number(num2.value)
    var c = Number(num3.value)

    res2.innerHTML = `X = ${-b / a}`

}
function caso3(){

    var a = Number(num1.value)
    var b = Number(num2.value)
    var c = Number(num3.value)

    res3.innerHTML = 'X = 0'

}

function limpar(){

    res1.innerHTML = ''
    res2.innerHTML = ''
    res3.innerHTML = ''
    resnega.innerHTML = ''
    resposi.innerHTML = ''
    resultado.innerHTML = ''
    num1.value = ''
    num2.value = ''
    num3.value = ''

}