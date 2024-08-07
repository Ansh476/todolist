let inp = document.querySelector("input");
let btn = document.querySelector("button");
let li = document.querySelector("li");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let task = document.createElement("li");
    task.innerText = inp.value;
    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    task.appendChild(delbtn);//can also use append
    ul.appendChild(task);
    console.log("task added");
    inp.value="";
});

// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         let del = this.parentElement;
//         del.remove();
//         console.log("task deleted");
//     });
// }
// this method is not efficient as it does not deletes the newly added tasks


ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("task deleted");
    }
});
