var i = 0;
function setup(){
    document.getElementById("add").addEventListener("click", function(event){
        if(document.getElementById("name").value != "" && document.getElementById("content").value != "" ){
            
            let div = document.createElement("div");
            div.className = "alert alert-danger";
            div.id = "d" + i;

            let label = document.createElement("label");
            label.className = "task";
            label.textContent = document.getElementById("name").value + " : " + document.getElementById("content").value;

            let button = document.createElement("button");
            button.textContent = "🗑";
            button.value = i;
            button.addEventListener("click", function(){
                div.remove();
            });

            div.appendChild(label);
            div.appendChild(button);
            document.getElementById("spawn").appendChild(div);

            i++;
        }
    });
}

setup();