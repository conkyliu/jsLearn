//---创建对象---
// function aa() {
//     aa.prototype.name = "conky"; //每个构造函数自带prototype属性 可共享其属性和方法
//     aa.prototype.job = "web learner";
//     aa.prototype.say = function () {
//         alert(this.name + " is " + this.job)
//     }
// }
//
// var person1 = new aa();//创造新对象/实例
//  person2 = new aa();   //没用 var 也正常运行,只是创建了一个全局对象的属性 ,不是声明了一个全局变量;
//
// person1.say(); //调用构造函数
// person2.name="conkyliu";
// //alert(Object.getPrototypeOf(person1).job);//es5 新方法
// alert(person2.name);
// delete person2.name;
// alert(person2.name);
// var keys =Object.getOwnPropertyNames(aa.prototype);
// alert(keys);
//
// String.prototype.bb = function (text) {
//     return this.indexOf(text) == 0; //不建议修改原生对象的原型,
//
// };
// var msg ="hihih"
// alert(msg.bb("hi"))
// function aa() {
// };                //简写 原型语法
// aa.prototype = {
//
//     name: "conky",
//     job: "web learner",
//     say: function () {
//         alert(this.name + " is " + this.job)
//     },
//     id: [1, 2, 3]
// };
//
// var person1 = new aa();
// var person2 = new aa();
// person1.id.push(18)  //原型模式无法让实例单独拥有自己的属性 ,prototype是共享的 所以很少人用这个模型.
// alert(person1.id);
// alert(person2.id);
// function aa(name, job, age) {
//     this.name = name;
//     this.job = job;
//     this.age = age;
//     this.id=[1,2,3]
// }

// aa.prototype = {
//      constructor:aa,
//     say: function () {
//         alert(this.name + " a " + this.job +this.age); //构造函数+原型模式,可拥有自己的属性值,不会共享
//     }
// }
// var person1 = new aa("conky", "web learner", "22");
// var person2 = new aa("tommy emmanuale", "guitarist", "60");
//  person1.id.push(66);
//
// alert(person1.say());
// alert(person2.say());
// alert(person1.id==person2.id);
// alert(person2.id);
//
// function aa(name, job, age) {
//     this.name = name;
//     this.job = job;
//     this.age = age;
//     if (typeof this.say != "function") {
//         aa.prototype.say = function () {    //对原型的修改,会立即所有实例得到反映,无法使用对象字面量重写原型(简写)
//             alert(this.job)
//         };
//     }
//
//
// }
// var person =new aa("conky","lerner",22);
// person.say();

// function aa() {
//     var values = new Array();
//     values.push.apply(values, arguments);
//     values.changestring = function () {
//         return this.join("|")      //返回的对象与构造函数或者构造函数的原型属性没有关系
//     };
// return values;
// }
// var color=new aa("red","green","blue")
// alert(color.changestring());
// function aa(name, job, age) {
//     var o = new Object();           //与寄生构造函数类似,不引用this和不使用new /安全性高
//
//     o.say = function () {
//         alert( job)
//     }
//     return o
// }
// var person = aa("conky","web learner",18);
// person.say();

//---继承---
// function SuperType() {
//     this.property = true;
// }
//
// SuperType.prototype.getSuperValue = function () {
//     return this.property;
// };
//
// function SubType() {
//     this.subproperty = false;
//
// }
//
// SubType.prototype = new SuperType();
// SubType.prototype.getSubValue = function () {
//     return this.subproperty;
// };
// var instance = new SubType();
// alert(instance.getSuperValue());

// function aa() {
//     this.ii = true;
//
// };
// aa.prototype.getaa = function
//     () {
//     return this.ii
// };
//
// function bb() {
//     this.kk = false;
// }
//
// bb.prototype = new aa();  //继承了aa 使得bb拥有aa的属性和方法
// bb.prototype.getbb = function () {
//     return this.kk;
// };
// var cc = new bb();  //a=b,c=b,故c=a
// alert(cc.getaa());

// function aa() {
//     this.ii = true;
// };

