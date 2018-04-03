//创建数组
var aa= ["asd","qwe"];
console.log(aa.length);

//通过索引访问数组元素
var bb=aa[1];
console.log(bb);

//添加元素到数组的末尾
var cc=aa.push("zxc");
console.log(aa);

//删除数组末尾的元素
var dd=aa.pop();
console.log(aa);

//删除数组最前面(头部)的元素
var ee=aa.shift();
console.log(aa);

//添加元素到数组的头部
var ff=aa.unshift("rty","fgh");
console.log(aa);

//找出某个元素在数组中的索引
console.log(aa.indexOf("qwe"));

//通过索引删除某个元素
console.log(aa.splice(1));

//从一个索引位置删除多个元素
var num=[1,2,3,4,5,6,7];
var pos=1,n=2;
var newnum=num.splice(pos,n);
console.log(num);
console.log(newnum);

//复制一个数组
var num2=num.slice();
console.log(num2)