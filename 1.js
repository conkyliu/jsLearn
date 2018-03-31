
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


