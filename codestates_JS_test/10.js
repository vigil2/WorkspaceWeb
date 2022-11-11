// 10. 알고리즘 2

// 함수 findOdd 는 문자열을 인자로 받아 연속된 홀수 숫자 사이에 '-'문자를 추가한 문자열을 리턴합니다. 아래 함수가 의도대로 결과값을 내기 위해 알맞은 코드 [1], 코드 [2]로 알맞은 것은 무엇일까요?


// function findOdd(num) {
//   let result = num[0];
//   for (let i = 1; i < num.length; i++) {
//     if (Number(코드 [1]) % 2 && Number(코드 [2]) % 2) {
//       result = result + '-';
//     }
//     result = result + num[i];
//   }

//   return result;
// }

// let output = findOdd('234951');
// console.log(output); // --> 2349-5-1

// output = findOdd('134592');
// console.log(output); // --> 1-345-92

function findOdd(num) {
    let result = num[0];
    for (let i = 1; i < num.length; i++) {
      if (Number(num[i-1]) % 2 && Number(num[i]) % 2) {
        result = result + '-';
      }
      result = result + num[i];
    }
  
    return result;
  }
  
  let output = findOdd('234951');
  console.log(output); // --> 2349-5-1
  
  output = findOdd('134592');
  console.log(output); // --> 1-345-92