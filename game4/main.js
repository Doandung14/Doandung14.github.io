let monthEle = document.querySelector('.month');
let yearEle = document.querySelector('.year');
let btnNext = document.querySelector('.btn-next');
let btnPrev = document.querySelector('.btn-prev');
let dateEle = document.querySelector('.date-container');


let currentMonth= new Date().getMonth();
let currentYear = new Date().getFullYear();

console.log(currentMonth, currentYear);

function displayInfo(){
    //HIển thị tên tháng
    var currentMonthName = new Date().toLocaleString("en-us", { month: "long" });
    monthEle.innerText = currentMonthName
    //Hiển thị năm
    yearEle.innerText = currentYear
    //Hiển thị ngày
    renderDate();
    //Hiển thị ngày bắt đầu của tháng

    //active ngày hiện tại
}
//Lấy số ngày của 1 tháng
function getDaysInMonth(){
    return new Date(currentYear, currentMonth +1, 0).getDate();
}
//Lấy ngày bắt đầu của 1 tháng
function getStartDayInMonth(){
    return new Date(currentYear, currentMonth, 1).getDay();
}

//active current day
function activeCurrentDay(day){
    let day1 = new Date().toDateString();
    let day2 = new Date(currentYear, currentMonth, day).toDateString();
    return day1 == day2 ? "active" : ""
}


// Render ngày lên UI
function renderDate(){
    let daysInMonth = getDaysInMonth();
    let startDay = getStartDayInMonth();
    dateEle.innerHTML = '';

    for(let i = 0; i < startDay; i++){
        dateEle.innerHTML += `
        <div class="day"></div>
        `;
    }

    for(let i = 0; i < daysInMonth; i++){
        dateEle.innerHTML += `
        <div class="day">${activeCurrentDay(i+ 1)}${i+1}</div>
        `;
    }
}

btnNext.addEventListener('click', function(){
    if ( currentMonth == 11) {
        currentMonth = 0;
        currentYear++
    } else {
        currentMonth++;
    }
    displayInfo();
});


btnPrev.addEventListener('click', function(){
    if ( currentMonth == 0){
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    displayInfo();
});

window.onload = displayInfo