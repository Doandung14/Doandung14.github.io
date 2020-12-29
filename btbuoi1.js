// Bt1,BT2. chương trình tính chu vi, dien tich của hình tròn
function tinhchuvi(r){
   let chuvi = (2*r)*3.14;
    return chuvi
}
function tinhdientich(r){
    let dientich = ((r**2)*3.14);
    return dientich
}
//Bt3. Chương trình quy đổi từ cm sang m
function doi(a){
   let doicmsangm = (a/100);
    return doicmsangm
}

//bt4. Quy đổi từ phút => giờ
function gio(b){
    changemth = (b/60);
    return changemth
}
//bt5. Tính hàm ax + b = c
function ham(a, b, c){
    console.log("Biểu thức là:" + a + "x" + "+" + b + "=" + c);
    let timx = ((c - b)/a);
    return timx
}
//bt6. Quy đổi từ độ C sang độ F
function f(c){
    let csangf = ((c*1.8) + 32);
    return csangf
}

//bt7. TÍnh số BMI
function bmi(weight,height){
    let bmi = (weight/(height**2));
    return bmi
}
//bt8 random 1 số trong khoảng
function rd(a,b){
    let random = Math.floor(Math.random()*(b - a)) + a;
    return random
}
