;(function($){
	$(function(){

	});
})(jQuery);

function loadMovie1(){
	var slideArray = [
		"1.jpg",
		"2.jpg",
		"3.jpg",
		"4.jpg",
		"5.jpg",
		"6.jpg",
		"7.jpg",
		"8.jpg",
	];

	//图片所在的目录
	var imgDir = '../images/movies/movie-1/';

	//向容器内添加一个一个div元素用来存放稍后放进来的所有图片
	$('.movie-1').append('<div class="slide-image"></div>');

	//放入第一张图片
	$('.slide-image').append('<img src="../images/movies/movie-1/'+slideArray[0]+'"/>');

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
	});
}