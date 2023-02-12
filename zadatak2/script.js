function klik_dugmeta(){
   const broj_d = document.getElementById("broj").value;
   return broj_d;
}

const sub_dugme = document.getElementById("sub_dugme");

sub_dugme.addEventListener("click", () => {
    let t = document.querySelector(".final-text");
    if(t!==null)
        t.remove();

    let board = document.getElementById("board");
    while(board.firstChild!=null){
        board.firstChild.remove();
    }
    let vrijednost = klik_dugmeta();
    napraviPolja(vrijednost);
});

function napraviPolja(broj_kockica){
    let board = document.getElementById("board");
    for(let i=0;i<broj_kockica;i++){
        let skup = document.createElement("div");
        board.appendChild(skup);
        one_pair_setter(skup);  //za dodavanje kockica
    }
    let plus_skup = document.createElement("div");
    board.appendChild(plus_skup);
    let rand = document.createElement("div");
    let plus = document.createElement("button");
    rand.classList.add("hidden-box-element");
    plus.classList.add("box-element");
    plus.innerText = "+";
    plus_skup.appendChild(rand);
    plus_skup.appendChild(plus);

    plus.addEventListener("click", () => {
        let skup = document.createElement("div");
        plus_skup.parentNode.insertBefore(skup,plus_skup);
        one_pair_setter(skup);
    });    
}

function one_pair_setter(skup){
    let del = document.createElement("button");
    let box = document.createElement("input");
    box.maxLength = 1;
    box.classList.add("box-element");
    box.classList.add("value-box");
    del.classList.add("box-element");
    del.innerText = "X";
    skup.appendChild(del);
    skup.appendChild(box);

    box.addEventListener("change", () => {
        isCharValid(box.value);
    });

    del.addEventListener ("click", () => {
        skup.remove();
    });
}


function checkLetters(){
    let t = document.querySelector(".final-text");
    if(t!==null)
        t.remove();

    let allBoxes = document.querySelectorAll(".value-box");
    let allValues = [];
    let word = "";
    for(let i=0;i<allBoxes.length;i++){
        allValues[i] = allBoxes[i].value;
        console.log(allValues[i]);
        word += allValues[i];
    }
    
    console.log(word);
    if(isPalindrom(word)===true){
        let board = document.getElementById("board");
        let tekst = document.createElement('p');
        tekst.classList.add("final-text");
        tekst.textContent = "Palindrom";
        board.after(tekst);
    }
    else{
        let board = document.getElementById("board");
        let tekst = document.createElement('p');
        tekst.classList.add("final-text");
        tekst.textContent = "Nije palindrom";
        board.after(tekst);
    }
}

function isPalindrom(str){
    let len = str.length;
    let temp = str.toUpperCase();
    let m = Math.floor(len/2);

    for(let i=0;i<m;i++){
        if(temp[i] !== temp[len-i-1]){
            return false;
        }
    }
    return true;
}

const valid_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz";

function isCharValid(character){
    if(!valid_letters.includes(character)){
        alert("Znak " + character + " nije dozvoljen");
    }
}

const provjera = document.getElementById("check");
provjera.addEventListener("click", () => {
    checkLetters();
});

const dugme_za_povratak = document.querySelector("#pocetna_str");
dugme_za_povratak.addEventListener("click", () => {
    location.href = "/index.html";
});