window.onload = function(){
document.getElementById("botao").onclick = function (){
    calcular()

    let resposta = document.getElementById("resultado")
    resposta.style.color = "white"
    resposta.style.fontSize = "45px"
    
    resposta.innerHTML = (calcular())}

function calcular(){
    let operacoes = document.getElementById("operador").value
let n1 = document.getElementById("numero1").value

let n2 = document.getElementById("numero2").value
    if(operacoes == "soma"){
        n1 = Number(n1)
        n2 = Number(n2)
        return n1 + n2 
    }
    else if(operacoes == "subtração"){
        n1 = Number(n1)
        n2 = Number(n2)
        return n1 - n2
    }
    else if(operacoes == "multiplicação"){
        n1 = Number(n1)
        n2 = Number(n2)
        return n1 * n2
    }
    else if(operacoes ==  "divisão"){
        n1 = Number(n1)
        n2 = Number(n2)
        return n1 / n2
    }
    


}



}