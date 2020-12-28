// 변수 선언
var color = prompt("1 ~ 7 사이의 숫자를 입력하세요", "");

// 조건문(Switch) 실행
switch (color) {
    case "1":
        console.log("빨강");
    break;

    case "2":
        console.log("주황");
    break;

    case "3":
        console.log("노랑");
    break;

    case "4":
        console.log("초록");
    break;

    case "5":
        console.log("파랑");
    break;

    case "6":
        console.log("남섹");
    break;

    case "7":
        console.log("보라");
    break;

    default:
        console.log("1 ~ 7 사이 숫자만 입력 가능합니다.");
    break;
}