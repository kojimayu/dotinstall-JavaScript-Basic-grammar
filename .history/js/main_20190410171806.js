'use strict'

//関数

function showAD(message = 'AD') {  //　仮引数
    console.log('----------');
    console.log(`--- ${message} ---`);
    console.log('----------');
}

showAD('Header AD');　　// 実引数
console.log('Tom is great!');
console.log('Bob is great!');
// showAD('AD');
showAD();
console.log('Steve is great!');
console.log('Rich is great!');
showAD('Footer AD');







