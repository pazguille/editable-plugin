(function (window) {
	'use strict';

	var $ = window.jQuery,
		$document = $(window.document);

	$.fn.editable = function () {

		$.each(this, function (i, el) {

			var $el = $(el),
				data = $el.data('editable'),
				content;

			if (!data) {

				el.setAttribute('contentEditable', true);
				content = el.innerHTML;

				$el.on('keydown.editable', function (event) {

					var esc = (event.which === 27),
						enter = (event.which === 13);

					if (esc) {
						el.innerHTML = content;
						el.blur();
						$el.trigger('cancel.editable');

					} else if (enter) {
						el.blur();
					}

				});

				$el.on('blur.editable', function () {
					if (content !== el.innerHTML) {
						content = el.innerHTML;
						$el.trigger('done.editable', content);
					}
				});

				$el.data('editable', {
					'editable': true,
					'originalContent': el.innerHTML
				});
			}
		});

		return this;
	};

}(this));