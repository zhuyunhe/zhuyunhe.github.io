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
			$('div.movies').load('./pages/movie-1.html',function(){
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

				var movieName = "砰然心动~";

				loadMovieSlide(movieName,slideArray,imgDir,descripArray);

				});
			});

			//第二部电影的点击事件
			$('a.movie2').on('click',function(){
			$('div.movies').load('./pages/movie-1.html',function(){
				var slideArray = [
								"1.jpg",
								"2.jpg",
								"3.jpg",
								"4.jpg",
								];

				var descripArray = [
					"<h1>You don't know about real loss……'cause that only occurs when you love something more than you love yourself.</h1><h1>你不了解真正的失去，唯有爱别人胜于自己才能体会。</h1>"
					,
					"<h1>Little things like that.Ah,but,those are the things I miss the most.</h1><h1>像那样的小事很奇妙，但那是我最想念的事。</h1>"
					,
					"<h1>I'd knock on the door and you wouldn't be there. You just left.</h1><h1>每次敲门都希望你不在。不说再见，就这么走了。</h1>"
					,
					"<h1>Sorry, I had to go see about a girl. </h1><h1>跟他说抱歉，我要去找个女孩。</h1>"
				];
				//图片所在的目录
				var imgDir = './images/movies/movie-2/';

				var movieName = "心灵捕手~";

				loadMovieSlide(movieName,slideArray,imgDir,descripArray);
			});
			});


			//第三部电影的点击事件/测试
			$('a.movie3').on('click',function(){
			$('div.movies').load('./pages/movie-1.html',function(){
				var slideArray = [
								"1.jpg",
								"2.jpg",
								"3.jpg",
								"4.jpg",
								];

				var descripArray = [
					"<h1>You don't know about real loss……'cause that only occurs when you love something more than you love yourself.</h1><h1>你不了解真正的失去，唯有爱别人胜于自己才能体会。</h1>"
					,
					"<h1>Little things like that.Ah,but,those are the things I miss the most.</h1><h1>像那样的小事很奇妙，但那是我最想念的事。</h1>"
					,
					"<h1>I'd knock on the door and you wouldn't be there. You just left.</h1><h1>每次敲门都希望你不在。不说再见，就这么走了。</h1>"
					,
					"<h1>Sorry, I had to go see about a girl. </h1><h1>跟他说抱歉，我要去找个女孩。</h1>"
				];
				//图片所在的目录
				var imgDir = './images/movies/movie-2/';

				var movieName = "当幸福来敲门~";

				loadMovieSlide(movieName,slideArray,imgDir,descripArray);
			});
			});

			//第三部电影的点击事件/测试
			$('a.movie4').on('click',function(){
			$('div.movies').load('./pages/movie-1.html',function(){
				var slideArray = [
								"1.jpg",
								"2.jpg",
								"3.jpg",
								"4.jpg",
								];

				var descripArray = [
					"<h1>You don't know about real loss……'cause that only occurs when you love something more than you love yourself.</h1><h1>你不了解真正的失去，唯有爱别人胜于自己才能体会。</h1>"
					,
					"<h1>Little things like that.Ah,but,those are the things I miss the most.</h1><h1>像那样的小事很奇妙，但那是我最想念的事。</h1>"
					,
					"<h1>I'd knock on the door and you wouldn't be there. You just left.</h1><h1>每次敲门都希望你不在。不说再见，就这么走了。</h1>"
					,
					"<h1>Sorry, I had to go see about a girl. </h1><h1>跟他说抱歉，我要去找个女孩。</h1>"
				];
				//图片所在的目录
				var imgDir = './images/movies/movie-2/';

				var movieName = "宫崎骏系列~";

				loadMovieSlide(movieName,slideArray,imgDir,descripArray);
			});
			});

			//$('ul.movie-menu-nav li a').eq(0).click();
			
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

	var year = today.getFullYear();		//得到年
	var month = today.getMonth()+1;		//得到月份
	var date = today.getDate();		//得到月份中的天数
	var hour = today.getHours();		//得到小时数
	var minute = today.getMinutes()<10?'0'+today.getMinutes():today.getMinutes();	//得到日期的分钟数
	var second = today.getSeconds()<10?'0'+today.getSeconds():today.getSeconds();	//得到秒数

	$('.time').html( year + "年" + month + "月" + date + "日" + dayStr +" " + hour + ":" + minute + ":" + second);
	setTimeout("setTime();",1000);
}