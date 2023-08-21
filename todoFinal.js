const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-cont");

let btn = document.querySelector("button");

btn.addEventListener("click",addTask);

function addTask(){
    if(inputBox.value === ''){
        alert("please enter your task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCont.appendChild(li);
        let cross = document.createElement("span");
        cross.innerHTML = "\u00d7";
        li.appendChild(cross);
    }
    inputBox.value = '';
}

listCont.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
},false);