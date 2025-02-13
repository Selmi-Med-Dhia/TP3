function setup(){
    document.getElementById("colorselect").addEventListener("blur", function(event){
        document.querySelector("textArea").style.color = document.getElementById("colorselect").value;
    });
    document.getElementById("sizeselect").addEventListener("change", function(event){
        document.querySelector("textArea").style.fontSize = document.getElementById("sizeselect").value+"px";
    });
    document.getElementById("fontselect").addEventListener("change", function(event){
        document.querySelector("textArea").style.fontFamily = document.getElementById("fontselect").value;
    })
}
setup();