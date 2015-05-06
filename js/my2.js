function SuperType(name){
	this.name = name;
	this.colors = ["red","yellow"];
}

SuperType.prototype.sayName = function(){
	alert(this.name);
};

function SubType(name,age){
	//借用父类的构造函数，这样SubType的实例中就有了name和colors这两个实例属性，这两个属性就是每个实例独有的了
	SuperType.call(this,name);
	this.age = age;
}

//继承方法
SubType.prototype = new SuperType();
//这是把SubType的constructor属性改回来，创建SubType实例时调用SubType的构造函数
SubType.prototype.constructor = SubType;

//在SubType的新原型上添加一个方法
SubType.prototype.sayAge = function(){
	alert(this.age);
};

var instance1 = new SubType("zhu",24);
instance1.colors.push("black");
alert(instance1.colors);  //red,yellow black
instance1.sayName();  //zhu
instance1.sayAge(); 	//24

var instance2 = new SubType("li",23);
instance2.colors.push("blue");
alert(instance2.colors);  //red,yellow blue
instance2.sayName();  //li
instance2.sayAge(); 	//23