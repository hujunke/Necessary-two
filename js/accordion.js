(function($){
	$.fn.accordion = function(opts){
		//默认值
		var defaults = {
				max: "620px",
				min: "80px",
				speed: "1500"
		}

		var opts = $.extend(defaults, opts);

		this.each(function(){
			var t = $(this),
					m = t.children(),
					c = m.children();

			//触发事件
			// m.find(".active a").hide();
			m.on("mouseenter","li",function(){
				$(this).addClass('active').stop().animate({width:opts.max},opts.speed).find("p").hide().parent().siblings().removeClass('active').stop().animate({width:opts.min},opts.speed).find("p").show().css("background","rgba(0,0,0,.5)");
			})
		})
	}

})(jQuery);