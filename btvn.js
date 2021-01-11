// ======== Bài tập trên lớp ========
// Bài 1. Viết function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không

// Ví dụ: checkStringExist("i love you", "you") => true

// Ví dụ: checkStringExist("i love you", "hate") => false
function checkStringExist(m,d){
    if (m.includes(d)){
        return true
    }else
    return false
}   
 

// Bài 2. Viết function rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi.

// Ví dụ: shortenString('Xin chào các bạn') => 'Xin chào...'

// Ví dụ: shortenString('Hello') => 'Hello'
function shortenString(m){
    let short = m.slice(0,9);
    let plusStr = short.concat("...")
    if (m.length < 8){
        return short
    }else     
    return plusStr
}
 

// Bài 3. Viết function có tác dụng biến 1 chuỗi thành chuỗi chỉ viết hoa từ đầu tiên.

// Ví dụ: capitalizeString('chÀo MừnG đẾn với techMaster') => 'Chào Mừng Đến Với Techmaster'
function capitalizeString(m){
    let split = m.toLowerCase().split(" ");
    for ( let i = 0; i < split.length; i++){
        split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
    }
    return split.join(" ")
}
 

// Bài 4. Cho 1 chuỗi và 1 số nguyên n > 1, hãy viết function có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.

// Ví dụ: repeatString('a', 5) => 'a-a-a-a-a'
function repeatString(a, n){
    let newStr = "";
    for (let i = 0; i < n ; i++){
        newStr += a
        for ( let j = 0; j < 1; j++){
            newStr +="-"
        newStr2 = newStr.substring(0,newStr.length - 1);
        }
    }
return newStr2
}
 

// ======== Bài tập về nhà ========
// Bài 5. Viết function với đầu vào là 1 chuỗi string. Trả về chuỗi đảo ngược của chuỗi đó

// Ví dụ: reverseString('Hello') => 'olleH'
function reverseString(str){
    newArr = str.split("");
return (newArr.reverse().join(""))
}
 

// Bài 6. Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường),

// Ví dụ: checkSymmetricString("Race car") => true

// Ví dụ: checkSymmetricString("hello world") => false
function checkSymmetricString(str){

}
 

// Bài 7. Viết một function nhận vào string, trả về số lượng nguyên âm có trong string

// Nguyên âm:  a, o, e, u, i.

// Ví dụ: countNumberVowels("hello") => 2

// Ví dụ: countNumberVowels("hello hien") => 4
function count(str) {
    let na = ("a o e u i").split(" ");
    console.log(na);
    let newStr = str.split("");
    console.log(newStr);
    let count = 0;
    for (let i = 0; i<str.length; i++) {
        for ( let j = 0; j < na.length; j++) {
            if (newStr[i] == na[j]) {
                count++
            }
        }
    }
    return count;
}
count("helllo hien") 

// Bài 8. Viết function kiểm tra xem một chuỗi có kết thúc bằng chuỗi khác hay không.

// Ví dụ : confirmEnding("hello", "lo") => true

// Ví dụ : confirmEnding("hello", "ll") => false
function confirmEnding(str1,str2){
   let newStr = "";
   for ( let i = 0; i < str1.length; i++){
       if (str2 == str1.substring(str1.length - 2))
        return true
   }return false
}  

 

// Bài 9. Viết function lấy ra những chữ cái đầu của từng từ trong chuỗi, các chữ cái đầu được phân tách với nhau bằng dấu cách

// Ví dụ : getFirstLetter("xin chào các bạn") => "x c c b"

// Ví dụ : getFirstLetter("hello world") => "h c"
function getFirstLetter(m){
    let split = m.split(" ");
    for ( let i = 0; i < split.length; i++){
        split[i] = split[i].charAt(0)
    }
    return split.join(" ")
}
 

// Bài 10. Viết function nhập vào 1 chuỗi bất kỳ. Sắp xếp các ký tự trong chuỗi theo chiều tăng dần của bảng chữ cái (có phân biệt chữ hoa, chữ thường). Yêu cầu loại bỏ khoảng trắng trong chuỗi trước khi sắp xếp

// Ví dụ : sortLetters("hello world") => "dehllloorw"

// Ví dụ : sortLetters("HellO WorLd") => "HLOWdellor"
function sortLetters(str){
    newArr = str.split("").sort();
    newStr = newArr.join("");
    return (newStr.trim())
}
 

// Bài 11. Viết function nhập vào 1 chuỗi bất kỳ. Tìm ra ký tự không bị lặp lại trong chuỗi (không tính khoảng trắng)

// Ví dụ : getLetterNoRepeat("abc abce") => "e";

// Ví dụ : getLetterNoRepeat("abce abcdf") => "e,d,f";

// Ví dụ : getLetterNoRepeat("abab") => "";
function getLetterNoRepeat(str){
    let newStr = ("");
    let newArr = str.split("");
    for ( let i = 0; i < str.length; i++){
        if (str[i] == -1)
    }
}