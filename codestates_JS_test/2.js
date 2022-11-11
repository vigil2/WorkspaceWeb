// 2. string, for 구문

// 함수 repeatLetter 는 문자열을 입력받아 해당 문자열을 특정한 패턴으로 반복한 값을 리턴합니다. 아래 함수가 의도대로 결과값을 내기 위해 알맞은 [코드]를 작성해주세요.


// *유의사항 :

// [코드]에 작성되야하는 정답만을 '소문자로' 작성해주세요.
// 필요한 기호 이외의 세미콜론/띄어쓰기는 사용하지 마세요.

// function repeatLetter(str) {
//   let result = '';

//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j <= i; j += 1) {
//       result = result + [코드]
//     }
//   }

//   return result;
// }

// let output = repeatLetter('abc');
// console.log(output); // --> 'aababc'

// output = repeatLetter('fruit');
// console.log(output); // --> 'ffrfrufruifruit'

function repeatLetter(str) {
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j <= i; j += 1) {
        result = result + Array(str[i,j]).join('')
      }
    }
  
    return result;
  }
  
  let output = repeatLetter('abc');
  console.log(output); // --> 'aababc'
  
  output = repeatLetter('fruit');
  console.log(output); // --> 'ffrfrufruifruit'