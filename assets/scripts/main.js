let r_fick = document.getElementById("resultado_nico");
let r_termo_c = document.getElementById("resultado_termo_c")
let r_termo_p = document.getElementById("resultado_termo_p")


let boton = document.getElementById("boton_calcular");

boton.addEventListener("click",run)

function run(){
    r_fick.innerHTML = calcularFick();
    r_termo_c.innerHTML = calcularTermoC()
    r_termo_p.innerHTML = calcularTermoP()
}



