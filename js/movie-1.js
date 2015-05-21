;(function($){
	$(function(){

	});
})(jQuery);

//载入第一部电影的函数
function loadMovie1(){
	var slideArray = [
		"1.jpg",
		"2.jpg",
		"3.jpg",
		"4.jpg",
	];

	var descripArray = [
		"<h1>Some of us get dipped in flat, some in satin, some in gloss.<br/> But every once in a while you find someone who's iridescent, and when you do, nothing will ever compare. </h1><h1>有人住高楼,有人在深沟,有人光万丈,有人一身锈,<br/>世人万千种,浮云莫去求,斯人若彩虹,遇上方知有。</h1>"
		,
		"<h1>A painting is more than the sum of its parts. A cow by itself is just a cow. A meadow by itself is just grass, flowers.<br/> And the sun peeking through the trees is just a beam of light. <br/>But you put them all together and it can be magic.</h1><h1>一幅画不是众多物件简单拼凑而成的。<br/>牛只是一头牛，草地也只有青草和鲜花，而穿过树枝的阳光也仅仅只是一束光，但如果将它们放到一起，就会产生魔一般的魅力。</h1>"
		,
		"<h1>The higher I got, the more amazed I was by the view.</h1><h1>我爬的越高，眼前的风景便愈发迷人。</h1>"
		,
		"<h1>I had flipped. Completely. </h1>"
	];
	//图片所在的目录
	var imgDir = './images/movies/movie-1/';

	$('.movie-1').append('<h1>怦然心动</h1>');

	//向容器内添加一个一个div元素用来存放稍后放进来的所有图片
	$('.movie-1').append('<div class="slide-image"></div>');

	//放入第一张图片
	$('.slide-image').append('<img src="./images/movies/movie-1/'+slideArray[0]+'"/>');

	//图片后增加一个无序列表用作导航
	$('.slide-image').after('<ul id="nav"></ul>');

	var slideLength = slideArray.length;

	for(var i=0; i<slideLength; i++){
		var slideText = i+1;
		$('#nav').append('<li><a href="javascript:void(0)" rel="'+slideText+'">'+slideText+'</a></li>');
	}

	//当前浏览的标签,暂时不用
	var $a;

	//为元素绑定click事件
	$('#nav li a').bind('click',function(){
		//得到当前点击图片的编号
		var numSlide = $(this).attr('rel');
		$('.slide-image').html('<img src="'+imgDir+numSlide+'.jpg" hidden/>');
		$('.slide-image img').fadeIn();
		$('#nav li a').removeClass('active');
		$a = $(this);
		$(this).addClass('active');
		//先清空原先的图片描述
		$('.movie-descrip').html('');
		//添加新的图片描述
		$('.movie-descrip').append(descripArray[numSlide-1]);
	});

	$('#nav li a').eq(0).click();

	var curIndex = 0;
	var delayTime = 6000;	//设置图片自动切换时间

	//图片自动切换的函数
	setInterval(function(){
		if (curIndex == slideArray.length-1) {
			curIndex = 0;
		} else {
			curIndex += 1;
		}
	   	$('.slide-image').html('<img src="'+imgDir+(curIndex+1)+'.jpg" hidden/>');
		$('.slide-image img').fadeIn();
		$('#nav li a').removeClass('active');

		//设置当前切换到的a标签为高亮
		$('#nav li a').eq(curIndex).addClass('active');
		//先清空原先的图片描述
		$('.movie-descrip').html('');
		//添加新的图片描述
		$('.movie-descrip').append(descripArray[curIndex]);
	},delayTime);
}

//载入第二部电影的函数
function loadMovie2(){
	var slideArray = [
		"1.jpg",
		"2.jpg",
		"3.jpg",
		"4.jpg",
	];

	var descripArray = [
		"<h1>Some of us get dipped in flat, some in satin, some in gloss.<br/> But every once in a while you find someone who's iridescent, and when you do, nothing will ever compare. </h1><h1>有人住高楼,有人在深沟,有人光万丈,有人一身锈,<br/>世人万千种,浮云莫去求,斯人若彩虹,遇上方知有。</h1>"
		,
		"<h1>A painting is more than the sum of its parts. A cow by itself is just a cow. A meadow by itself is just grass, flowers.<br/> And the sun peeking through the trees is just a beam of light. <br/>But you put them all together and it can be magic.</h1><h1>一幅画不是众多物件简单拼凑而成的。<br/>牛只是一头牛，草地也只有青草和鲜花，而穿过树枝的阳光也仅仅只是一束光，但如果将它们放到一起，就会产生魔一般的魅力。</h1>"
		,
		"<h1>The higher I got, the more amazed I was by the view.</h1><h1>我爬的越高，眼前的风景便愈发迷人。</h1>"
		,
		"<h1>I had flipped. Completely. </h1>"
	];
	//图片所在的目录
	var imgDir = '../images/movies/movie-1/';

	$('.movie-1').append('<h1>aaaaaaaa</h1>');
	//向容器内添加一个一个div元素用来存放稍后放进来的所有图片
	$('.movie-1').append('<div class="slide-image"></div>');

	//放入第一张图片
	$('.slide-image').append('<img src="./images/movies/movie-1/'+slideArray[0]+'"/>');

	//图片后增加一个无序列表用作导航
	$('.slide-image').after('<ul id="nav"></ul>');

	var slideLength = slideArray.length;

	for(var i=0; i<slideLength; i++){
		var slideText = i+1;
		$('#nav').append('<li><a href="javascript:void(0)" rel="'+slideText+'">'+slideText+'</a></li>');
	}

	//为元素绑定click事件
	$('#nav li a').bind('click',function(){
		//得到当前点击图片的编号
		var numSlide = $(this).attr('rel');
		$('.slide-image').html('<img src="'+imgDir+numSlide+'.jpg"/>');
		$('.slide-image img').fadeIn();
		$('#nav li a').removeClass('active');
		$(this).addClass('active');
		//先清空原先的图片描述
		$('.movie-descrip').html('');
		//添加新的图片描述
		$('.movie-descrip').append(descripArray[numSlide-1]);
	});

	$('#nav li a').eq(0).click();
}

