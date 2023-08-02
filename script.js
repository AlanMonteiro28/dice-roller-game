
function rollPlayer(){
    const p1 = Math.floor(Math.random() * 6) + 1;
    const imgDice = `images/dice${p1}.png`;
    document.querySelector(".img1").src= imgDice;

    return p1;
}

function rollCom(){
    const p2 = Math.floor(Math.random() * 6) + 1;
    const imgDice = `images/dice${p2}.png`;
    document.querySelector(".img2").src= imgDice;

    return p2;
}


function rollDice(){
    const p1 = rollPlayer();
    const p2 = rollCom();

    if (p1 > p2){
        document.querySelector("h1").textContent = "Player 1 Win!";

    } else if(p1 == p2){
        document.querySelector("h1").textContent = "Draw! Roll again!";
    } else{
        document.querySelector("h1").textContent = "Player 2 Win!";
    }
}

const refresh = document.querySelector("button");
        refresh.addEventListener("click", rollDice);
