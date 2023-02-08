function klik_dugmeta(){
   const broj_d = document.getElementById("broj").value;
   return broj_d;
}

const sub_dugme = document.getElementById("sub_dugme");

sub_dugme.addEventListener("click", () => {
    let vrijednost = klik_dugmeta();
    napraviPolja(vrijednost);
    // box.addEventListener("input",()=>{});
});

function napraviPolja(broj_kockica){
    let board = document.getElementById("board");
    for(let i=0;i<broj_kockica;i++){
        let box = document.createElement("div");
       
        // let node = document.createTextNode ('Hello, I am Arun');
        // box.appendChild("p")
        box.className = "box-element";
        board.appendChild(box);
    }
}

