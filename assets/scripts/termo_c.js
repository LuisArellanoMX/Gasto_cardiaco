let i_t0 = document.getElementById("t0")

function calcularTermoC(){
    let t0 = parseFloat(i_t0.value)
    let termo_c_res = (0.09/(-3*0.0007))*(Math.exp(-0.0007*t0*t0*t0)-1)
    
    console.log(termo_c_res)
    return termo_c_res.toFixed(2);
}