// aa.prototype.getaa = function () {
//     return this.ii;
// };
// function bb(){
//      this.kk= false;
// }
// bb.prototype=function getbb(){
//     return this.kk;
// };
// bb.prototype=new aa();  //继承aa
// bb.prototype.getbb=function(){  //添加新方法
//     return this.bb
// };
// bb.prototype.getaa=function (){   //重写超类型中的方法
//     return false;
// };
// var cc=new bb();  //调用的是重写的方法
// var dd=new aa();  //调用的是原来的方法
// alert(cc.getaa()); //false
// alert(dd.getaa());  //true


// function aa() {
//     this.ii = true;
// };
// aa.prototype = function getaa() {
//     return this.ii;
// };
//
// function bb() {
//     this.kk = false;
// }
//
// bb.prototype = function getbb() {
//     return this.kk;
// };
// bb.prototype = new aa(); //继承
// bb.prototype = {
//     getbb: function () {  //使用字面量添加新方法,会导致上一行的代码无效
//         return this.bb
//     },
//
// };
// var cc = new bb();
//
// alert(cc.getaa());  //ereor
//原型链
// function aa() {
//     this.color = ["red", "green", "blue"];
// };
// function bb(){
// }
// bb.prototype=new aa(); //继承
// var cc= new bb();
//
// cc.color.push('black');
// alert(cc.color);
// var dd= new bb();
// alert(dd.color);  //bb()属性的值被共享了
//
//借用构造函数
// function aa() {
//     this.color = ["red", "blue", "yellow"];
// }
//
// function bb() {
//     aa.call(this) //继承
// }
//
// var cc = new bb();
// cc.color.push("black");
// alert(cc.color);
// var dd=new bb();
// alert(dd.color); //bb()属性的值不会被共享
// function aa(name) {
//     this.name = name; //属性名等于参数名
//
// }
//
// function bb() {
//     aa.call(this, "conky"); //继承和传递参数
//     this.age = 22; //实例属性
// }
//
// var cc = new bb();
// alert(cc.name);
// var dd = new aa("liu");
// alert(dd.name);
// function aa(name) {
//     this.name = name;
//     this.color = ["red", "green", "blue"];
// }
//
// aa.prototype.sayname = function () {
//     alert(this.name);
// };
//组合继承
// function bb(name, age) {
//     aa.call(this, name);  //继承属性
//     this.age = age;
// }
//
// bb.prototype = new aa();  //继承方法
// bb.prototype.constructor = bb;
// bb.prototype.sayage = function () {
//     alert(this.age);
// };
// bb.prototype.num=function(num1,num2){
//    num=num1+num2;
//     alert(num);
// };
// var cc = new bb("conky", 22);
// cc.color.push("black");
// alert(cc.color);
// cc.sayname();
// cc.sayage();
// cc.num(3,4);
// var dd = new aa("liu", 66);
// alert(dd.color);
// dd.sayname();
// dd.sayage();
// dd.num(1,2);
//原型式继承
// var person={
//     name:"conky",
//     id:[1,2,3]
// };
// var person2=Object(person);
// person2.name="liu";
// person2.id.push(4);
// alert(person2.id);
// var person3=Object(person);
// person3.name="ling";
// person3.id.push(5);
// alert(person3.id);
// alert(person.id);
//寄生式继承
// function aa(ii) {
//     var clone = Object(ii);  //通过调用函数创建一个新对象
//     clone.sayhi = function () {  //某种方式来增强这个对象
//         alert("hi")
//     };
//     return clone;    //返回这个对象
// }
// var person={
//     name:"conky",
//     age:22,
//
// };
// var person2=aa(person);
// person2.sayhi();
//寄生组合式继承:
// function aa(cc,bb){
//     var ii=Object(bb.prototype);  //创建对象
//     ii.constructor=cc;            //增强对象
//     cc.prototype=ii;              //指定对象
// }
// function bb(name){
//     this.name=name;
//     this.color=["red","blue","green"];
//
// }
// bb.prototype.sayname=function(){
//     alert(this.name);
// };
// function cc(name,age){
//     bb.call(this,name); //继承bb.name
//     this.age=age;
// }
// aa(cc,bb);
// cc.prototype.sayage=function(){
//     alert(this.age)
// };
// var dd=new cc("conky",22);
// dd.color.push("black");
// alert(dd.color);
// dd.sayname();
// dd.sayage();
// var ff= new bb("liu",66);
// alert(ff.color);
// ff.sayname();
// ff.sayage(); //undifined bb没有这个属性 cc不共享
//

