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
		$('#content').load('../pages/movie.html',function(){
			$('a.movie1').bind('click',function(){
			$('div.movies').load('../pages/movie-1.html',loadMovie1);
			});
		});
		};

		var loadHomepage = function(){
		//一定要在load完成后的回调函数中给load进来的页面元素绑定
		$('#content').load('../pages/tooltip.html',function(){
			$('a.tooltip').bind('focusout',function(){
				$('div.photo1').css('opacity','0');
			});
			$('a.tooltip').bind('click',function(){
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
		
	});
	
	

})(jQuery);