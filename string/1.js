// var name = "conky";
// document.write(name.charAt(2));  //方法一;
// document.write(name[2]);   //方法二;
// var a = "a";
// var b = "b";
// if (a < b) {           //字符串的比较
//     console.log(a + "小于" + b);
// }
// var aa = "foo";
// var bb = new String(aa);   // 区分基本字符串和字符串对象
// console.log(typeof aa);
// console.log(typeof bb);

// aa="1+2";
// bb=new String("1+2");
// console.log(eval(aa));  //eval()为计算某个字符串,并执行其中的js代码
// console.log(eval(bb));
// console.log(eval(bb.valueOf())); //valueOf()将字符串对象转化为基本字符串

// document.write(String.fromCharCode(36,25,73)); //该方法返回一个字符串,而不是一个String对象.

// var name="conky";
// var aa="";
// console.log(name.length);  //返回一个字符串的长度
// console.log(aa.length);
// var name="conky";
// console.log(name.charCodeAt(2)); //返回表示给定索引的字符的Unicode的值。
// console.log(name.charCodeAt(0));
// console.log(name.codePointAt(4))  //返回使用UTF-16编码的给定位置的值的非负整数。

// var name='conky';
// var aa="liu"
// console.log(name.concat("liu","1995")); //连接两个字符串文本，并返回一个新的字符串。
// console.log(name+aa);                   //强烈建议使用赋值操作符(+,+=)代替concat方法.

// var aa="you are beautiful";
// console.log(aa.includes("you"));  //判断一个字符串里是否包含其他字符串。
// console.log(aa.includes("You"));  //区分大小写;

// var nike="to be no.1";
// console.log(nike.endsWith("1")); //判断一个字符串的结尾是否包含其他字符串中的字符。
// console.log(nike.endsWith("o",8));

// var adidas ="it is no a posibale";
// console.log(adidas.indexOf("is")); //从字符串对象中返回首个被发现的给定值的索引值，如果没有找到则返回-1。
// console.log(adidas.indexOf("iT")); //区分大小写,找不到返回-1
// console.log(adidas.indexOf("is") !==-1);  //检测某个字符是否存在与另一个字符串
// console.log(adidas.lastIndexOf("i")); //从字符串对象中返回最后一个被发现的给定值的索引值，如果没有找到则返回-1。
//
// var str = "he she her hi hellow";
// var count = 0;
// var pos = str.indexOf('h');
// while (pos !== -1) {        //使用 indexOf 统计一个字符串中某个字母出现的次数
//
//     count++;
//     pos = str.indexOf("h", pos + 1);
// }
// console.log(count);

// var name="this is a  very nice";
// console.log("is".localeCompare("a"));  //返回一个数字表示是否引用字符串在排序中位于比较字符串的前面，后面，或者二者相同。

// var str = "For more information,see Chapter 3.4.5.1r";
// var re = /see (Chapter \d+(\.\d)*)/i;  //创建正则实例
// var found=str.match(re); //使用正则表达式与字符串相比较。当一个字符串与一个正则表达式匹配时， match()方法检索匹配项。
// console.log(found)

// var word = "ASDFGHJKLqwertyuoiozxcvbnm";
// var regexp = /[a-e]/gi;      //展示了 match 使用 global 和 ignore case 标志。A-E、a-e 的所有字母将会作为一个数组的元素返回。
// var aa = word.match(regexp);
// console.log(aa);

// var str="nothing will come of nothing";
// console.log(str.match());  //使用match()，不传参数,返回空数组

// var str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
//     str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
//     str3 = "The contract was declared null and void.";
// document.write(str1.match("number" ));
// document.write(str1.match(NaN));      //当参数是一个字符串或一个数字，它会使用new RegExp(obj)来隐式转换成一个 RegExp。如果它是一个有正号的正数，RegExp() 方法将忽略正号。
// document.write(str1.match(-Infinity));

// var num="123";
// document.write(num.padEnd(10));
// document.write(num.padEnd(10, "."));  //用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。
// document.write(num.padEnd(5, 1));
// document.write(num.padStart(10));  //用另一个字符串填充当前字符串(重复，如果需要的话)，以便产生的字符串达到给定的长度。填充从当前字符串的开始(左侧)应用的。
// document.write(num.padStart(6, "."));

//  var str = "liu";
//  num = 6;
//  aa = str.repeat(num); //返回指定重复次数的由元素组成的字符串对象。
// console.log(aa);

