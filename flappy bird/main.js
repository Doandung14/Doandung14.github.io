// Truy cập thành phần
var canvas= document.getElementById('gamezone');
var context= canvas.getContext('2d');
var scoreshow=document.getElementById('score');

// Thêm ảnh
var birdimg = new Image()
var backgroundGame = new Image()
var tubeUp = new Image()
var tubeDown = new Image()
birdimg.src="bird.png"
backgroundGame.src="nenchinh.png"
tubeDown.src="ongduoi.png"
tubeUp.src="ongtren.png"

var score=0
var khoangCachHaiOng=140
var khoangCachDenOngDuoi

// Tạo ra 1 object chim với tọa độ x, y là 1 nửa canvas
var bird={
    x: backgroundGame.width/5,
    y: backgroundGame.height/2
}
var tube =[]; //tạo mảng ống để chứa các ông di chuyển
tube[0]={
    x:canvas.width,
    y:0 //KHởi tạo ông đầu tiên bên phải ngoài cùng và y=0
}

// Tạo function chạy trò chơi
function run(){
    //load hình ảnh vào
    context.drawImage(backgroundGame,0,0)
    context.drawImage(birdimg,bird.x,bird.y)

    for(let i =0; i < tube.length; i++){
        khoangCachDenOngDuoi=tubeUp.height+khoangCachHaiOng
        context.drawImage(tubeUp,tube[i].x,tube[i].y)
        // vẽ ông trên theo tọa độ của ống đó
        // ống dưới phụ thuộc ống trên
        context.drawImage(tubeDown,tube[i].x,tube[i].y+khoangCachDenOngDuoi)
        // lấy vị trí ống trên + khoảng cách đến ống dưới vì tý nữa random nó lên xuống
        tube[i].x-=5; // để ống di chuyển

        // lập trình thêm ống khi di chuyển đến giữa
        // nó sẽ tạo thêm 1 ống nữa
        if(tube[i].x ==canvas.width/2){
            tube.push({
                x:canvas.width,
                y:Math.floor(Math.random()*tubeUp.height)-tubeUp.height
            })
        }
        if(tube[i].x ==0)tube.splice(0,1)
        // nếu ống đụng lề trái thì xóa đi để tránh mảng ông đầy làm chậm
        if(tube[i].x ==bird.x)score++;
        //thua
        if(bird.y+birdimg.height==canvas.height  || 
            bird.x+birdimg.width>= tube[i].x && bird.x <= tube[i].x +tubeUp.width 
            && (bird.y <= tube[i].y+tubeUp.height || bird.y + birdimg.height>= tube[i].y + khoangCachDenOngDuoi)
            ){
                return;
            }
        }

    scoreshow.innerHTML="score: "+score;
    //Cho bird rơi xuống
    bird.y+=3
    requestAnimationFrame(run)
}
// thêm function cho nó bay lên khi ấn
document.addEventListener("keydown",function(){
    bird.y -=60;
})
run();


