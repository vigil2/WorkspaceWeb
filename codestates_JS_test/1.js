// 1. while, if, 자료형

// 아래에는 함수 getObject 가 선언되어 있습니다.getObject(['a', 3, 'b', 2, 7, 'c', { a: 'd' }, 8]); 가 실행된 후, cnt의 값으로 알맞은 것은 무엇일까요?

let cnt = 0;

function getObject(arr) {
  let i = 0;
  while (i < arr.length) {
    if (typeof arr[i] === 'object') {
      cnt = i;
      break;
    } else {
      i ++;
      continue;
    }
  }
}

getObject(['a', 3, 'b', 2, 7, 'c', { a: 'd' }, 8]);
console.log(cnt) // -> ?