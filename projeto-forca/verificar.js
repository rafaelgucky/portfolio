
var pal1 = window.document.getElementById('letra1')
var pal2 = window.document.getElementById('letra2')
var pal3 = window.document.getElementById('letra3')
var pal4 = window.document.getElementById('letra4')
var pal5 = window.document.getElementById('letra5')
var pal6 = window.document.getElementById('letra6')
var pal7 = window.document.getElementById('letra7')
var pal8 = window.document.getElementById('letra8')
var pal9 = window.document.getElementById('letra9')
var pal10 = window.document.getElementById('letra10')
var it1 = window.document.getElementById('r1')
var it2 = window.document.getElementById('r2')
var it3 = window.document.getElementById('r3')
var it4 = window.document.getElementById('r4')
var it5 = window.document.getElementById('r5')
var it6 = window.document.getElementById('r6')
var it7 = window.document.getElementById('r7')
var it8 = window.document.getElementById('r8')
var it9 = window.document.getElementById('r9')
var it10 = window.document.getElementById('r10')
var tentativa = window.document.getElementById('tentativas')
var palavrasocultas = window.document.getElementsByClassName('palavraoculta')
var letras = window.document.getElementById('letra')
var erros = window.document.getElementById('erros')
var certa = window.document.getElementById('certas')
var escolhidas = window.document.getElementById('escolhidas')
var avisos = window.document.getElementById('avisos')
var quantidadedecasas = window.document.getElementById('quantidade')
var erradas = 0
var certas = 0
var letras_escolhidas = []
var tentativas = 0

function verificar(){

    var palavra1 = String(pal1.value).toLowerCase()
    var palavra2 = String(pal2.value).toLowerCase()
    var palavra3 = String(pal3.value).toLowerCase()
    var palavra4 = String(pal4.value).toLowerCase()
    var palavra5 = String(pal5.value).toLowerCase()
    var palavra6 = String(pal6.value).toLowerCase()
    var palavra7 = String(pal7.value).toLowerCase()
    var palavra8 = String(pal8.value).toLowerCase()
    var palavra9 = String(pal9.value).toLowerCase()
    var palavra10 = String(pal10.value).toLowerCase()
    var letra = String(letras.value)

    letra = letra.toLowerCase();

    tentativas = tentativas + 1
    tentativa.innerHTML = 'Tentativas: '
    tentativa.innerHTML += tentativas

    avisos.innerHTML = 'Avisos: '

    if(letra == ''){
      avisos.innerHTML = 'Avisos: Letra inv??lida!'
    }

    else if(it1 == letra || it2 == letra || it3 == letra || it4 == letra || it5 == letra || it6 == letra || it7 == letra || it8 == letra || it9 == letra || it10 == letra){
       avisos.innerHTML ='Avisos: Letra j?? acertada!'
       letras.value = ''
    }

    else{

      letra = letra.toLowerCase();

      letras_escolhidas.push(letra)

    if(letra == palavra1){
       it1.innerHTML = letra.toUpperCase() 
       it1 = letra
    }
    if(letra == palavra2){
        it2.innerHTML = letra
        it2 = letra
     }
     if(letra == palavra3){
        it3.innerHTML = letra
        it3 = letra
     }
     if(letra == palavra4){
        it4.innerHTML = letra
        it4 = letra
     }
     if(letra == palavra5){
        it5.innerHTML = letra
        it5 = letra
     }
     if(letra == palavra6){
        it6.innerHTML = letra
        it6 = letra
     }
     if(letra == palavra7){
        it7.innerHTML = letra
        it7 = letra
     }
     if(letra == palavra8){
      it8.innerHTML = letra
      it8 = letra
   }
   if(letra == palavra9){
      it9.innerHTML = letra
      it9 = letra
   }
   if(letra == palavra10){
      it10.innerHTML = letra
      it10 = letra
   }

     if(palavra1 == letra){
      certas = certas + 1
     }
     if(palavra2 == letra){
      certas = certas + 1
     }
     if(palavra3 == letra){
      certas = certas + 1
     }
     if(palavra4 == letra){
      certas = certas + 1
     }
     if(palavra5 == letra){
      certas = certas + 1
     }
     if(palavra6 == letra){
      certas = certas + 1
     }
     if(palavra7 == letra){
      certas = certas + 1
     }
     if(palavra8 == letra){
      certas = certas + 1
     }
     if(palavra9 == letra){
      certas = certas + 1
     }
     if(palavra10 == letra){
      certas = certas + 1
     }
     certa.innerHTML = `Acertos: ${certas}`

     if(it1 != letra && it2 != letra && it3 != letra && it4 != letra && it5 != letra && it6 != letra && it7 != letra && it8 != letra && it9 != letra && it10 != letra ){
      erradas = erradas + 1
     }
     erros.innerHTML = `Erros: ${erradas}` 

     escolhidas.innerHTML = `Letras: ${letras_escolhidas}`

     letras.value = ''

     if(erradas >= 8){
      avisos.innerHTML = 'Avisos: Voc?? perdeu!' 
      it1.innerHTML = palavra1.toUpperCase()
      it2.innerHTML = palavra2
      it3.innerHTML = palavra3
      it4.innerHTML = palavra4
      it5.innerHTML = palavra5
      it6.innerHTML = palavra6
      it7.innerHTML = palavra7
      it8.innerHTML = palavra8
      it9.innerHTML = palavra9
      it10.innerHTML = palavra10
     }
     
   }
}

function q(){
   letras.value = 'q'
}
function w(){
   letras.value = 'w'
}
function e(){
   letras.value = 'e'
}
function r(){
   letras.value = 'r'
}
function t(){
   letras.value = 't'
}
function y(){
   letras.value = 'y'
}
function u(){
   letras.value = 'u'
}
function i(){
   letras.value = 'i'
}
function o(){
   letras.value = 'o'
}
function p(){
   letras.value = 'p'
}
function a(){
   letras.value = 'a'
}
function s(){
   letras.value = 's'
}
function d(){
   letras.value = 'd'
}
function f(){
   letras.value = 'f'
}
function g(){
   letras.value = 'g'
}
function h(){
   letras.value = 'h'
}
function j(){
   letras.value = 'j'
}
function k(){
   letras.value = 'k'
}
function l(){
   letras.value = 'l'
}
function ??(){
   letras.value = '??'
}
function z(){
   letras.value = 'z'
}
function x(){
   letras.value = 'x'
}
function c(){
   letras.value = 'c'
}
function v(){
   letras.value = 'v'
}
function b(){
   letras.value = 'b'
}
function n(){
   letras.value = 'n'
}
function m(){
   letras.value = 'm'
}