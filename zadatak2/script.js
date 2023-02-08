function klik_dugmeta(){
   const broj_d = document.getElementById("broj").value;
   return broj_d;
}

const sub_dugme = document.getElementById("sub_dugme");

sub_dugme.addEventListener("click", () => {
    let vrijednost = klik_dugmeta();
    console.log(vrijednost);
});



