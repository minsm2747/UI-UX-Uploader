// 웹 사이트 입력
var web = prompt("네이버, 다음, 구글 중에 접속 하고자하는 사이트를 입력해주세요.", "");

// 웹 사이트 URL 주소를 담을 변수 선언
var url;


// Switch문 실행
switch (web) {
    case "네이버":
        url="https://www.naver.com/";    
    break;

    case "다음":
        url="https://www.daum.net/";    
    break;

    case "구글":
        url="https://www.google.co.kr/";    
    break;

    default:
        alert("네이버, 다음, 구글 웹 사이트만 연결 가능합니다.");
    break;
}

// Switch문에서 실행한 값(URL)들을 console.log로 출력
console.log(url);

// if문 실행
if (url) {
    location.href=url;
}