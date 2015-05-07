/*function SuperType(name){
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
instance2.sayAge(); 	//23*/

/*var text = "mom dad baby";
var pattern = /mom( dad( baby)?)?/gi;

var matches = pattern.exec(text);
alert(matches.index);  //0,index是matches的额外属性，表示匹配项在字符串中位置
alert(matches.input);  //input属性表示应用该正则表达式的字符串，这里就是"mom dad baby"
alert(matches[0]);  //"mom dad baby"
alert(matches[1]);  //" dad baby"
alert(matches[2]);  //" baby"*/

/*var text = "mom dad baby";
var pattern = /mom( dad( baby)?)?/gi;

var matches = text.match(pattern);
alert(matches.index);  //undefined
alert(matches.input);  //undefined
alert(matches[0]);  //"mom dad baby"
alert(matches[1]);  //undefined
alert(matches[2]);  //undefined*/

var text = "she is a beautiful girl";
var pattern = /(.)eautiful/g;

if(pattern.test(text)){
	alert(RegExp.input);		//she is a beautiful girl,最近要匹配的一个字符串
	alert(RegExp.lastMatch);	//beautiful,最近的一个匹配项
	alert(RegExp.lastParen);	//b,最近一次匹配的捕获组
	alert(RegExp.leftContext);		//she is a ,input字符串中lastMatch之前的文本
	alert(RegExp.multiline);		//布尔值，是否设置了多行
	alert(RegExp.rightContext);	// girl,input字符串中lastMatch之后的文本
}