// var fun = new Function('a', 'b', 'return a+b')
// console.log(fun(4, 6)); //Function 构造函数 创建一个新的Function对象。 在 JavaScript 中, 每个函数实际上都是一个Function对象。

//匿名函数:
// var aa = function (num) {
//     return num + num
// };
// var x = aa(4);
// console.log(x);
//
// var aa = function bb(n) {
//     return n < 2 ? 1 : n * bb(n - 1) //函数表达式也可以提供函数名，并且可以用于在函数内部代指其本身
// };
// console.log(aa(4));

// function map(f,a){
//     var result=[];
//     var i;
//     for(i=0;i!=a.length;i++){
//         result[i]=f(a[i]);
//     }return result;
// }            //当将函数作为参数传递给另一个函数时，函数表达式很方便。
// var f=function(x){
//     return x*x*x;
// }
// var arr=[1,3,5,7];
// var aa=map(f,arr);
// console.log(aa);

// function foo(i) {
//     if (i < 0)
//         return;     //函数堆栈
//     console.log("begin:" + i);
//     foo(i - 1);
//     console.log("end:" + i);
// }
// console.log(foo(3));

//嵌套函数:
// function myfun(a, b) {
//     function num(x) {
//         return x * x;
//     }
//
//     return num(a) + num(b);
// }
// console.log(myfun(3,4));

//闭包:
// function out(x){
//     function on(y){
//         return x+y
//     }
//     return on;
// }
// console.log(out(3)(4));

//多层嵌套函数:
// function a(x) {
//     function b(y) {
//         function c(z) {
//             console.log( x + y + z);
//         }
//
//         c(3)
//     }
//
//     b(2)
// }a(1);

// var createpet = function (name) {
//     var sex;
//     return {
//         setname: function (newname) {
//             name = newname;
//         },
//         getname: function () {
//             return name
//         },
//         getsex: function () {
//             return sex;
//             _
//         },
//         setsex: function (newsex) {
//
//             sex = newsex
//
//
//         }
//     }
// }
//
// var pet = createpet("neo");
// console.log(pet.getname());
// pet.setsex("man");
// pet.setname("fo");
// console.log(pet.getname());
// console.log(pet.getsex());

// var getcode = (function () {
//     var code = "0]Eal(eh&2"
//     return function () {
//         return code;
//     }
// })();
// console.log(getcode());

//使用 arguments 对象:
// function myconcat(spe) {
//     var result="";
//     var i;
//     for(i=0;i<arguments.length;i++){
//         result +=arguments[i]+spe;
//     }
//     return result;
// }
//
// console.log(myconcat(1,2,3));
// console.log(myconcat("a","b","c"));

//箭头函数:
// var a = ["qqda", "wswds", "gggfgee", "rra"];
// var a2 = a.map(function (s) {
//     return s.length
// });
// console.log(a2);
// var a3 = a.map(s => s.length);
// console.log(a3);

// function product(name,price){
//     this.name=name;
//     this.price=price;
// }
// function Food(name,price){
//     product.call(this,name,price);
//     this.aa="food";
// }
// var bb=new Food("fish",8);
// console.log(bb.name);

// //使用call方法调用匿名函数
// var animals = [
//     {species: "lion", name: "king"},
//     {species: "whale", name: "fali"}];
// for (var i = 0; i < animals.length; i++) {
//     (function (i) {
//         this.print = function () {
//             console.log("#" + i + ' ' + this.species + ":" + this.name);
//         }
//         this.print()
//     }).call(animals[i], i)
// }

//使用call方法调用函数并且指定上下文的'this'
// function greet(){
//     var reply=[this.person, "is An awesome",this.role].join(' ');
// console.log(reply);
// }
// var i={person:"douglas crockford",role:"javascript developer"};
// greet.call(i);

// var x=4;
// var module = {
//     x: 42,
//     getx: function () {
//         return this.x
//     }
// }; //bind()方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。
//
// var aa=module.getx; //this指向全局作用域
// console.log(aa());  //返回4
//
// var bb=aa.bind(module);
// console.log(bb());

