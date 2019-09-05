setTimeout(function () {
	var elem = document.createElement('script');
	elem.src = '//api-maps.yandex.ru/2.1/?load=package.standard&apikey=231660e1-9e82-4492-9c55-5387c806be05&lang=ru-RU&onload=getYaMap';
	document.getElementsByTagName('body')[0].appendChild(elem);
}, 2000);

// eslint-disable-next-line no-unused-vars
function getYaMap () {
	const myMap = new ymaps.Map('map', {
			center: [59.938631, 30.323055],
			zoom: 17
		}, {searchControlProvider: 'yandex#search'}
  ),
		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			hintContent: '',
			balloonContent: ''
		},
			{
				iconLayout: 'default#image',
				iconImageHref: '../img/map-pin.png',
				iconImageSize: [113, 106],
				iconImageOffset: [-30, -110]
			});
	myMap.geoObjects.add(myPlacemark);

  // Delete default management elements
	myMap.controls.remove('zoomControl');
	myMap.behaviors.disable('scrollZoom');
	myMap.controls.remove('searchControl');
	myMap.controls.remove('trafficControl');
	myMap.controls.remove('typeSelector');
}

const toogleMenu = document.querySelector('.toggle-menu');
const navigation = document.querySelector('.navigation');

toogleMenu.addEventListener('click', () => {
	toogleMenu.classList.toggle('toggle-menu--close');
	navigation.classList.toggle('navigation--open');
});