// 교통비 변수 값 입력
var fare = prompt("오늘 사용한 교통비를 입력 하십시오.", "");

// 식비 변수 값 입력
var food = prompt("오늘 사용한 식비를 입력 하십시오", "");

// 간식비 변수 값 입력
var  snack = prompt("오늘의 간식비를 입력 하십시오.", "")

// 합계 변수 Total
var total = Number(fare) + Number(food) + Number(snack);
/* Total 값이 12000를 초과 했을 때 "예산 초과" 메세지를 출력,
반대로 12000원을 초과 하지 않았을 경우 "예산 충분" 메세지 출력 */
console.log(typeof(fare));
console.log(total);

total>12000 ? console.log(total-12000 + "예산 관리가 필요합니다 ^^") :
    console.log("예산이 충분합니다.");