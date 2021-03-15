// Yêu cầu

// - Render số box = số lượng màu ra ngoài màn hình bằng js (5 box)

// - box được tạo bởi thẻ div, có class="box", background tương ứng với từng mã màu

// - Cập nhật số lượng total box trong thẻ <span> có class "points"

// - Khi bấm vào box bất kỳ thì box đó biến mất, đồng thời số lượng total box giảm đi 1

// - Khi click vào nút "more box" thì số lượng box tăng lên 5 (tương ứng với 5 màu trong mảng colors), đồng thời số lượng total box cũng tăng lên 5
let data = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];

var boxesEl = document.querySelector(".boxes");
var points = document.querySelector(".points");
var btn = document.querySelector("#btn");
var colors = [...data]; //để k ảnh hưởng data ban đầu, cũng có thể dùng colors = data.slice(), đây là cách sao chép dữ liệu

function renderBox(arr) {
  boxesEl.innerHTML = "";
  if (arr.length == 0) {
    boxesEl.innerHTML = "Không có box nào ";
    return
  }
  for(let i = 0; i < arr.length; i++){
      var b = arr[i]; //Gọi để viết hàm dưới cho ngắn
      boxesEl.innerHTML += `
                <div class="box" style="background-color:${b}" onclick="removeBox(${i})" ></div>
                `
  }
  //cách 2:
            // for (let i = 0; i < arr.length; i++) {
            //     boxesEl.insertAdjacentHTML('afterbegin',
            //         `<div class="box" style="background-color:${arr[i]}" onclick="removeBox(${i})"></div>`
            //     )
            // }
}

//function update số lượng box thực tế
function updateTotalBox() {
    points.innerText = colors.length
}
 //function để renderBox: thực hiện render box và update số lượng box
 function update() {
    renderBox(colors);   
    updateTotalBox();
}
//khi click vào nút more boxes, sẽ thực thi function update, đồng thời thay đổi phần tử của mảng colors
btn.addEventListener('click', function () {
    colors = [...colors, ...data];           //cộng hai mảng
    //cách 2: colors = colors.concat(data)
    update()
})
//hàm function để remove box, lọc ra phần tử có index khác index đang click vào
function removeBox(index) {
    colors = colors.filter((color, i) => i != index);   //lọc ra các box k gồm box được click vào
    update()     //update lại render box vs số lượng box, lưu ý luôn để số lượng box về 0: innerHTML='' trước khi render lại
}

//function removebox luôn được thực thi vì update luôn thực thi khi vô trang web hoặc reload trang web
window.onload = update       //không cần đóng mở ngoặc



