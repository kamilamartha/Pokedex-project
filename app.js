window.onload = function(){
    let data = new Date()
    let horas = data.getHours
    if(horas < 18 && horas > 6){
        let claro = document.querySelector("main")
        claro.classList.add("temaclaro")
        claro.classList.remove("temaescuro")}
    else if(horas > 18 && horas < 6){
        let escuro = document.querySelector("main")
        escuro.classList.add("temaescuro")
        escuro.classList.remove("temaclaro")
    
}

}