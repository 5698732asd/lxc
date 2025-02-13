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