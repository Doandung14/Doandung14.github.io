// Bài 1. Viết function kiểm tra 1 giá trị có nằm trong mảng hay không
// Ví dụ: checkElementExist([1,2,3,4], 4) => true
// Ví dụ: checkElementExist([1,2,3,4], 5) => false


let checkElementExist = function (arr,num){
    for (i=0 ; i < arr.length ; i++){
        if (num == arr[i])
        return true
    }
    return false
}


// Bài 2. Viết function tìm ra số lớn thứ nhì trong mảng các số. 
// Ví dụ: max2Numbers([2, 1, 3, 4]) => 3


function max2Numbers(arr){
    let max = arr[0];
    for(let i=1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }
        
    }
    arr.splice(arr.indexOf(max),1);
    let max2 = arr[0];
    for(let i=1; i < arr.length; i++){
        if (arr[i] > max2 && max2 < max){
            max2 = arr[i]
        }  
    }
    console.log(max2)

}


// Bài 3. Viết function để lấy một phần tử ngẫu nhiên từ một mảng
// Ví dụ: randomElement([3, 7, 9, 11]) => 3
// Ví dụ: randomElement([3, 7, 9, 11]) => 9


function rd(arr) {
    let random = [Math.floor(Math.random() * arr.length)];
    return arr[random];
  }
// Bài 4. Cho 1 mảng các chuỗi. Viết function lọc ra các phần tử có độ dài lớn nhất. 
// Ví dụ: findMaxLengthElement(["aba", "aa", "ad", "c", "vcd"] => ["aba", "vcd"])

function findMaxLengthElement(arr){
    let max = 0;
    let newArr = [];
    for ( i = 0 ; i < arr.length ; i++){
        if (arr[i].length >= max){
            max = arr[i].length;
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
// Bài 5. Viết function để lấy một mảng bao gồm các phần tử xuất hiện trong cả hai mảng
// Ví dụ: similarity([1, 2, 3], [1, 2, 4]) => [1,2]

function similarity(arr1,arr2){
    let newArr = [];
    for (i = 0 ; i < arr1.length ; i++){
        if (arr1.indexOf(arr2[i]) != -1 && newArr.indexOf(arr1[i]) == -1 ) // Dùng indexOf để kiểm tra vị trí của mảng arr2 có tồn tại trong arr1 k. Nếu tồn tại thì giá trị phải !=1 và trong newArr nó k tồn tại ( là == -1) từ đó push vào newArr
        newArr.push(arr1[i]);
    } 
    for (i = 0 ; i < arr2.length ; i++){
        if (arr2.indexOf(arr1[i]) != -1 && newArr.indexOf(arr2[i]) == -1)// Dùng indexOf để kiểm tra vị trí của mảng arr1 có tồn tại trong arr2 k. Nếu tồn tại thì giá trị phải !=1
        newArr.push(arr2[i]);
    }
    return newArr
}


// Bài 6. Viết function remove những phần tử bị trùng nhau trong mảng
// Ví dụ: removeDuplicates([1,2,5,2,6,2,5]) => [1,2,5,6]


function removeDuplicates(arr){
    let newArr = [];
    for (i = 0 ; i < arr.length; i++){
        if ( newArr.indexOf(arr[i]) == -1)
        newArr.push(arr[i])
    }
    return newArr
}

// Bài 7. Viết function để tạo mã màu HEX ngẫu nhiên.
// Ví dụ: randomHexCode() => #2ecc71
// Ví dụ: randomHexCode() => #8e44ad

function randomHex(){
    let hexSymbol = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    return hexSymbol[Math.floor(Math.random() *hexSymbol.length)];}

    function randomHexCode(){
        hexValue = ["#"];
        for ( let i = 0 ; i < 6 ; i++){
            hexValue.push(randomHex());
        }
        return hexValue.join("")
    }

// Bài 8. Viết function để tạo mã màu RGB ngẫu nhiên.
// Ví dụ: randomRgbCode() => rgb(46, 204, 113)
// Ví dụ: randomRgbCode() => rgb(142, 68, 173)

function randomRgb (){
    let r = Math.floor(Math.random() * (255 - 0 + 1) + 0); //This JavaScript function always returns a random number between min and max (both included)
    let g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let rgb = "rgb" + "(" +  r + ","+ g + "," + b + ")";
    return rgb
}