// 변수 선언
var score = Number(prompt("귀하의 점수를 입력하십시오", ""));

// 조건문 실행
if (score >= 90) {
    console.log("A");

} else if (score >= 80) {
    console.log("B");

} else if (score >= 70) {
    console.log("C");

} else if (score >= 60) {
    console.log("D");

} else {
    console.log("F");
}