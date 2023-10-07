import jsonData from './products.json' assert { type: 'json' };

const slides = document.querySelectorAll('.glide__slide');
const slidesImg = document.querySelectorAll('.glide__slide_img');
const slidesCategory = document.querySelectorAll('.glide__slide_category');
const slidesProductName = document.querySelectorAll(
	'.glide__slide_productName'
);
const slidesPrice = document.querySelectorAll('.glide__slide_price');

for (let i = 0; i < slides.length; i++) {
	slidesImg[i].src = `${jsonData[i].imageMain}`;
	slidesImg[i].style.width = '15rem';
	slidesImg[i].style.height = '20rem';

	slidesCategory[i].textContent = `${jsonData[i].category}`;
	slidesCategory[i].style.color = 'gray';

	slidesProductName[i].textContent = `${jsonData[i].productName}`;

	slidesPrice[i].textContent = `${jsonData[i].price}`;
}

const glide = new Glide('.glide', {
	type: 'carousel',
	touchAngle: 45,
	focusAt: 1,
	startAt: 1,
	perView: 3,
	keyboard: true,
	gap: 50,
	animationDuration: 2000,
	autoplay: false,
});

glide.mount();
