var li8 = document.createElement("li");
li8.textContent = "Item 8";
var li9 = document.createElement("li");
li9.textContent = "Item 9";
var li10 = document.createElement("li");
li10.textContent = "Item 10";

var getUl = document.querySelector("ul");
getUl.appendChild(li8);
getUl.appendChild(li9);
getUl.appendChild(li10);

var li1 = document.querySelector("li:nth-child(1)");
li1.style.color = "red";

var li3 = document.querySelector("li:nth-child(3)");
li3.style.backgroundColor = "blue";


var li4 = document.querySelector("li:nth-child(4)");
li4.remove();

var newli = document.createElement("li");
li3.after(newli);
newli.textContent = "item 4.1"

var add = document.createElement("button");
var input = document.createElement("input");

add.textContent = "add";
getUl.after(add);

getUl.after(input);

// Nut add
add.addEventListener("click", function() {
   if(input.value == ""){
       alert("Nhập gì đê")
   } else {
    getUl.innerHTML += `<li>${input.value}</li>`
    input.value = ""
   }
   
})

//nut remove
var remove = document.createElement("button");
remove.innerText = "remove";
add.after(remove);
remove.addEventListener("click", function() {
    let choose = document.querySelector("li:last-child")
    choose.remove()
})


//nut hide
var hide = document.createElement("button");
hide.innerText = "Hide";
remove.after(hide);
hide.addEventListener("click", function() {
    if ( getUl.style.display == "block"){
        getUl.style.display = "none"
        hide.innerText = "show"
    } else {
        getUl.style.display = "block";
        hide.innerText = "Hide"
        
    }
})


