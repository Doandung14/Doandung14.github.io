// Truy cập vào các thành phần trong game
var wordEl = document.getElementById('word');
var timeEl = document.getElementById('time');
var inputEl = document.getElementById('text');
var scoreEl = document.getElementById('score');
var btnEl = document.querySelector("#btn-start-game");
var containerEl = document.querySelector('.container-hide');
var startEl = document.querySelector('#start-game');
var endEl = document.querySelector('#end-game-container');
var btnReloadEl = document.querySelector('#btn-reload-game');
var levelEl = document.querySelector('#level');
var endScore = document.querySelector('.score');
// Khai báo biến
const words = [
    'ahihi',
    'hichic',
    'cuccuc',
    'ihaha',
    'hehe',
    'huhu',
];

let word;
let time = 20;


let interval;
let score = 0;
// Xử lí gõ phím
inputEl.addEventListener('input', function(e) {
    let value = e.target.value
    
    let characters1 = document.querySelectorAll('#word span');
    

    if (!word.startsWith(value) == true) {
        wordEl.style.backgroundColor = "red"
        // [...characters1].map((ele) => (ele.style.color= 'white'));
        for (let i = 0; i < [...characters1].length; i++){
            characters1[i].style.color = "white"
        }
    } else {
        wordEl.style.backgroundColor = "transparent"
        for (let i = 0; i < [...value].length; i++) {
            characters1[i].style.color = 'green'
            
        }
    }

    if(value == word){
        // cập nhật điểm
        updateScore();
        //random ra từ mới
        addWordToDom();

        e.target.value = ''
    }
});

// Cập nhật điểm
function updateScore() {
    score++;
    scoreEl.innerText = score;
    endScore.innerText = score;
}

// Bắt đầu vào game
function randomWord() {
    let index = Math.floor(Math.random() * words.length)
    return words[index];
}

function addWordToDom() {
    word = randomWord();
    // wordEl.innerText = word;
    wordEl.innerHTML = [...word].map(char => `<span>${char}</span>`).join('');
}
function updateTime(){
        
    time--
    timeEl.innerText = `${time}s`;
    
    if(time <= 5) {
        timeEl.style.color = "red";
    } else {
        timeEl.style.color = 'white';
    }

    if(time == 0) {
        clearInterval(interval)
        containerEl.style.display = "none";
        endEl.style.display = "flex";
        scoreEl.innerText = `${score}`
        
    } 
}





// Màn bắt đầu game
btnEl.addEventListener("click", function() {
    containerEl.style.display = "flex";
    startEl.style.display = "none";
    interval = setInterval(updateTime, 1000);
    timeEl.innerText = `${time}s`
    var value = levelEl.value;
        if (value === 'easy'){
             time = 20;
        } else if (value === 'medium'){
             time = 15;
        } else {
             time = 10;
        }     
      
})


// Màn end game

btnReloadEl.addEventListener("click", function() {
    endEl.style.display = "none";
    startEl.style.display = "flex";
    scoreEl.innerHTML = 0;
})

containerEl.style.display = 'none';

endEl.style.display = "none"

window.onload = addWordToDom;