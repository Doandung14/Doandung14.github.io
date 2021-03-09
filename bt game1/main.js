var newpara = document.createElement("p");
newpara.textContent = "abcdefgh";
newpara.setAttribute("id","text");
console.log(newpara);
document.body.appendChild(newpara);
newpara.style.color = "#777"
newpara.style.fontSize = "2rem";
newpara.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."
var liColor = document.querySelectorAll("li");
for ( let i = 0 ; i < liColor.length ; i++) {
liColor[i].style.color = "blue"
}
var newpara2 = document.createElement("p");
newpara2.textContent = "hic hic"
var btn = document.createElement("button");
btn.setAttribute("onclick","toggle1()")
btn.innerText = "Try It";

document.body.appendChild(newpara2);
document.body.appendChild(btn);

function toggle1(){
    if (newpara2.style.display === "none") {
        newpara2.style.display = "block";
    } else {
        newpara2.style.display = "none";
    }
}

var bg = document.getElementById("texture-selector");
var showBg = document.getElementById("background")
bg.setAttribute("onchange","bg1()");
function bg1() {
    var bg2 = bg.value;
    console.log(bg2)
showBg.style.backgroundImage = "url(" + bg2 + ")"
//   console.log(showBg);
}







