window.onload = function(){
    document.getElementById("botao").onclick = function(){
        let nome1 = document.getElementById("nome").value
        let idade1 = document.getElementById("idade").value
        let comida1 = document.getElementById("comida").value
      
        let resultado = document.getElementById("sobrevoce")
        resultado.innerHTML = (`Olá ${nome1.toUpperCase()}, você tem ${idade1} anos? Que legal!
        Eu amo comer ${comida1} também!`)
    
}}