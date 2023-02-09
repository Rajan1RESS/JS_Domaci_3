function klik_dugmeta(){
   const broj_d = document.getElementById("broj").value;
   return broj_d;
}

const sub_dugme = document.getElementById("sub_dugme");

sub_dugme.addEventListener("click", () => {
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
    rand.className = "hidden-box-element";
    plus.className = "box-element";
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
    box.className = "box-element";
    del.className = "box-element";
    del.innerText = "X";
    skup.appendChild(del);
    skup.appendChild(box);

    del.addEventListener ("click", () => {
        skup.remove();
    });
}

// let b = document.querySelectorAll(".box-element");
// let i=0;
// b.forEach(element => {
//     b.addEventListener("click",() => {
//         console.log(i);
//     });
//     element.setAttribute("id",i);
//     i++;
// })

