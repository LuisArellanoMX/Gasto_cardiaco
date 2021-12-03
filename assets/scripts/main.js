let r_fick = document.getElementById("resultado_nico")
let r_termo_c = document.getElementById("resultado_termo_c")
let r_termo_p = document.getElementById("resultado_termo_p")


let boton = document.getElementById("boton_calcular")

boton.addEventListener("click",run)

function run(){
    cargarResultados()
    setTimeout(function(){
        r_fick.innerHTML = calcularFick();
        r_termo_c.innerHTML = calcularTermoC()
        r_termo_p.innerHTML = calcularTermoP()
    }, 15000)
    
    mostrarAnimaciones()
}

function cargarResultados(){
    r_fick.innerHTML = "Cargando..."
    r_termo_c.innerHTML = "Cargando..."
    r_termo_p.innerHTML = "Cargando..."
}



function mostrarAnimaciones(){
    document.querySelector("#anim01").style.display = 'inline-block'
    document.querySelector("#anim02").style.display = 'inline-block'
    document.querySelector("#anim03").style.display = 'inline-block'
    
    document.getElementById("latidos").play()
    document.getElementById("monitor").play()
    setTimeout(function(){
        ocultarAnimaciones()
    }, 15500)
}

function ocultarAnimaciones(){
    document.querySelector("#anim01").style.display = 'none'
    document.querySelector("#anim02").style.display = 'none'
    document.querySelector("#anim03").style.display = 'none'
}


