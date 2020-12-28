// 변수 선언
var Num1 = 10;
var Num2 = 5;
var Num3 = 3;
var str = true;

// 결과 출력
console.log(str);

// AND
// Num1<Num2 && Num2<Num3 fasle && fasle = fasle
console.log(Num1<Num2 && Num2<Num3);

// Num1<Num2 && Num2>Num3 fasle && true = false
console.log(Num1<Num2 && Num2>Num3);

// Num1>Num2 && Num2<Num3 true && false = false
console.log(Num1>Num2 && Num2<Num3);

// Num1>Num2 && Num2<Num3 true && true = true
console.log(Num1>Num2 && Num2<Num3);

// OR
// Num1<Num2 || Num2<Num3 false || false = false
console.log(Num1<Num2 || Num2<Num3);

// Num1<Num2 || Num2>Num3 false || true = true
console.log(Num1<Num2 || Num2>Num3);

// Num1>Num2 || Num2<Num3 true || false = true
console.log(Num1>Num2 || Num2<Num3);

// Num1>Num2 || Num2>Num3 true || true = true
console.log(Num1>Num2 || Num2>Num3);