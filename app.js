import jsonData from './products.json' assert { type: 'json' };

const slides = document.querySelectorAll('.glide__slide');
const slidesImg = document.querySelectorAll('.glide__slide_img');
const slidesCategory = document.querySelectorAll('.glide__slide_category');
const slidesProductName = document.querySelectorAll(
	'.glide__slide_productName'
);
const slidesPrice = document.querySelectorAll('.glide__slide_price');

for (let i = 0; i < slides.length; i++) {
	const currentSlidesImg = slidesImg[i];
	currentSlidesImg.src = `${jsonData[i].imageMain}`;
	currentSlidesImg.style.width = '50%';
	currentSlidesImg.style.height = '60%';
	currentSlidesImg.addEventListener('mouseover', () => {
		currentSlidesImg.src = `${jsonData[i].imageAlt}`;
	});
	currentSlidesImg.addEventListener('mouseout', () => {
		currentSlidesImg.src = `${jsonData[i].imageMain}`;
	});

	const currentSlidesCategory = slidesCategory[i];
	currentSlidesCategory.textContent = `${jsonData[i].category}`;
	currentSlidesCategory.style.color = 'gray';

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
