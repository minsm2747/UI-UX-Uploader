// 입력 받을 사용자의 성명
var name = prompt("성명을 입력하세요", "");

// 입력 받을 사용자의 키(신장)
var height = prompt("신장을 입력하세요", "");

// 입력 받을 사용자의 체중(몸무게)
var weight = prompt("체중을 입력하세요", "");

// 입력 받을 사용자의 표준 체중
var properWeight = (height - 100) * 0.9;

// 입력 받은 사용자의 정보를 합산
var result = (weight >= (properWeight - 5)) && (weight <= (properWeight +5));

// 결과 출력
document.write("성명 : " + name + "<br>");
document.write("신장 : " + height + "<br>");
document.write("체중 : " + weight + "<br>");
document.write("적정 체중 : " + properWeight + "<br>");
document.write(name + "님은 ");
result ? document.write("적정 체중 입니다.") : 
    document.write("적정 체중이 아닙니다.");