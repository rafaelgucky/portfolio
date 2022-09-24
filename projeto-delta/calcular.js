var num1 = window.document.getElementById('a')
var num2 = window.document.getElementById('b')
var num3 = window.document.getElementById('c')
var resultado = window.document.getElementById('resultado')

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