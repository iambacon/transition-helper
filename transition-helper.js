(function($){
	var defaults = {
		duration: 500,
		easing: 'easing'
	}

	$.fn.transition = function (properties, options) {
        options = $.extend({}, defaults, options);
        properties['webkitTransition'] = 'all ' + options.duration + 'ms ' + options.easing;
        properties['transition'] = 'all ' + options.duration + 'ms ' + options.easing;
        properties['MSTransition'] = 'all ' + options.duration + 'ms ' + options.easing;
        properties['oTransition'] = 'all ' + options.duration + 'ms ' + options.easing;
        $(this).css(properties);
    };

    $.fn.noTransition = function (properties) {
        properties['webkitTransition'] = 'none';
        properties['transition'] = 'none';
        properties['MSTransition'] = 'none';
        properties['oTransition'] = 'none';
        $(this).css(properties);
    };

    $.fn.redraw = function () {
        $(this).each(function ()
        {
            var redraw = this.offsetHeight;
        });
    };

    $.support.transitions = (function () {
    	var s = document.createElement('p').style, // 's' for style
        v = ['ms', 'O', 'Moz', 'Webkit']; // 'v' for vendor

        if (s['transition'] == '') return true; 
        while (v.length) 
            if (v.pop() + 'Transition' in s)
                return true;
        return false;
    })();
})(jQuery);