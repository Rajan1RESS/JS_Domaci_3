const dugme1 = document.querySelector("#zad1");
const dugme2 = document.querySelector("#zad2");
const dugme3 = document.querySelector("#zad3");

dugme1.addEventListener("click", () => {
    window.location = "../zadatak1/prvi.html";
});

dugme2.addEventListener("click", () => {
    window.location = "../zadatak2/drugi.html";
});

dugme3.addEventListener("click", () => {
    location.href = "../zadatak3/treci.html";
})