//枚举对象的所有属性:
/*for...in 循环*/
// var obj = {a: 1, b: 2, c: 3};
// for (var aa in obj) {
//     console.log(aa)//打印属性名;
//     console.log(obj[aa])//打印属性值
// };
/*Object.keys(o)*/
// var arr=["a","b","c"];
// console.log(Object.keys(arr))//打印出属性名的位置
// var obj={a:1,b:2,c:3};
// console.log(Object.keys(obj)); //打印属性名

//创建新对象:
/*使用 Object.create 方法*/
// var Animal = {
//     type: "aadd",
//     displaytype: function () {
//         console.log(this.type)
//     }
// };
// var animall = Object.create(Animal);
// animall.displaytype();
// var fish = Object.create(Animal);
// fish.type = "yu";
// fish.displaytype();
/*稳妥构造函数模式*/
// function Person(name,old,job) {
//     var o= new Object()
//     o.sayname=function(){
//         alert(name)
//     };
//     return o;
// }
// var man= Person("conky",23,"lerner");
// man.sayname();
// var man2=Object.create(man);




// // Warn if overriding existing method
// if(Array.prototype.equals)
//     console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// // attach the .equals method to Array's prototype to call it on any array
// Array.prototype.equals = function (array) {
//     // if the other array is a falsy value, return
//     if (!array)
//         return false;
//     // compare lengths - can save a lot of time
//     if (this.length != array.length)
//         return false;
//     for (var i = 0, l = this.length; i < l; i++) {
//         // Check if we have nested arrays
//         if (this[i] instanceof Array && array[i] instanceof Array) {
//             // recurse into the nested arrays
//             if (!this[i].equals(array[i]))
//                 return false;
//         }
//         else if (this[i] != array[i]) {
//             // Warning - two different object instances will never be equal: {x:20} != {x:20}
//             return false;
//         }
//     }
//     return true;
// }
// // Hide method from for-in loops
// Object.defineProperty(Array.prototype, "equals", {enumerable: false});

// const compare = (() => {
// //     function compareArray(a, b) {
// //         console.log("array", a, b);
// //         if (a.length !== b.length) {
// //             return false;
// //         }
// //         const length = a.length;
// //         for (let i = 0; i < length; i++) {
// //             if (!compare(a[i], b[i])) {
// //                 return false;
// //             }
// //         }
// //
// //         return true;
// //     }
// //
// //     function compareObject(a, b) {
// //         console.log("object", a, b);
// //         const keya = Object.keys(a);
// //         const keyb = Object.keys(b);
// //
// //         if (keya.length !== keyb.length) {
// //             return false;
// //         }
// //
// //         return keya.every(key => {
// //             if (!compare(a[key], b[key])) {
// //                 return false;
// //             }
// //             return true;
// //         });
// //     }
// //
// //     function compare(a, b) {
// //         if (a === b) {
// //             return true;
// //         }
// //
// //         if (typeof a !== typeof b || a === null || b === null) {
// //             return false;
// //         }
// //
// //         if (Array.isArray(a)) {
// //             if (!Array.isArray(b)) {
// //                 return false;
// //             }
// //             return compareArray(a, b);
// //         }
// //
// //         if (typeof a === "object") {
// //             return compareObject(a, b);
// //         }
// //
// //         console.log("value", a, b);
// //         return false;
// //     }
// //
// //     return compare;
// // })();
// //
// //
// // var aa = [{ Name: "YuanXP", Id: 9 }, { Name: "YuanX", Id: 9 }];
// // var bb = [{ Name: "YuanXP", Id: 9 }, { Id: 9, Name: "YuanX" }];
// // var cc = [{ Name: "YuanXP", Id: 19 }, { Id: 9, Name: "YuanX" }];
// //
// // // console.log(compare(aa, bb));
// // // console.log(compare(aa, cc));
// //
// // var arr1=[1,200,100];
// // var arr2=[100,108,102,,1000,200,1];
// // console.log(compare(arr1,arr2));
// // alert(arr2.sort())

var attr=new Array(4);
attr.splice(2,1,'qq');
console.log(attr)