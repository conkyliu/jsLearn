// var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < num.length; ++i) {
//     for (var k = 0; k < num2.length; k++) {
//         var aa = [];
//         aa = num[i] * num2[k];
//     }
//
//
// }
// document.write(aa);

// document.write("<table width='10' border='1'");
// for(var i=0; i<=9; i++){
//     document.write("<tr>");
//     for(var j=0; j<=i; j++){
//         document.write("<td>"+ j +"*"+ i +"="+ i*j +"</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</table>");

//if...else...语句
//if...else if...else语句
//switch语句
// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var word = ["this is number"];
// for (let i = 0; i < nums.length; i++) {
//     word[i + 1] = nums[i];
//
// }
// console.log(word );
// var bb='';
// for (let i = 0; i < 8; ++i) {
//
//
//     bb += i + ',';
// }
// console.log(bb);
var arr = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = arr.splice(0, 0, arr2,);
console.log(arr);

var wor = "a45s5g5h4xb43ey5ui4p"; //将字符串转unicode
var regwor = wor.match(/[a-z]/g);
console.log(regwor);
var codewor = [];
var wor16=[];
for (var i = 0; i < regwor.length; i++) {
    codewor[i] = regwor[i].charCodeAt();
    wor16[i]=codewor[i].toString(2);
}
console.log(codewor);
console.log(wor16.join("-"));
