// //创建数组
// var aa = ["asd", "qwe", "zxc"];
// console.log(aa.length);
//
// //遍历数组
// aa.forEach(function (a, b, c) {
//     console.log(a, b);
// });
//
// //通过索引访问数组元素
// var bb = aa[1];
// console.log(bb);
//
// //添加元素到数组的末尾
// var cc = aa.push("zxc");
// console.log(aa);
//
// //删除数组末尾的元素
// var dd = aa.pop();
// console.log(aa);
//
// //删除数组最前面(头部)的元素
// var ee = aa.shift();
// console.log(aa);
//
// //添加元素到数组的头部
// var ff = aa.unshift("rty", "fgh");
// console.log(aa);
//
// //找出某个元素在数组中的索引
// console.log(aa.indexOf("qwe"));
//
// //通过索引删除某个元素
// console.log(aa.splice(1));
//
// //从一个索引位置删除多个元素
// var num = [1, 2, 3, 4, 5, 6, 7];
// var pos = 1, n = 2;
// var newnum = num.splice(pos, n);
// console.log(num);
// console.log(newnum);
//
// //复制一个数组
// var num2 = num.slice();
// console.log(num2);

//修改器方法
// var num=[1,2,3,4,5,6,7,8];
// console.log(num.splice(2,2));  //在任意的位置给数组添加或删除任意个元素。
// console.log(num.push("aa")); // 在数组的末尾增加一个或多个元素，并返回数组的新长度。
// console.log(num.pop());      //删除数组的最后一个元素，并返回这个元素。
// console.log(num.reverse());  //颠倒数组中元素的排列顺序，即原先的第一个变为最后一个，原先的最后一个变为第一个。
// console.log(num.sort());  //对数组元素进行排序，并返回当前数组。
// console.log(num.shift()); ///删除数组的第一个元素，并返回这个元素。
// console.log(num.unshift("bb")); //在数组的开头增加一个或多个元素，并返回数组的新长度。

//访问方法:
// var num=[1,2,3,4];
// var num2=[5,6,7,8];
// console.log(num.concat(num2)); //返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组。
// console.log(num+num2); //错误
// console.log(num.join("-")); //连接所有数组元素组成一个字符串。
// console.log(num.slice(1,3)); //返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
// console.log(num2.toString()); // 返回一个字符串，表示指定的数组及其元素。
// console.log(num.indexOf(2)); //返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回-1。
// console.log(num.lastIndexOf(4)); //返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回-1。

//迭代方法:
// function arr(element, index, array) {
//     console.log("[" + index + "] =" +element )
// }
// console.log([1,2,,4].forEach(arr)); //forEach() 方法对数组的每个元素执行一次提供的函数。
// console.log([1,2,"",4].forEach(arr));
// console.log([1,2,undefined,4].forEach(arr));
// var xx;
// console.log([1,2,xx,4].forEach(arr));

// var num = ['s','d','f','g'];
// num.forEach(function (aa) {
//     console.log(aa);   //如果数组在迭代时被修改了，则其他元素会被跳过。
//     if (aa === 'd') {
//         num.shift();
//     }
// });

// function aa(element) {
//     return (element >= 10)
// }

// var num1=[10,12,3,12].every(aa);  //如果数组中的每个元素都满足测试函数，则返回true，否则返回false。
// console.log(num1);
// var num2=[12,34,54,56].every(aa);
// console.log(num2);
// var num3=[1,2,3,4].some(aa); //如果数组中至少有一个元素满足测试函数，则返回true，否则返回false。
// console.log(num3);
// var num4=[10,2,3,40].some(aa);
// console.log(num4);
// var filarray=[12,2,34,4].filter(aa); //将所有在过滤函数中返回true的数组元素放进一个新数组中并返回。
// console.log(filarray);
// var num5=[1,22,34,4].find(aa); //找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回undefined。
// console.log(num5);
// var num6=[1,2,30,40].findIndex(aa); //找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回-1。
// console.log(num6);

// var arr=['q','f','t'];
//   arr2=arr.keys(); //返回一个数组迭代器对象，该迭代器会包含所有数组元素的键。
//   console.log(arr2.next());
//  var num=[1,2,3,4];
// var num2=num.map(function(element){  //返回一个由回调函数的返回值组成的新数组。
//     return element*element;
// });
// console.log(num2);
// var objarr=[{key:1,value:10},{key:2,value:20},{key:3,value:30}];
// var arr2=objarr.map(function(obj){
//     var robj={};
//     robj[obj.key]=obj.value;  //使用 map 重新格式化数组中的对象
//     return robj;
// });
// console.log(objarr);
// console.log(arr2);

// var str = "123456";
// str2=Array.prototype.map.call(str,function(x)
// {
//     return x;   //反转字符串
// }).reverse().join("");
// console.log(str2);

// var sum=[0,1,2,3,4].reduce(function(a,b){
//     return a+b;  //从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值
// },0);
// console.log(sum); //数组里所有值的和
//
// var arr=[[0,1],[2,3],[4,5]];
// var arr2=arr.reduce(function(a,b){
//     return a.concat(b); //将二维数组转化为一维
// },[]);
// console.log(arr2);
// var arr3=arr.reduceRight(function(a,b){
//     return a.concat(b);  //从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值
// });
// console.log(arr3);

var num=2;

var arr=['壹','贰','叁','肆','伍','陆','柒','捌','玖'];
console.log(arr[num-1]);

