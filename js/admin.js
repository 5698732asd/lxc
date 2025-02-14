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
		arrows: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		swipeToSlide: true, 
		responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
				arrows:false,
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows:false,
				},
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows:false,
				},
			}
		]
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
			let navMobile = $("#nav-mobile");
		
			if (menuBar.width() === 0) {
				menuBar.width("100vw"); // Mở rộng menu
			} else {
				menuBar.width(0); // Thu gọn menu
			}
		
			navMobile.toggleClass("d-none d-flex"); // Ẩn/hiện bằng cách thay đổi class
		});
		
		
		

		let defaultGroup = $(".group-target").text();
		let defaultTitle = $(".title-target").text();
		let defaultDesc = $(".desc-target").text();

		$(".solution-product").hover(
			function () {
				let newGroup = $(this).attr("group");
				let newTitle = $(this).attr("title");
				let newDesc = $(this).attr("desc");

				$(".group-target, .title-target, .desc-target").addClass("fade");

				setTimeout(() => {
					$(".group-target").text(newGroup);
					$(".title-target").text(newTitle);
					$(".desc-target").text(newDesc);
					$(".group-target, .title-target, .desc-target").removeClass("fade");
				}, 300);
			},
			function () {
				// Khi rời chuột khỏi phần tử
				$(".group-target, .title-target, .desc-target").addClass("fade");

				setTimeout(() => {
					$(".group-target").text(defaultGroup);
					$(".title-target").text(defaultTitle);
					$(".desc-target").text(defaultDesc);
					$(".group-target, .title-target, .desc-target").removeClass("fade");
				}, 300);
			}
		);
	});
	
	$('.centered-slide').slick({
		centerMode: true, // Bật chế độ center
		centerPadding: '60px', // Khoảng cách giữa các item
		slidesToShow: 3, // Số item hiển thị
		autoplay: true,
		swipeToSlide: true, 
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
		swipeToSlide: true, 
        slidesToScroll: 1,
		infinite: true,
		slidesToShow: 6,
		autoplay: true,
		slidesToScroll: 4,
		arrows:false,
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
				slidesToScroll: 1,
			}
		  }
		]
	});
	


	$('.related-post').slick({
		centerMode: true, // Bật chế độ center
		centerPadding: '60px', // Khoảng cách giữa các item
		slidesToShow: 3, // Số item hiển thị
		autoplay: true,
		swipeToSlide: true, 
		arrows: true,
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
	
});

//#region product
document.querySelectorAll('.btn-toggle').forEach(button => {
	let targetID = button.getAttribute('data-bs-target');
	let target = document.querySelector(targetID);
	let icon = button.querySelector('.toggle-icon');

	// Khi danh mục mở ra -> đổi icon thành "-"
	target.addEventListener('shown.bs.collapse', function () {
		icon.classList.remove('fi-rr-plus');
		icon.classList.add('fi-rr-minus');
	});

	// Khi danh mục đóng lại -> đổi icon thành "+"
	target.addEventListener('hidden.bs.collapse', function () {
		icon.classList.remove('fi-rr-minus');
		icon.classList.add('fi-rr-plus');
	});
});
function decreaseQuantity(idCounter) {
	let quantityInput = document.getElementById(`${idCounter}`);
	let quantity = parseInt(quantityInput.value);
	if (quantity > 1) {
		quantityInput.value = quantity - 1;
	}
}
function increaseQuantity(idCounter) {
	let quantityInput = document.getElementById(`${idCounter}`);
	let quantity = parseInt(quantityInput.value);
	quantityInput.value = quantity + 1;
}

const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

function updatePrice() {
	let price = parseInt(priceRange.value);
	priceValue.textContent = '0 VND - ' + new Intl.NumberFormat("vi-VN").format(price) + " VND";
}

priceRange.addEventListener("input", updatePrice);
updatePrice();

//#endregion