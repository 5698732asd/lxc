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
		dots: true,
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

	$(document).ready(function () {
        $("#menu-burger").click(function () {
            let menuBar = $("#menu-bar");
            if (menuBar.height() === 0) {
                menuBar.height(50); // Mở rộng
            } else {
                menuBar.height(0); // Thu gọn
            }
		});

		$(".open-menu").click(function () {
            let menuBar = $("#menu-side");
            if (menuBar.width() === 0) {
                menuBar.width("100vw"); // Mở rộng
            } else {
                menuBar.width(0); // Thu gọn
            }
		});
	});
	
	$('.centered-slide').slick({
		centerMode: true, // Bật chế độ center
		centerPadding: '60px', // Khoảng cách giữa các item
		slidesToShow: 3, // Số item hiển thị
		autoplay: true,
		arrows: false,
		speed: 500,
		responsive: [
		  {
			breakpoint: 768,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 1
			}
		  }
		]
	});
	
});