(function($){
	var defaults = {
		duration: 500,
		easing: 'ease-in-out'
	}

    /**
     * Function: transition
     * Adds a transition to an element.
     * @param { array } properties The css properties.
     * @param { array } [options] The transition options.
     */
	$.fn.transition = function (properties, options) {
        options = $.extend({}, defaults, options);
        properties['webkitTransition'] = 'all ' + options.duration + 'ms ' + options.easing;
        properties['transition'] = 'all ' + options.duration + 'ms ' + options.easing;
        properties['MSTransition'] = 'all ' + options.duration + 'ms ' + options.easing;
        properties['oTransition'] = 'all ' + options.duration + 'ms ' + options.easing;
		properties['-webkit-transform-style'] = 'preserve-3d'; //Forces Chrome to use the GPU.
        $(this).css(properties);
    };

    /**
     * Function: noTransition
     * Stops an animation by removing it.
     * @param { array } properties The css properties.
     */
    $.fn.noTransition = function (properties) {
        properties['webkitTransition'] = 'none';
        properties['transition'] = 'none';
        properties['MSTransition'] = 'none';
        properties['oTransition'] = 'none';
        $(this).css(properties);
    };

    /**
     * Function: redraw
     * Forces a redraw of the element.
     * Required when a browser batches commands that should be run separately.
     */
    $.fn.redraw = function () {
        $(this).each(function ()
        {
            var redraw = this.offsetHeight;
        });
    };

    /**
	 * jQuery.support.transition
	 * Checks for browser support for CSS3 transitions.  Returns boolean.
     */
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