!function($) {//文档加载完之后才执行
	$.fn.validation = function(options) {
		return this.each(function() {
            // globalOptions = $.extend({}, $.fn.validation.defaults, options);
            // validationForm(this)
            return this.css("color","blue");

        });
	};
	// $.fn.validation.defaults = {
	// 	validRules : [
 //            {name: 'required', validate: function(value) {return ($.trim(value) == '');}, defaultMsg: '请输入内容。'},
 //            {name: 'number', validate: function(value) {return (!/^[0-9]\d*$/.test(value));}, defaultMsg: '请输入数字。'},
 //            {name: 'mail', validate: function(value) {return (!/^[a-zA-Z0-9]{1}([\._a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+){1,3}$/.test(value));}, defaultMsg: '请输入邮箱地址。'},
 //            {name: 'char', validate: function(value) {return (!/^[a-z\_\-A-Z]*$/.test(value));}, defaultMsg: '请输入英文字符。'},
 //            {name: 'chinese', validate: function(value) {return (!/^[\u4e00-\u9fff]$/.test(value));}, defaultMsg: '请输入汉字。'}
 //        ]
	// }

}(window.jQuery);