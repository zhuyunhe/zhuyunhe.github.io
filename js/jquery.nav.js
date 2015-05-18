;(function($){
	$.fn.nav=function(options){
		var defaults={
			gap:20,
			speed:400,
			easing:'easeInOutElastic',
			reset:1000
		};
		options = $.extend(defaults,options);

		return this.each(function(){
		var $nav = $("#navigation");
		var $current_item = $nav.find('.focus');
		var $lava = $('<li class="lava"/>');


		$lava.css({
			width:$current_item.outerWidth(),
			height:$current_item.outerHeight(),
			backgroundColor:'#eee'
			}).appendTo($nav.find('ul'));

		$nav.css('position','relative');
		$lava.css({
			position:'absolute',
			height:$current_item.outerHeight()+options.gap,
			top:$current_item.position().top-(options.gap/2),
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


		//从这开始和homepage.js中原版有所改动，功能改的简单了
		//绑定获得焦点事件处理函数
		$nav.find('li').bind('click',function(){
			$lava.animate({
				left:$(this).position().left,
				width:$(this).outerWidth()
			},{
				duration:options.speed,
				easing:options.easing,
				queue:false
			})
		});

	/*	$nav.find('li').bind('mouseout focusout',function(){
			setTimeout(function(){
				$lava.animate({
					left:$current_item.position().left,
					width:$current_item.outerWidth()
				},options.speed);
			},options.reset);
		});*/
		});
	};
})(jQuery);