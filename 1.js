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


