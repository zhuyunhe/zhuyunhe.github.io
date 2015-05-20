/*(function($){
	$(function(){
		var $nav = $("#navigation");
		var $current_item = $nav.find('.focus');
		var $lava = $('<li class="lava"/>');
		//命名空间
		var option={
			gap:20,
			speed:400,
			easing:'easeInOutElastic',
			reset:2000
		}
		$lava.css({
			width:$current_item.outerWidth(),
			height:$current_item.outerHeight(),
			backgroundColor:'#eee'
			}).appendTo($nav.find('ul'));
		$nav.css('position','relative');
		$lava.css({
			position:'absolute',
			height:$current_item.outerHeight()+option.gap,
			top:$current_item.position().top-(option.gap/2),
			left:$current_item.position().left,
		});
		$nav.css('position','relative')
			.find('a').css({
				position:'relative',
				zIndex:1
			});
		//更新$current_item
		$nav.find('li').bind('click',function(){
			$current_item = $(this);
		});
		//绑定事件处理函数
		$nav.find('li').bind('mouseover focusin',function(){
			$lava.animate({
				left:$(this).position().left,
				width:$(this).outerWidth()
			},{
				duration:option.speed,
				easing:option.easing,
				queue:false
			})
		});
		$nav.find('li').bind('mouseout',function(){
			setTimeout(function(){
				$lava.animate({
					left:$current_item.position().left,
					width:$current_item.outerWidth()
				},option.speed);
			},option.reset);
		});
	});
})(jQuery);*/
;(function($){
	$(function(){
		var loadMovie = function(){
		$('#content').load('./pages/movie.html',function(){


			//第一部电影的点击事件
			$('a.movie1').on('click',function(){
			$('div.movies').load('./pages/movie-1.html',loadMovie1);
			});

			//第二部电影的点击事件
			$('a.movie2').on('click',function(){
			$('div.movies').load('./pages/movie-1.html',loadMovie1);
			});



			$('ul.movie-menu-nav li a').eq(0).click();
			
		});
		};

		var loadHomepage = function(){
		//一定要在load完成后的回调函数中给load进来的页面元素绑定
		$('#content').load('./pages/tooltip.html',function(){
			$('a.tooltip').on('focusout',function(){
				$('div.photo1').css('opacity','0');
			});
			$('a.tooltip').on('click',function(){
				$('div.photo1').css('opacity','1');
			});
		});
		};
		//初始化载入主页面
		loadHomepage();

		$('.movie').bind('click',function(){
			loadMovie();
			
		});

		$('.homepage').bind('click',function(){
			loadHomepage();
		});

		//显示当前时间
		setTime();

		

	});
})(jQuery);

//显示当前时间的函数
function setTime(){
	var today = new Date();

	//星期-数字
	var n_day = today.getDay();

	//星期-汉字
	var dayStr;
	switch(n_day){
		case 0:{
			dayStr = "星期日";
		}break;
		case 1:{
			dayStr = "星期一";
		}break;
		case 2:{
			dayStr = "星期二";
		}break;
		case 3:{
			dayStr = "星期三";
		}break;
		case 4:{
			dayStr = "星期四";
		}break;
		case 5:{
			dayStr = "星期五";
		}break;
		case 6:{
			dayStr = "星期六";
		}break;
	}

	var year = today.getFullYear();	//得到年
	var month = today.getMonth()+1;	//得到月份
	var date = today.getDate();	//得到月份中的天数
	var hour = today.getHours();	//得到小时数
	var minute = today.getMinutes();	//得到日期的分钟数
	var second = today.getSeconds();	//得到秒数

	$('.time').html( year + "年" + month + "月" + date + "日" + dayStr +" " + hour + ":" + minute + ":" + second);
	setTimeout("setTime();",1000);
}