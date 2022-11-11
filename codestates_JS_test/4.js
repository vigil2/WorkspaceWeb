// 4. scope, closure

// 아래에는 함수 getPlus 와 함수 getDoublePlus 가 선언되어 있습니다. getDoublePlus(15)가 실행된 후 전역변수 output에 50 이라는 값이 할당되기 위해서, 전역 변수 x에 할당되어야 하는 [숫자]로 알맞은 것은 무엇일까요?

// let x = [숫자]
let x = 10

function getPlus(y) {
  return x + y;
}

function getDoublePlus(x) {
  return getPlus(x) + getPlus(x);
}

let output = getDoublePlus(15);
console.log(output); // --> 50