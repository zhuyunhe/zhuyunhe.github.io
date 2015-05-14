(function($){
	$(function(){
		var $nav = $("#navigation");
		var $current_item = $nav.find('.focus');
		var $lava = $('<li class="lava"/>');

		$lava.css({
			width:$current_item.outerWidth(),
			height:$current_item.outerHeight(),
			backgroundColor:'#eee'
			}).appendTo($nav.find('ul'));
	});
})(jQuery);
