let animado = document.querySelectorAll(".animado")

let span1 = document.getElementById("span")
let contspan = 0;

let span2 = document.getElementById("span2")
let contspan2 = 0;

let span3 = document.getElementById("span3")
let contspan3 = 0;

let span4 = document.getElementById("span4")
let contspan4 = 0; 

const checkbtn = document.querySelector('.checkbtn')
const enlaces = document.querySelector('.navs')
const zapatillas = document.querySelector('#zapatillas1')
const footer = document.querySelector('#footer1')

function mostrarScroll(){

    let scrollTop=document.documentElement.scrollTop;
   
  

    for (let i = 0; i < animado.length; i++){

        let alturaAnimado = animado[i].offsetTop;


        if(alturaAnimado-600<scrollTop){

            animado[i].style.opacity = 1;

            animado[i].classList.add("mostrarArriba")
            }
    }
}

function cambiar(){

    if (contspan2 === 1 ||contspan3===1 ||contspan4===1) {

        span2.style.backgroundColor='#fff'
        span3.style.backgroundColor='#fff'
        span4.style.backgroundColor='#fff'
    }
  
    span1.style.backgroundColor = '#BF4343';

    contspan = 1;
}

function cambiar2(){
    
    if (contspan === 1 ||contspan3===1 ||contspan4===1) {
        
        span1.style.backgroundColor='#fff'
        span3.style.backgroundColor='#fff'
        span4.style.backgroundColor='#fff'
    }
    
    
    span2.style.backgroundColor = '#BF4343';
    
    contspan2 = 1
}

function cambiar3(){

    if (contspan2 === 1 ||contspan===1 ||contspan4===1) {
        
        span1.style.backgroundColor='#fff'
        span2.style.backgroundColor='#fff'
        span4.style.backgroundColor='#fff'
    }
    
    
    span3.style.backgroundColor = '#BF4343';
    contspan3 = 1
}

function cambiar4(){
    
    if (contspan === 1 ||contspan2===1 ||contspan3===1) {

        span1.style.backgroundColor='#fff'
        span2.style.backgroundColor='#fff'
        span3.style.backgroundColor='#fff'
    }
    span4.style.backgroundColor = '#BF4343';
    contspan4 = 1
}




zapatillas.addEventListener('click',()=>{
    enlaces.classList.toggle("nav-menu_visible")
    document.getElementsByTagName("html")[0].style.overflow = "auto";
})

footer.addEventListener('click',()=>{
    enlaces.classList.toggle("nav-menu_visible")
    document.getElementsByTagName("html")[0].style.overflow = "auto";
})

checkbtn.addEventListener('click',()=>{
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
    let visible = enlaces.classList.toggle("nav-menu_visible")
    if (visible===false) {
        document.getElementsByTagName("html")[0].style.overflow = "auto";
    }
    


})

window.addEventListener('scroll', mostrarScroll);

span1.addEventListener("click", cambiar)

span2.addEventListener("click", cambiar2)

span3.addEventListener("click", cambiar3)

span4.addEventListener("click", cambiar4)





   
 