// function aa(match,p1, p2, p3, string) {
//     return [p1, p2, p3].join("-");
// }                  //(精确的参数个数依赖于replace()的第一个参数是否是一个正则表达式对象， 以及这个正则表达式中指定了多少个括号子串。)
// var newString = "q12w2#e3$".replace(/(\D*)(\d*)(\W*)/, aa);
// console.log(newString);

// var name="my name is liuguanqi";
// var newname=name.replace(/Liuguanqi/i,"conky");  //replace() 中使用了正则表达式及忽略大小写标示。
// document.write(newname);
// console.log(typeof newname); //string
//
// var re=/Conky/gi;   //在 replace() 中使用 global 和 ignore 选项
// var name="my name is conky";
// var newname=name.replace(re,"liu");
// document.write(newname);

// var re= /(\w+)\s(\w+)/;   //交换一个字符串中两个单词的位置，这个脚本使用$1 和 $2 代替替换文本。
// var name="conky liu";
// var newname=name.replace(re,"$2,guanqi");//$1,$2对应圆括号的值
// document.write(newname);
//
// function aa(name) {
//     function bb(search) {  //用match或search 返回的结果一样;
//         return '-' + search.toLowerCase();  //所有出现的大写字母转换为小写，并且在匹配位置前加一个连字符。重要的是，在返回一个替换了的字符串前需要在匹配元素前需要进行添加操作。
//         // 在返回前，替换函数允许匹配片段作为参数，并且将它和连字符进行连接作为新的片段。
//
//     }
//
//     return name.replace(/[A-Z]/g, bb);
// }
//
// var cc = aa("conkyLiu");
// alert(cc);

// function ff(x) {
//     function bb(str, p1, offset, s) {
//         return ((p1 - 32) / 1.8) + "C"  //将华氏温度转换成对等的摄氏温度;
//     }
//
//     var s = String(x);
//     var test = /(\d+(?:\.\d*)?)F\b/g;
//     return s.replace(test, bb);
// }
//
// var cc = ff("26.6F");
// alert(cc);

// function aa(x){
//     function bb(str,p1) { //参数为一个p1会出错,str可换成其他的
//         return (p1*0.4535924*2) +"斤"  //磅转换成斤
//     }
//     var s= new String(x);
//     var reg=/(\d*)lb\b/g;
//     return s.replace(reg,bb);
// }
// var cc=aa("12lb");
// alert(cc);

// var  name="my name is conky,id:123";
// var reg= /123/g;     // search() 返回正则表达式在字符串中首次匹配项的索引(数字)。否则，返回 -1。
// console.log(name.search(reg));

// var  str1="123456789";
// var str2=str1.slice(4,-2);  //负数表示从结尾处开始,
// alert(str2);                 //slice() 方法提取一个字符串的一部分，并返回一新的字符串。

// var name="my name is conky";
// console.log(name.split(" ")); //使用指定的分隔符字符串将一个String对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。
//
// var name="C o n k y";
// var reg=/\s*/;
// var aa=name.split(reg,3);
// document.write(aa);
// var str="today 1 is nice 2 day";
// var aa=str.split(/(\d)/);  //如果 separator 包含捕获括号（capturing parentheses），则其匹配结果将会包含在返回的数组中。
// console.log(aa);

// var str="1234567890";
// console.log(str.substr(-7,3));  //通过指定字符数返回在指定位置开始的字符串中的字符。

// var num="0123456789";  //返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。
// console.log(num.substring(2,-2)) //任一参数小于 0 或为 NaN，则被当作 0。
// console.log(num.substring(num.length-5));

// var word="AQWSEDRFTGYHUJ";
// console.log(word.toLocaleLowerCase()); //小写
// console.log(word.toUpperCase()); //大写
// function change(word) {
//     function aa(str) {
//         return str.toUpperCase();
//     }
//
//     return word.replace(/\s[a-z]/g, aa);
//
// }
//
// var cc = change(" love is everywhere. We have love from our parents and friends, which makes us become stronger. Without love, we can’ survive long, or we will just like the walking dead.");
// document.write(cc);
//string 方法:
// var str="abc123!?@";
// console.log(str.charAt(0));
// console.log(str.charCodeAt("abc"));
// console.log(str.indexOf("123"));
// console.log(str.lastIndexOf("@"));
// console.log(str.match("@"));
// var re=/\d/g;
// var str2=6;
// console.log(str.replace(re,str2));
// console.log(str.search("!"));
// console.log(str.slice(2,-2));
// console.log(str.split("c"));
// console.log(str.toUpperCase());
// console.log(str.substr(2,3));
// console.log(str.substring(2,3));
// console.log(str.toString());
// console.log(str.valueOf());