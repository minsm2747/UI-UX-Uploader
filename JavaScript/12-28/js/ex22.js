var date = new Date();
console.log(date);

var  year = date.getFullYear();
console.log(year);

var month = date.getMonth();
console.log(month);

var theDate = date.getDate();
console.log(theDate);

var theDay = date.getDay();
console.log(theDay);
console.log(typeof(theDay));

switch (theDay) {
    case 0:
        document.write("오늘은 일요일입니다.");
    break;

    case 1:
        document.write("오늘은 월요일입니다.");
    break;

    case 2:
        document.write("오늘은 화요일입니다.");
    break;

    case 3:
        document.write("오늘은 수요일입니다.");
    break;

    case 4:
        document.write("오늘은 목요일입니다.");
    break;

    case 5:
        document.write("오늘은 금요일입니다.");
    break;

    case 6:
        document.write("오늘은 토요일입니다.");
    break;
}