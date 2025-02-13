function setup(){
    document.querySelector("button").addEventListener("click", (event) =>{
        document.getElementById("diffsection").style.visibility = "hidden";
        startgame(document.querySelector("select").selectedIndex);
    })
}
function startgame(x){
    n = Math.round(Math.random()*(x+1)*5 + 1);
    tries = 3-x;
    while(tries >0){
        let y = prompt("the number is between 1 and "+(x+1)*5+" you have "+tries+" tries left");
        tries--;
        if (n==y){
            alert("you win");
            break;
        }else if (tries !=0){
            alert("try again");
        }else{
            alert("you lost");
        }
    }
    document.getElementById("diffsection").style.visibility = "visible";
}
setup();