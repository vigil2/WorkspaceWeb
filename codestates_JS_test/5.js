// 5. array, if문

// 함수 getPhone 은 정수를 요소로 갖는 배열을 입력받아 아래 예시와 같은 문자열을 리턴합니다. 입력받는 배열의 길이는 8 또는 11 입니다. 아래 함수가 의도대로 결과값을 내기 위해 알맞은 element [1], [2], [3], [4] 는 무엇일까요?


// function getPhone(arr) {
//   let first = '(010)';
//   let len = arr.length;
//   let second = arr.slice(element [1], element [2]).join('');
//   let third = arr.slice(element [3], element [4]).join('');

//   if (len === 11) {
//     first = `(${arr.slice(0, 3).join('')})`;
//   }

//   return `${first}${second}-${third}`;
// }

// let output = getPhone([0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8]);
// console.log(output); // --> '(010)1234-5678'

// output = getPhone([8, 7, 6, 5, 4, 3, 2, 1]);
// console.log(output); // --> '(010)8765-4321'

function getPhone(arr) {
    let first = '(010)';
    let len = arr.length;
    let second = arr.slice(len-8, len-4).join('');
    let third = arr.slice(len-4, len).join('');
    
    if (len === 11) {
        first = `(${arr.slice(0, 3).join('')})`;
    }
    
    return `${first}${second}-${third}`;
}

let output = getPhone([0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8]);
  console.log(output); // --> '(010)1234-5678'
  
  output = getPhone([8, 7, 6, 5, 4, 3, 2, 1]);
  console.log(output); // --> '(010)8765-4321'