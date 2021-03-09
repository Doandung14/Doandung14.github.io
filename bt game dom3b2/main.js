// <!-- - Bấm vào nút cộng thì số cộng thêm 1

// - Bấm vào nút trừ thì số giảm đi 1

// - Khi số > 0 thì số có màu xanh

// - Khi số < 0 thì số có màu đỏ

// - Khi số = 0 thì có màu #333333 -->


var next = document.querySelector(".nextBtn");
var prev = document.querySelector(".prevBtn")
var num = document.getElementById("counter");
console.log(num.innerHTML);


next.addEventListener("click", function() {
    num.innerHTML++

    if (num.innerHTML > 0 ) {
        num.style.color = "blue";
    } else if (num.innerHTML == 0){
        num.style.color = "#333333"
    } else {
        num.style.color = "red"
    }
})


prev.addEventListener("click", function () {
    num.innerHTML--;
 
    if (num.innerHTML < 0) {
        num.style.color = "red";
    } else if (num.innerHTML == 0){
        num.style.color = "#333333";
    } else {
        num.style.color = "blue";
    }
})
