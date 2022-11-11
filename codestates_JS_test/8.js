// function getLength(obj1, obj2) {
//     let newObj = Object.[메서드](obj1, obj2);
//     let cnt = Object.keys(newObj).length;
  
//     return `리스트의 길이는 ${cnt}입니다.`
//   }
  
//   let output = getLength({사과: 3, 배: 5, 감: 6}, {바나나: 2, 사과: 4, 딸기: 5});
//   console.log(output); // <- 리스트의 길이는 5입니다.

function getLength(obj1, obj2) {
    let newObj = Object.assign(obj1, obj2);
    let cnt = Object.keys(newObj).length;
  
    return `리스트의 길이는 ${cnt}입니다.`
  }
  
  let output = getLength({사과: 3, 배: 5, 감: 6}, {바나나: 2, 사과: 4, 딸기: 5});
  console.log(output); // <- 리스트의 길이는 5입니다.