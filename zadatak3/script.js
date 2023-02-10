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
const slika = document.querySelector(".container");
slika.addEventListener("mouseover", ()=>{
    token = 1;
    console.log("ee");
})

slika.addEventListener("mouseout",()=>{
    token = 0;
})

if(token === 1){
    slika.addEventListener("keydown", ()=>{
        if(event.keyCode == '37'){
            console.log("a");
            ChangeSlide(-1);
        }
        if(event.keyCode == '39'){
            ChangeSlide(1);
        }
    })
}




const dugme_za_povratak = document.querySelector("#pocetna_str");
dugme_za_povratak.addEventListener("click", () => {
    location.href = "/main.html";
});