//偏函数
// function list(){
//     return Array.prototype.slice.call(arguments);
// }
// var list1= list(1,2,3);
// var aa=list.bind(undefined,66);
// var list2=aa();
// var list3=aa(1,2,3);
// console.log(list1);
// console.log(list2);
// console.log(list3);

//Function构造器生成的函数，在全局作用域中被创建
// var n=1;
// function f() {
//     var n=2;
//     function e(){
//         return n;
//     }
//     return e;
// }
// console.log(f()());
//
// var n=1;
// function ff(){
//     var n=2;
//     var e= new Function("return n");
//     return e;
// }
// console.log(ff()());

//函数声明;
// function funname(arg0,arg1,){
//     xxxx;//函数体
// }
// //函数表达式(匿名函数):
// var funname=function(arg0,arg1) {
//     xxx//函数体
// }

//递归:是在一个函数通过名字调用自身的情况下构成的.
// function aa(x) {
//     if (x < 1) {
//         return 1
//     }else{
//         return x*aa(x-1) //递归阶乘函数
//     }
// }
// console.log(aa(4));
// function loop(x) {
//     if (x >= 10)
//         return;
//     loop(x + 1)
//
//
// }
//
// alert(loop(0));
//
// function walk(node) {
//     if (node ==null)
//         return;
//     for (var i = 0; i < node.childNodes.length; i++) {
//         walk(node.childNodes[i]);
//     }
// }
//
// console.log(walk());

//闭包和变量
// function aa() {
//     var result = new Array();
//     for (var i = 0; i < 10; i++) {
//
//         result[i] = function (num) {
//             return function () {
//                 return num
//             };
//         }(i);
//
//     }
//     return result;
// }
//
// console.log();

// var name = "liu";
// var Object = {
//     name: "conky",
// getname:function (){  //匿名函数具有全局性,故指向window;
//
//     return function(){
//         return this.name;
//     }
// }
// };
// console.log(Object.getname()());

//私有作用域(匿名函数模仿块级作用域):
// (function () {
//     //这里是块级作用域;
// })();

//私有变量(任何在函数里定义的局部变量,参数或其他函数):
// function add(num1, num2) {
//     var sum = num1 = num2;
//     return sum
// }

//特权方法(创建一个闭包来访问私有变量,函数):
// function aa() {
//     var x = 10;
//     var myfun = function () {
//         return false;
//     };
//     this.public = function () {
//         x++;
//         return myfun;
//
//     };
// }console.log(aa());

// function person(name) { //利用私有和特权成员,隐藏不被直接修改的数据
//     this.getname = function () {  //缺点:使用构造函数模式每个实例都会创建同样的方法,静态私有变量可避免.
//         return name;
//     };
//     this.setname = function (value) {
//         name = value;
//     };
// }
//
// var person = new person("liu");
// console.log(person.getname());
// person.setname("conky");
// console.log(person.getname());
//
// //静态私有变量:
// (function () {
//     var num = 10;  //私有变量
//     var myfun = function () {  //私有函数
//         return false;
//     };
//     myobj = function () {  //构造函数
//     };
//     myobj.prototype.public = function () {  //公有/特权方法
//         num++;
//         return myfun();
//     };
// })();

// (function () {
//     var name = "";  //静态的,由说所有实例共享的属性
//     person = function (value) {
//         name = value;
//     };
//     person.prototype.getname = function () {
//         return name;
//     };
//     person.prototype.setname = function (value) {
//         name = value;
//     };
//
// })();
// var man = new person("liu");
// console.log(man.getname()); //"liu"
// man.setname("conky");
// console.log(man.getname());
// var man2 = new person("neo");
// console.log(man.getname()); //"neo"
// console.log(man2.getname());

//模块模式(为单例创建私有变量和特权方法):
// var aa = function_()
// {
//     var num = 10;
//
//     function myfun() {
//         return false;
//     }
//
//     return {}
// }


