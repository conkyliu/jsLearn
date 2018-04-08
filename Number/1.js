// console.log(Number.isNaN(123)); //确定传递的值是否是 NaN。
// console.log(Number.isNaN("123"));
// console.log(Number.isFinite("0"))//确定传递的值类型及本身是否是有限数。不会强制将一个非数值的参数转换成数值
// console.log(Number.isInteger(-10/2)); //确定传递的值类型是“number”，且是整数。
// console.log(Number.isSafeInteger(66)); //确定传递的值是否为安全整数 ( -(253 - 1) 至 253 - 1之间)。
// console.log(Number.parseFloat("1.333"));
// var num = "66";
// console.log(Number.parseInt(num, 16)); //可以根据给定的进制数把一个字符串解析成整数。

// function aa(x, y) {
//     return Number.parseFloat(x).toExponential(y);
// }   //返回表示指数表示法中的数字的字符串
//
// console.log(aa(123456, 2));
// console.log(aa("123456"));

// function aa(x){
//     return Number.parseFloat(x).toFixed(2);  //返回表示定点表示法中的数字的字符串。
// }
// console.log(aa(12.1));
// console.log(aa(1.212));
// console.log(aa(0.1212));

// function aa(x){
//     return x.toLocaleString("ar-EG");   //返回此编号的语言敏感表示形式的字符串。
// }
// console.log(aa(126542));
// console.log(aa(6666));

// function aa(x) {
//     return Number.parseFloat(x).toPrecision(5);
// }    //以固定点或指数表示形式返回一个字符串，该数字表示指定精度的数字。
// console.log(aa(1.2));
// console.log(aa(0.12));
// console.log(aa(12));



