
function Person(name,age){
	this.name = name;
	this.age = age;
	if (typeof this.sayName != "function") {
	Person.prototype.sayHello = function(){
	alert("hello");
	};	 
}
}


var person1 = new Person("zhu",24);

//屏蔽原型对象中的保存的同名属性
person1.sayHello = function(){
	alert("byebye");
};

//person1.sayHello();  //弹出框显示“byebye”

var person2 = new Person("li",24);
//访问的是原型对象中的属性
//person2.sayHello();  //弹出框显示“hello”

window.color = "red";
var o = {color : "yellow"};

function sayColor(){
    alert(this.color);
}
sayColor.apply(o);  //yellow
sayColor.call(o);  //yellow

sayColor();  //red
sayColor.call(window);  //red

/*(function(){
	var person = new Person("zhu",24);
	person.sayHello();
})();*/