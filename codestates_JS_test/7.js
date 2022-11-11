// 7. object, array, if문

// 함수 getName 은 입력받은 배열에 해당하는 인덱스 값인 객체의 'name' 속성값을 리턴합니다. getName([{ name: 'Daisy', property: 'name' }, { name: 'Angela' }], 1)을 실행했을 때, [실행값]으로 알맞은 것은 무엇일까요?


// function getName(arr, num) {
//   if (!arr.length) {
//     return undefined;
//   } else if (num > arr.length - 1) {
//     return arr[arr.length - 1]['name'];
//   } else {
//     return arr[num]['name'];
//   }
// }

// let output = getName([{ name: 'Daisy', property: 'name' }, { name: 'Angela' }], 1);
// console.log(output); // --> [실행값]

function getName(arr, num) {
    if (!arr.length) {
      return undefined;
    } else if (num > arr.length - 1) {
      return arr[arr.length - 1]['name'];
    } else {
      return arr[num]['name'];
    }
  }
  
  let output = getName([{ name: 'Daisy', property: 'name' }, { name: 'Angela' }], 1);
  console.log(output); // --> [실행값]