$(document).ready(function(){
	$('.single-item').slick({
		arrows: false, // Tắt nút điều hướng mặc định
		dots: false,
	});

	$(".prev").click(function () {
		$('#banner').find(".single-item").slick("slickPrev");
	});

	$(".next").click(function () {
		$('#banner').find(".single-item").slick("slickNext");
	});


	// ----------------------------------------------------------------



	$('.product-cards').slick({
		dots: false,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
		]
	});
	$(".prev").click(function () {
		$('#lasted-product').find(".product-cards").slick("slickPrev");
	});

	$(".next").click(function () {
		$('#lasted-product').find(".product-cards").slick("slickNext");
	});
});