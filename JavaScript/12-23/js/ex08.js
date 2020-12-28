// 변수 선언
var Num = 1;
var tables = "<table>";

tables += "<tr>";
    tables += "<td>"+ Num +"</td>";
    tables += "<td>"+ ++Num +"</td>";
    tables += "<td>"+ ++Num +"</td>";
tables += "</tr>";
tables += "</table>";

// html 파일 내에 출력
document.write(tables);