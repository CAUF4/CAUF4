let [poo] = document.getElementsByClassName("poo");
let [hungry] = document.getElementsByClassName("hungry");
let [energy] = document.getElementsByClassName("energy");
let [coding] = document.getElementsByClassName("coding");
let [love] = document.getElementsByClassName("love");
let [wash] = document.getElementsByClassName("wash");

let energy_style = document.querySelector(".energy")
energy_style.style.setProperty("--c", "red")


let delay = () => {
    energy.setAttribute("value", "10")
    poo.setAttribute("value",)
    energy.s
}

window.onload = function()
{
    setTimeout(delay, 3000)
    
}
