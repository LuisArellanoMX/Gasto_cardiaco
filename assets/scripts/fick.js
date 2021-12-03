let i_dm_dt = document.getElementById("dm_dt")
let i_CAO2 = document.getElementById("CAO2")
let i_CVO2 = document.getElementById("CVO2")



function calcularFick(){
    let dm_dt = parseFloat(i_dm_dt.value)
    let CA02 = parseFloat(i_CAO2.value)
    let CV02 = parseFloat(i_CVO2.value)

    let fick_res = dm_dt/(CA02-CV02)
    
    console.log(fick_res)
    return fick_res.toFixed(2);
}


