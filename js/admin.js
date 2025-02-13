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

		$(".solution-product").hover(function () {
			let newGroup = $(this).attr("group");
			let newTitle = $(this).attr("title");
			let newDesc = $(this).attr("desc");

			$(".group-target, .title-target, .desc-target").addClass("fade"); // Làm mờ trước khi đổi text
			
			setTimeout(() => {
				$(".group-target").text(newGroup);
				$(".title-target").text(newTitle);
				$(".desc-target").text(newDesc);
				$(".group-target, .title-target, .desc-target").removeClass("fade"); // Hiện lại sau khi đổi text
			}, 300); // Đợi 200ms trước khi đổi nội dung
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
				autoplay: true,
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 1
			}
		  }
		]
	});

	$('.partner-slide').slick({
		variableWidth: true,
        autoplaySpeed: 0,
        speed: 15000,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
		infinite: true,
		slidesToShow: 6,
		autoplay: true,
		slidesToScroll: 4,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 4,
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
	
});