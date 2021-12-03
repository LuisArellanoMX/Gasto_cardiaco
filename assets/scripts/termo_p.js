let i_Vi = document.getElementById("Vi")
let i_Tb = document.getElementById("Tb")
let i_Ti = document.getElementById("Ti")
let i_deltaT = document.getElementById("deltaT")


function calcularTermoP(){
    let Vi = parseFloat(i_Vi.value)
    let Tb = parseFloat(i_Tb.value)
    let Ti = parseFloat(i_Ti.value)
    let deltaT = parseFloat(i_deltaT.value)
    let t0 = parseFloat(i_t0.value)
    let k = 0.95
    
    let termo_p_res = ((Tb-Ti)*Vi*k)/(deltaT*t0)
    
    console.log(termo_p_res)
    return termo_p_res.toFixed(2);
}