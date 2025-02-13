function setup(){
    document.querySelector("ol").addEventListener("click", function(event){
        event.target.style.color = randomcolor();
    })
}
function randomcolor(){
    list =["red", "blue", "brown", "magenta", "orange", "cian", "light blue", "yellow", "white", "gray", "pink", "maroon", "light gray"];
    return list[ Math.round(Math.random() * list.length) ];
}

setup()