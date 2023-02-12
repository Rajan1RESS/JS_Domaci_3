let fields = document.querySelectorAll('.field');
fields = Array.from(fields);


let player = "X";

let winCombs = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function reset(){
    player = "X";
    fields.forEach(element => {
        element.innerText = "";
    })
    let w = document.querySelector(".winner-text");
    w.parentNode.removeChild(w);
        
}


function GameCheck(){
    winCombs.forEach( pattern => {
        let check = pattern.every(e => fields[e].innerText.trim() == player);
        if (isDraw() == true){
            reset();
        }

        if(check){
            setTimeout(() => {
                if(player == "X")
                    player = "O";
                else if(player == "O")
                    player = "X";   
                alert(player + " je pobijedio");    
            }, 100);
                           
            setTimeout(() => {
                reset();    
            }, 1000);
        }    
    })
}


function isDraw(){
    token = 0;
    fields.forEach(element => {
        if(element.innerText.trim() != "")
            token++;
    })  
    if(token == 9)
        return true;
    else
        return false;    
}

fields.forEach(element => {
    element.addEventListener('click', () =>{
        if(element.innerText.trim() != "") return;
        element.innerText = player;
        GameCheck(element);    
        if(player == "X")
            player = "O";
        else if(player == "O")
            player = "X";    
     })
})


const dugme_za_povratak = document.querySelector("#pocetna_str");

dugme_za_povratak.addEventListener("click", () => {
    location.href = "/index.html";
});