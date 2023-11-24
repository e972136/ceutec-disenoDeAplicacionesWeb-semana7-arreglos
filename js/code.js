let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let btnGuadrar = document.getElementById("btnGuadrar");
let btnMostrar = document.getElementById("btnMostrar");
let listaInfo = document.getElementById("listaInfo");
const datos=[];
console.log("x");
function acumular(){
//const person = {firstName:"John", lastName:"Doe", age:46};
    const x = {nombre:nombre.value,edad:edad.value};
    datos.push(x);
}

function mostrar(){
    console.log("elementos");
    let html = "";
    /*    html = '<li class="list-group-item">'+operador.value + '\t' +  msg + '</li>';*/
    for(let i=0;i<datos.length;i++){
        html+= '<li class="list-group-item">'+datos[i].nombre + '\t' +  datos[i].edad + '</li>';        
    }   
    listaInfo.innerHTML = html;    
}


btnGuadrar.addEventListener("click",acumular);
btnMostrar.addEventListener("click",mostrar);