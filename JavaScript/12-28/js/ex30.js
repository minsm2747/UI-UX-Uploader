// 달력 안에 삽입할 수를 변수로 선언
var Num = 1;

// 달력 테이블 생성
var calendar = "<table>";

// 달력 세부 내용을 for문으로 구현
for (i=1; i<=5; i++) {
    calendar += "<tr>";
    for (j=1; i<=7; j++) {
        calendar += "<td>" + Num++;
        calendar += "</td>";
    }
    calendar += "</tr>";
}

calendar += "</table>";
document.write(calendar);