// var devices = [
//     {deviceId: "30:AE:A4:2B:EC:16", name: "未知设备", RSSI: -101,},
//     {
//         deviceId: "10:CE:A9:77:CC:72", name: "NP100SCC72  ", RSSI: -47
//     }
// ];
// var aa = devices.map(function (v) {
//     return v.deviceId
// });
// console.log(aa[1]);
// console.log(devices[0]["deviceId"]);
//
// function aaa() {
//
//     var bb ="13";
//     function sss() {
//         cc =bb;
//         return cc
// }return sss()
// }
// console.log(aaa());
//奖励
//视图的生成
// var buffer =new ArrayBuffer(20);
// console.log(buffer.byteLength);
// //在ArrayBuffer对象之上生成视图。
// var b = new ArrayBuffer(8);
// var v1 =new Int32Array(b);
// var v2=new Uint8Array(b,2);
// var v3 =new Int16Array(b,2,2);
// //直接生成
// var f64a= new Float64Array(8);
// f64a[0]=10;
// f64a[1]=20;
// f64a[2]=f64a[0]+f64a[1];
// //将普通数组转为视图数组;
// var typerArray= new Uint8Array([1,2,3,4]);
// //视图数组转为普通数组
// var normalArray= Array.apply([],typerArray);
//视图的操作:
//数组操作:
// var buffer = new ArrayBuffer(16);
// var int32View = new Int32Array(buffer);
// for (var i = 0; i < int32View.length; i++) {
//     int32View[i] = i * 2;
// }
// var int16View = new Int16Array(buffer);
// for (var i = 0; i < int16View.length; i++) {
//     console.log("Entry" + i + ': ' + int16View[i])
// }

//ArrayBuffer与字符串的相互转换;
// function ab2srt(buf) {  //
//     // ArrayBuffer转为字符串，参数为ArrayBuffer对象
//     return String.fromCharCode.apply(null, new Uint16Array(buf))
// }

//// 字符串转为ArrayBuffer对象，参数为字符串:
// function str2ab(str) {
//     var buf = new ArrayBuffer(str.length * 2); //每个字符占用2个字节;
//     var bufView = new Uint16Array(buf);
//     for (var i = 0, strLen = str.length; i < strLen; i++) {
//         bufView[i] = str.charCodeAt(i);
//     }
//     return buf;
//
// }
// var str="abc";
// console.log(str2ab(str));

// var uint8Buf =that.str2ab(that.data.send_data);
// let buffer = new ArrayBuffer(that.data.send_data.length);
// let dataView= new DataView(buffer);
// for(var i=0;i<that.data.send.data.length;++i){
//     dataView.setUint8(i,uint8Buf[i])
// }

// var str="123"+"abc";
// var strarr=[]
// for(var i=0;i<str.length;i++){
//     strarr[i]=str.charCodeAt(i);
// }
// console.log(strarr);

