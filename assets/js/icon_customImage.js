ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.639578, 37.525208],
            zoom: 12
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([55.639578, 37.525208], {
        }, {
          /*  // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../assets/img/icon/mark.svg',
            // Размеры метки.
            iconImageSize: [39, 39],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],*/
           
        });
        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects.add(myPlacemark);
});
