// Bài 1.Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng tăng dần hay không
// Ví dụ: checkAscArr(1,2,3,4) => true
// checkAscArr(1,2,4,3) => false
// Bài 2.Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng giảm dần hay không
// Bài 3.Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng số chẵn tăng dần hay không
// Bài 4.Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng số lẻ giảm dần hay không
// Bài 5.Viết function truyền vào 1 mảng. Tìm số lớn nhất trong mảng
// Ví dụ : findMaxNumberArr([1,2,3,4]) => 4
// Bài 6.Viết function truyền vào 1 mảng. Tìm số nhỏ nhất trong mảng
// Ví dụ : findMinNumberArr([1,2,3,4]) => 1
// Bài 7.Viết function truyền vào 1 mảng, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
// Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]
// Bài 8.Viết function truyền vào 1 chuỗi bất kỳ, có tác dụng sao chép đó chuỗi lên 10 lần
// Ví dụ: repeatString('a') => Kết quả trả về là 'aaaaaaaaaa'
// Bài 9.Viết function truyền vào 1 chuỗi bất kỳ, có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang
// Ví dụ: repeatString('a') => Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'

//Bt1
function isIncrease(arr){
    for(let i=0 ; i < arr.length ; i++){
        if (arr[i] >= arr[i+1]){
            return "Chuỗi không tăng dần"
        }
    }
   
    return "Chuỗi tăng dần"
}

//Bt2
function isDecrease(arr){
    for(let i=0 ; i < arr.length ; i++){
        if (arr[i] <= arr[i+1]){
            return "Chuỗi không giảm dần"
        }
    }
    
    return "Chuỗi giảm dần"
}

//Bt3
function isIncrease1(arr){
    for(let i=0; i < arr.length ; i++){
        if (arr[i] % 2 !=0 || arr[i] >= arr[i+1]){
            return "Không phải chuỗi chẵn tăng dần"
        }
    }
    
    return "Chuỗi chẵn tăng dần"
}

//bt4
function isDecrease1(arr){
    for(let i=0; i < arr.length; i++){
        if (arr[i] <= arr[i+1] || arr[i] %2==0){
            return "Không phải chuỗi lẻ giảm dần"
        }
    }
    
    return "CHuỗi lẻ giảm dần"
}

//bt5
function findMax(arr){
    let max = arr[0];
    for(let i=1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }
    }
    console.log(max);
}

//bt6
function findMin(arr){
    let min = arr[0];
    for(let i=1; i< arr.length;i++){
        if (arr[i] < min){
            min = arr[i]
        }
    }
    console.log(min);
}

//bt7
function Arr(arr){
    let newArr = [];
    for(let i=0 ; i < arr.length;i++){
        newArr.push(arr[i]%2);
    }
    return newArr
}

//bt8
function oldStr(str){
    let newStr ="";
    for (let i=0 ; i<10 ; i++){
        newStr += str 
}         
return newStr
}

//bt9
function oldStr(str){
    let newStr ="";
    for (let i=0 ; i<10 ; i++){
        newStr += str 
        for (let j=0 ; j < 1; j++){
            newStr += "-"
        }
}         
return newStr
}
