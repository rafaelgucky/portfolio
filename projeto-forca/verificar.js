
var pal1 = window.document.getElementById('letra1')
var pal2 = window.document.getElementById('letra2')
var pal3 = window.document.getElementById('letra3')
var pal4 = window.document.getElementById('letra4')
var pal5 = window.document.getElementById('letra5')
var pal6 = window.document.getElementById('letra6')
var pal7 = window.document.getElementById('letra7')
var it1 = window.document.getElementById('r1')
var it2 = window.document.getElementById('r2')
var it3 = window.document.getElementById('r3')
var it4 = window.document.getElementById('r4')
var it5 = window.document.getElementById('r5')
var it6 = window.document.getElementById('r6')
var it7 = window.document.getElementById('r7')
var letras = window.document.getElementById('letra')
var erros = window.document.getElementById('erros')
var certa = window.document.getElementById('certas')
var escolhidas = window.document.getElementById('escolhidas')
var avisos = window.document.getElementById('avisos')
var erradas = 0
var certas = 0
var letras_escolhidas = []

function verificar(){

    var palavra1 = String(pal1.value)
    var palavra2 = String(pal2.value)
    var palavra3 = String(pal3.value)
    var palavra4 = String(pal4.value)
    var palavra5 = String(pal5.value)
    var palavra6 = String(pal6.value)
    var palavra7 = String(pal7.value)
    var letra = String(letras.value)
    letra = letra.toLowerCase();

    avisos.innerHTML = 'Avisos: '

    if(letra == ''){
      avisos.innerHTML = 'Avisos: Letra inválida!'
    }

    else if(it1 == letra || it2 == letra || it3 == letra || it4 == letra || it5 == letra || it6 == letra || it7 == letra){
       avisos.innerHTML ='Avisos: Letra já acertada!'
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
     certa.innerHTML = `Acertos: ${certas}`

     if(it1 != letra && it2 != letra && it3 != letra && it4 != letra && it5 != letra && it6 != letra && it7 != letra ){
      erradas = erradas + 1
     }
     erros.innerHTML = `Erros: ${erradas}` 

     escolhidas.innerHTML = `Letras: ${letras_escolhidas}`

     letras.value = ''

   }
}

