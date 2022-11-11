// 3. scope

// 아래에는 함수 findScoepe 가 선언되어 있습니다. findScoepe 가 실행된 후 전역변수 output의 값으로 알맞은 것은 무엇일까요?

// let x = 15;

// function findScoepe() {
//   x = x + 15;
//   for (let i = 0; i < 5; i ++) {
//     let x = 0;
//     x = x + i;
//   }
// }

// findScoepe();

// let output = x;
// console.log(output); // -> ?


let x = 15;

function findScoepe() {
  x = x + 15;
  for (let i = 0; i < 5; i ++) {
    let x = 0;
    x = x + i;
  }
}

findScoepe();

let output = x;
console.log(output); // -> ?