// 배열 디스트럭처링 Date 예제

const today = new Date();
// 오늘 날짜 Date 객체를 today에 대입

const formattedDate = today.toISOString().substring(0, 10);
console.log(today)  // 2018-06-25T06:17:36.774Z (Date 타입)
console.log(today.toISOString());   // 2018-06-25T06:17:36.774Z String 타입
console.log(today.toISOString().substring(0, 10)) // 2018-06-25 날짜까지 잘라낸다.

const [year, month, day] = formattedDate.split('-');
console.log(year, month, day); // 2018 06 25



/*
    toISOString() 함수는
    날짜객체를 ISO 형식의 문자열 값으로 반환한다.
    올바른 날짜가 포함되지 않을 경우 RangeError 예외가 throw
*/