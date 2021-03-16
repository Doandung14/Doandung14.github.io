//Truy cập các thành phần
var name1 = document.querySelector('#name-0');
var name2 = document.querySelector('#name-1');
var score1 = document.querySelector('#score-0');
var score2 = document.querySelector('#score-1');
var currentScore1 = document.querySelector('#current-0');
var currentScore2 = document.querySelector('#current-1');
var img1 = document.querySelector('#dice-1');
var img2 = document.querySelector('#dice-2');
var btnRoll = document.querySelector('.btn-roll');
var btnSave = document.querySelector('.btn-hold');
var finalScore = document.getElementsByClassName('final-score').value;
var panel1 = document.querySelector('.player-0-panel');
var panel2 = document.querySelector('.player-1-panel');

let activePlayer = 0;

//function reset tên điểm số
function init() {
    //Đổi tên người chơi 
    name1.innerText = "Player 1";
    name2.innerText = 'Player 2';

    //Reset điểm số về 0
    score1.innerText = 0;
    score2.innerText = 0;
    currentScore1.innerText = 0;
    currentScore2.innerText = 0;

    //Ẩn ảnh xúc sắc
    img1.style.display = 'none';
    img2.style.display = 'none';
}

//Sự kiện nút roll
btnRoll.addEventListener("click",function (){
    //Random 2 số từ 1 - 6
    let number1 = Math.floor(Math.random() * 6) + 1;
    let number2 = Math.floor(Math.random() * 6) + 1;

    //Cập nhật ảnh tương ứng với số random ra
    img1.src = `./img/dice-${number1}.png`;
    img2.src = `./img/dice-${number2}.png`;
    img1.style.display = 'block';
    img2.style.display = 'block';

    //So sánh 2 number nếu 1 số = 1 thì chuyển người chơi còn lại khác 1 thì cộng dồn
    if (number2 != 1 && number1 != 1){
        var scoreS = document.getElementById(`current-${activePlayer}`).innerText = number1 + number2 + Number(document.getElementById(`current-${activePlayer}`).innerText)
    } else {
        if (activePlayer == 0){
            activePlayer = 1;
            
        } else {
            activePlayer = 0;
            
        }
        currentScore1.innerText = 0;
        currentScore2.innerText = 0;

        panel1.classList.toggle('active');
        panel2.classList.toggle('active');

    }


// Sự kiện lưu điểm
btnSave.addEventListener("click",function() {
    if (activePlayer == 0){
        score1.innerText = `${scoreS}`;
    } else {
        score2.innerText = `${scoreS}`;
    }
    if (score1 >= finalScore || score2 >= finalScore){
        alert('Người chơi' + `${activePlayer}` + 'win');
    }
})
});

window.onload = init;
