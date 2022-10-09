
let edad = document.querySelector("#edad")
let btn = document.querySelector(".btn-v")
btn.addEventListener("click",puedeconducir)

function puedeconducir(edad){
    if(edad > 17){
        alert("puede conducir")
    }else{
        console.log("No puede conducir")
    }
}
puedeconducir(10)
puedeconducir(18)
puedeconducir(25)
