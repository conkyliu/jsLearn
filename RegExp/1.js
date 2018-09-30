// var str = "this is a Abc and 123";
// var str2="113111313";
// var re=/\d/g;
// var reg=/11/g;
// console.log(str.replace(re,"6"));
// console.log(str2.replace(reg,"2"));
// console.log(re.exec(str2));
// console.log(/d(b+)d/g.exec("cdbbdbsbz"));
// var name = "conky liu";
// re = /(\w+)\s(\w+)/;  //使用括号的子字符串匹配并替换,$ 1,$ 2表示第一个和第二个括号的子字符串匹配。
// console.log(name.replace(re, "$2,$1"));
function aa() {
    for (let  i = 0; i < 7; i++) {
        for (var k = 0; k < 3; k++) {
            var d = k * i;
            console.log(i);
        }
    }
//console.log(i);
    console.log(d);
};
console.log(aa());