// var RMB = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '拾', '佰', '仟', '万', '亿'];
// var num = "6";
// var numarr = num.split("");
// var reg = /\./g;
// console.log("长度:" + num.length, "小数点位置:" + num.search(reg));
// var num2rmb = [];
// for (var i = 0; i < numarr.length; i++) {
//
//     num2rmb[i] = RMB[numarr[i]];
// }
// console.log(num2rmb);
// console.log(num2rmb.join('').split(''));
// if (num.search(reg) == 1 && num2rmb.length == 4) {
//     alert(num2rmb[0] + "元" + num2rmb[2] + "角" + num2rmb[3] + "分")
// }
// if (num.search(reg) == 1 && num2rmb.length == 3) {
//     alert(num2rmb[0] + "元" + num2rmb[2] + "角")
// }
// if (num2rmb.length == 1 && num.search(reg) < 0) {
//     alert(num2rmb + "元")
// }
// if (num2rmb.length == 2 && num.search(reg) < 0) {
//     alert(num2rmb[0] + "拾" + num2rmb[1] + "元")
//
// }
// if (num2rmb.length == 3 && num.search(reg) < 0) {
//     alert(num2rmb[0] + "佰" + num2rmb[1] + "拾" + num2rmb[2] + "元")
//
// }
// if (num2rmb.length == 4 && num.search(reg) < 0) {
//     alert(num2rmb[0] + "仟" + num2rmb[1] + "佰" + num2rmb[2] + "拾" + num2rmb[3] + "元");
// }
// if (num2rmb.length == 5 && num.search(reg) < 0) {
//     alert(num2rmb[0] + "万" + num2rmb[1] + "仟" + num2rmb[2] + "佰" + num2rmb[3] + "拾" + num2rmb[4] + "元");
// }
// if (num.search(reg) == 2 && num2rmb.length == 4) {
//     alert(num2rmb[0] + "拾" + num2rmb[1] + "元" + num2rmb[3] + "角")
// }
// if (num.search(reg) == 2 && num2rmb.length == 5) {
//     alert(num2rmb[0] + "拾" + num2rmb[1] + "元" + num2rmb[3] + "角" + num2rmb[4] + "分")
// }
// if (num.search(reg) == 3 && num2rmb.length == 6) {
//     alert(num2rmb[0] + "佰" + num2rmb[1] + "拾" + num2rmb[2] + "元" + num2rmb[4] + "角" + num2rmb[5] + "分")
// }
// if (num.search(reg) == 3 && num2rmb.length == 5) {
//     alert(num2rmb[0] + "佰" + num2rmb[1] + "拾" + num2rmb[2] + "元" + num2rmb[4] + "角")
// }
// if (num.search(reg) == 4 && num2rmb.length == 6) {
//     alert(num2rmb[0] + "仟" + num2rmb[1] + "佰" + num2rmb[2] + "拾" + num2rmb[3] + "元" + num2rmb[5] + "角")
// }
// if (num.search(reg) == 4 && num2rmb.length == 7) {
//     alert(num2rmb[0] + "仟" + num2rmb[1] + "佰" + num2rmb[2] + "拾" + num2rmb[3] + "元" + num2rmb[5] + "角" + num2rmb[6] + "分")
// }
// if (num.search(reg) == 5 && num2rmb.length == 8) {
//     alert(num2rmb[0] + "万" + num2rmb[1] + "仟" + num2rmb[2] + "佰" + num2rmb[3] + "拾" + num2rmb[4] + "元" + num2rmb[6] + "角" + num2rmb[7] + "分")
// }
// if (num.search(reg) == 5 && num2rmb.length == 7) {
//     alert(num2rmb[0] + "万" + num2rmb[1] + "仟" + num2rmb[2] + "佰" + num2rmb[3] + "拾" + num2rmb[4] + "元" + num2rmb[6] + "角")
// }

// var obj = {
//     a: {w: 1, y: 2, x: 3},
//     b: {s: 4, j: 5, x: 6},
//     c: {car: 7, cat: 8, mao: 9}
// };
//
// function f(s) {
//     for (var i in s) {
//         if (typeof s[i] == "object") {
//             f(s[i])
//         } else {
//             console.log(s[i]);
//         }
//     }
// }
//
// f(obj);


// var datas = [
//     {
//         "name": "赵三",
//         "age": "18"
//     },
//     {
//         "name": "李四",
//         "age": "20"
//     }
// ];
// for (var i = 0; i < datas.length; i++) {
//     if (datas[i].name == '赵三') {
//         var data=datas[i];
//         console.log(data.age)
//     }
//
// }
// var pp=document.getElementById('pp');
// //
// // setTimeout(function(){document.getElementById("pp").innerText='123';pp.style.color='red'},2000);
// //
// //  function displayDate(){
// //    document.getElementById('date').innerHTML=Date()
// //  }
// //  document.getElementById('btn').onclick=function(){displayDate()};
// //  document.getElementById('btn').addEventListener('click',function(){
// //      alert('hello world')
// //  });
// // document.getElementById('btn').addEventListener('mouseover',function(){
// //     document.getElementById('date').innerHTML ='mouse over!<br>'
// // });
// // document.getElementById('btn').addEventListener('mouseout',function(){
// //     document.getElementById('date').innerHTML ='mouse out!<br>'
// // });
// // var para=document.createElement('p');
// // var text=document.createTextNode('新建的段落文本');
// // para.appendChild(text);
// // document.getElementById('div').appendChild(para);
//var str = 'FB020D0A';
//
//alert(str.match(/[0-9a-f]{2}/gi));

