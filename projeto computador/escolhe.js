

function verificar(){

    var memorias = window.document.getElementById('memoria')
    var tipoarmazenas = window.document.getElementsByName('tipodisco')
    var tamaarmazenas = window.document.getElementById('capdisco')
    var processad = window.document.getElementById('processador')
    var videos = window.document.getElementById('placavi')
    var memoria = Number(memorias.value)
    var processador = Number(processad.value)
    var video = Number(videos.value)
    var capaarmazena = Number(tamaarmazenas.value)
    var resultado = window.document.getElementById('resultado')
    var imagem = window.document.getElementById('imagem')

    var config = ''

    if(memoria <= 0 || capaarmazena <=0 || processador<= 0 || video <=0){
      window.alert('Números inválidos')
    }else{
        if(processador > 10){
            window.alert('Números inválidos')
        }
        if(video > 10){
            window.alert('Números inválidos')
        }
    if(processador > 5 || memoria > 15  ){
        config = 'O computador que você escolheu é gamer. '
    }
    if(processador < 6 || video < 3  || memoria < 16 )
    config =  'Escritório'
    }
    if(video > 2){
        config = 'O computador que você escolheu é gamer. '
    }
    if(config == 'O computador que você escolheu é gamer. ' && memoria < 16){
        config += ` É aconselhável colocar mais ${16 - memoria} GB de memória. `
    }
    if(video > 5 && processador < 4){
        config += ` O nível do processador que você escolheu é pouco para uma placa de vídeo escolhida. Escolha um processador mais potente. `
    }
    resultado.innerHTML = config
}