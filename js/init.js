//$(document).ready(

//$(function(){})  - заменяет $(document).ready(function() {})
//$('ТУТ НУЖНЫЙ ДИВ').НАЗВАНИЕ_ПЛАГИНА({опция1:true,опция2: false});
$(function() {
	$('.secondSlider').unislider({
		quantity: 1,
		pagerWrp: true,
		pager: true,
	});
});