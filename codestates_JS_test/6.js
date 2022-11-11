// 6. array와 메서드

// 함수 isVacationSpot 은 특정 지역이 휴양지 리스트 배열에 포함되어있는지 판단하는 함수입니다. isVacationSpot('Cancun') 를 실행한 후 output 변수에 ‘여행지 리스트에 없는 지역입니다.’라는 값이 담기기 위해서, if 문 속에 들어갈 알맞은 ‘배열 메서드’를 작성해주세요.


// *유의사항 :

// [메서드]에 작성되어야하는 정답만을 소문자와 대문자를 구별하여 정확하게 작성해주세요.

// let vacationSpot = ['Saipan', 'Hawaii', 'LA', 'Nerja', 'Ibiza'];

// function isVacationSpot(str) {
//   if (vacationSpot.[메서드](str) !== -1) {
//     return '여행지 리스트에 있는 지역입니다.'
//   } else {
//     return '여행지 리스트에 없는 지역입니다.'
//   }
// }

// let output = isVacationSpot('Cancun');
// console.log(output) // -> 여행지 리스트에 없는 지역입니다.

let vacationSpot = ['Saipan', 'Hawaii', 'LA', 'Nerja', 'Ibiza'];

function isVacationSpot(str) {
  if (vacationSpot.indexOf(str) !== -1) {
    return '여행지 리스트에 있는 지역입니다.'
  } else {
    return '여행지 리스트에 없는 지역입니다.'
  }
}

let output = isVacationSpot('Cancun');
console.log(output) // -> 여행지 리스트에 없는 지역입니다.