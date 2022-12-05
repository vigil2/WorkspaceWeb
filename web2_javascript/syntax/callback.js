// function a() {
//     console.log('A')
// }

var b = function() { // JS에서 함수는 값이다.
    console.log('b')
}

function slowfunc(callback1, callback2) {
    console.log('a');
    callback1();
    callback2();
    console.log('c');
}

slowfunc(b,b);
