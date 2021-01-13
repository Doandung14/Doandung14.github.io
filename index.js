// Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
function radiant (r){
    let volume = (4*3.14*r**3)/3;
    return volume
}
document.write radiant ()

// Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với 
// tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

function integer(a,b){ 
    let sum = 0;
        if (a < b){
            max = b;
            min = a;
            for( let i = min + 1; i < max;i++){
                sum = sum + i;
            }
        }else (a > b)
        max = a;
         min = b;
         for( let i = min + 1; i < max;i++){
            sum = sum + i;
}return sum
}
// Bài 3: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false. 
function num(a){
    if (a < 2){
        console.log("Đây không phải số nguyên tố")
        return false
    }else {
        for (i = 2 ; i < a; i++){
            if (a % i == 0 ){
                console.log("Đây không là số nguyên tố")
                return false
            }
        }console.log("Đây là số nguyên tố")
        return true
    }

}
// Bài 4: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.
function integer(a){
    let newArr = a.toString().split();
    let sum = 0;
    if (a <= 0 && a < 2 ){
        return false
    }else{
        for (i = 2 ; i <= a; i++){
            if (a % i != 0 && a % 1 == 0 && a % a == 0){
                newArr = newArr.push(i);
            }
        }
        console.log(newArr)
        return newArr
    }    
}

function integer(a){
    for ( i = 0; i < a ; i++ ){
        // let newArr = i.toString().split();
        // console.log(newArr)
        // for ( j = 0 ; j < newArr.length; j++){
        //     if ( newArr[i] %  )
        // }
    }
}

// Bài 5: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
    function integer(a){
        let sum = 0;
        if ( a <= 0){
            return false
        }else{
            for (i = 1; i <= a; i++){
                if (a % i == 0){
                   sum = sum + i;
                }
            }
            return sum
        }
    }
// Bài 6: Cho 1 số nguyên, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên). 
// Ví dụ với tham số 53751 thì kết quả là 13557.
function int (a){
    let arr = a.toString().split("");
    for (let i = 0; i < arr.length ; i++){
        let min = i;
        for (let j = i+1 ; j < arr.length ; j++){
            if (arr[j] < arr[min]){
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }return arr.join("")

}
//Bài 7: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng "giờ:phút:giây", tham số thứ 2 là 1 số x <= 1000.
// Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.
// Ví dụ với t = "9:20:56" và x = 7 thì kết quả là "9:21:3"
function time (t , x){
    
}