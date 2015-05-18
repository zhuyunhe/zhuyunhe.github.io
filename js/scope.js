var arg = 1;

function test(){
	var arg = 1;
	alert(arg); //1
}
arg = 100;

test();


    function myFunction(){  
        var result = new Array();  
        for(var i=0; i<10; i++){  
        result[i] = function(){  
            return i;  
        };  
        }  
        return result;  
    }  

var arr = myFunction();
alert(arr[1]());
alert(arr[2]());

//定义一个用于比较两个对象的函数，按照对象的某个属性来比较
function comparisonFunction(propertyName){
	return function(object1,object2){
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];

		if(value1 < value2){
			return -1;
		} else if(value1 > value2){
			return 1;
		} else{
			return 0;
		}
	};
}

//创建函数
var compareNameFunction = comparisonFunction("name");

//调用比较函数
var result = compareNameFunction({name:"zhu"},{name:"zhang"});

//解除对匿名函数的引用，释放内存
compareNameFunction = null;