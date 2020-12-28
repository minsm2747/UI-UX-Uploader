// 변수 선언
var ui = Number(prompt("귀하의 UI구현 성적을 입력하세요.", ""));
var uiTest = Number(prompt("귀하의 UI테스트 성적을 입력하세요.", ""));
var program = Number(prompt("귀하의 프로그래밍 성적을 입력하세요.", ""));
var avg = (ui + uiTest + program) /3;

// 조건문 실행
if (avg < 60) {
    console.log("불합격 입니다.");
} else {
    if (ui >= 40 && uiTest >= 40 && program >= 40) {
        console.log("합격 입니다");
    } else {
    console.log("과락(합격기준 미충족) 입니다");
    }
}