// 단 체크
for (i=2; i<=9; i++) {
    document.write("<h2>" + i + "단==========" + "</h2>");

    // 곱셉을 구현할 fot문
    for (j=1; j<=9; j++) {
        document.write(i + "X" + j + "=" + i*j + "<br>");
    }
}