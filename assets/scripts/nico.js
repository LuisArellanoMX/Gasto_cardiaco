let i_VCO = document.getElementById("VCO")
let i_PETCO = document.getElementById("PETCO")


function calcularNico(){
    let VCO = parseFloat(i_VCO.value)
    let PETCO = parseFloat(i_PETCO.value)
    let S = 0.173
    
    let nico_res = VCO/(S*PETCO)
    
    console.log(nico_res)
    return nico_res.toFixed(2);
}