let slideIndex = 1;
showSlide(slideIndex);


function trenutni(n){
    showSlides(slideIndex = n);
}

function ChangeSlide(n){
    showSlide(slideIndex += n);
}

function showSlide(n){
    let i;
    let slides = document.querySelectorAll(".slide");
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex =slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }  
    
    slides[slideIndex - 1].style.display = "block";
}

const prev = document.querySelector(".prev");
prev.addEventListener("click", () => {
    ChangeSlide(-1);    
})

const next = document.querySelector(".next");
next.addEventListener("click", () => {
    ChangeSlide(1);    
})


let rep;
let token;
let slika = document.querySelector(".container");
slika.addEventListener("mouseover", ()=>{
    token = 1;
})

slika.addEventListener("mouseout",()=>{
    token = 0;
})

window.addEventListener("keydown", (event)=>{
    if(token===1){
        if(event.keyCode === 37){
            ChangeSlide(-1);
        }
        if(event.keyCode === 39){
            ChangeSlide(1);
        }
    }   
})

let klik_token = 1;
let c = document.querySelectorAll(".slide")
c.forEach(element => {
    element.addEventListener("click",() => {  
        if(klik_token === 1){
            document.body.style.paddingTop = "0px";
            slika.style.height = "90vh";
            slika.style.width = "90vw";
            klik_token = 0;
        }
        else if(klik_token === 0){
            document.body.style.paddingTop = "20vh";
            slika.style.height = "30vh";
            slika.style.width = "30vw";
            klik_token = 1;
        }
    });
})


const dugme_za_povratak = document.querySelector("#pocetna_str");
dugme_za_povratak.addEventListener("click", () => {
    location.href = "index.html";
});


