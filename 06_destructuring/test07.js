// 객체 디스트럭처링 3 : filter



const todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'JS', completed: false }
  ];
  
  // todos 배열의 요소인 객체로부터 completed 프로퍼티만을 추출한다.
  const completedTodos = todos.filter(({ completed }) => completed);
  console.log(completedTodos); // [ { id: 1, content: 'HTML', completed: true } ]

  /*

    .filter() 함수는 대상 배열을 순회하며
    콜백함수의 첫 번째 인자로 대상 배열의 요소를 받고
    콜백함수 body의 조건에 따라 return 값이 true 일 경우 해당 요소를 반환한다.

    이 때 (result)=> 화살표 함수의 result에 객체 디스트럭처링 문법을 사용하면
    원하는 프로퍼티만 추출하여 화살표 함수의 특성인 1줄 함수일 경우 자동 리턴을 이용하여
    completed 가 true인 요소를 출력한다.

  */