// 9. 알고리즘 1

// 함수 getFirstLetter 는 문장을 인자로 받아 각 단어의 첫 글자로 구성된 문자열을 리턴합니다. 아래 함수가 의도대로 결과값을 내기 위해 알맞은 [코드]를 작성해주세요.


// *유의사항 :

// [코드]에 작성되어야하는 정답만을 '소문자로' 작성해주세요.
// 필요한 기호 이외의 세미콜론/띄어쓰기는 사용하지마세요.

// function getFirstLetter(sentence) {
//   if (sentence === '') {
//     return '';
//   }

//   let words = sentence.split(' ');
//   let result = '';
//   for (let i = 0; i < words.length; i += 1) {
//     result = result + [코드]
//   }
//   return result;
// }

// let output = getFirstLetter('Code States');
// console.log(output); // <- CS

// output = getFirstLetter('코드스테이츠에 오신 것을 환영합니다.')
// console.log(output); // <- 코오것환


function getFirstLetter(sentence) {
    if (sentence === '') {
      return '';
    }
  
    let words = sentence.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i += 1) {
      result = result + words[i].slice(0,1)
    }
    return result;
  }
  
  let output = getFirstLetter('Code States');
  console.log(output); // <- CS
  
  output = getFirstLetter('코드스테이츠에 오신 것을 환영합니다.')
  console.log(output); // <- 코오것환