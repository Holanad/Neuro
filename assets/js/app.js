const swiperRecall = new Swiper(".recall-slider", {
    slidesPerView: 2,
    autoplay: true,
    spaceBetween: 60,
    //freeMode: true,
    autoplay: {
        delay: 20000,
        disableOnInteraction: false,
    },
    breakpoints: {
        // when window width is >= 320px
        1240: {
            spaceBetween: 60,
           // freeMode: false,
        },
        768: {
            spaceBetween: 30,
            slidesPerView: 2,
        },
        320: {
            spaceBetween: 30,
            slidesPerView: 1,
        }
    },
    navigation: {
         nextEl: ".recall-slider-panel__next",
         prevEl: ".recall-slider-panel__prev",
    },
    pagination: {
        el: ".recall-scrollbar",
        type: "progressbar",
    },
    on: {
        slideChange: ()=> {
            document.querySelector('.recall-slider-autoplay__progress').classList.remove('active');
            setTimeout(() => {
                document.querySelector('.recall-slider-autoplay__progress').classList.add('active');
            }, 50);
        },
    },
});

const swiperBlog = new Swiper(".blog-slider", {
    slidesPerView: 3,
    autoplay: true,
    spaceBetween: 60,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        // when window width is >= 320px
        1240: {
            spaceBetween: 60,
           // freeMode: false,
        },
        992: {
            spaceBetween: 30,
            slidesPerView: 3,
        },
        576: {
            spaceBetween: 30,
            slidesPerView: 2,
        },
        320: {
            spaceBetween: 30,
            slidesPerView: 1,
        }
    },
    navigation: {
         nextEl: ".blog-slider-panel__next",
         prevEl: ".blog-slider-panel__prev",
    },
    pagination: {
        el: ".blog-scrollbar",
        type: "progressbar",
    },
    on: {
        slideChange: ()=> {
            document.querySelector('.blog-slider-autoplay__progress').classList.remove('active');
            setTimeout(() => {
                document.querySelector('.blog-slider-autoplay__progress').classList.add('active');
            }, 50);
        },
    }, 
});

const sliderBlog = () => {
    let countSlide = document.querySelectorAll('.blog-item').length;
    let recallItemCount = document.querySelector('.blog-slider-progress__all');
    if(recallItemCount === null) {
        return 0;
    } else {
        if (countSlide <= 9) {
            recallItemCount.innerHTML = '0' + countSlide;
        } else {
            recallItemCount.innerHTML = countSlide;
        }
    }
};
sliderBlog();
const sliderRecall = () => {
    let countSlide = document.querySelectorAll('.recall-item').length;
    let recallItemCount = document.querySelector('.recall-slider-progress__all');
    if(recallItemCount === null) {
        return 0;
    } else {
        if (countSlide <= 9) {
            recallItemCount.innerHTML = '0' + countSlide;
        } else {
            recallItemCount.innerHTML = countSlide;
        }
    }
};
sliderRecall();
// jQuery function
$(document).ready(function() {
    // showMore
    function showMore() {
        $(".reviev-item-info").each(function () {
            let more = $(this).find(".more");
            let hide = $(this).find(".hide");
            hide.hide();
            more.click(function () {
                hide.slideToggle();
                more.text(more.text() == "Скрыть отзыв" ? "Открыть отзыв" : "Скрыть отзыв");
            });
        });
    };
    showMore();
    // select avatar popup 
    function selectAvatarPopup() {
        $('.popup-recall-item').click(function() {
            $('.popup-recall-item').removeClass('active')
            $(this).addClass('active')
            $(this).parent().parent().find('input').val($(this).find('.popup-recall-item-image img').attr('src'))
        });
    }
    selectAvatarPopup()
    //Бургер меню
    function headerBurger (){
        $('.header-burger').click(function () {
            $('.header-burger').toggleClass('open');
            $('.header').toggleClass('active');
            $('.header-info').toggleClass('active');
            
            if($('.header').hasClass('active')) {
                $('html').addClass('hidden');
            } else {
                $('html').removeClass('hidden');
            }
        });
    };
    headerBurger();
    //dropDown
    function dropDown() {
        $('.select-elem').click(function () {
            if($(this).hasClass('active')) {
                $(this).parent().find('.select-list').removeClass('active');
                $(this).removeClass('active');
            } else {
                $(this).parent().find('.select-list').addClass('active');
                $(this).addClass('active');
            }
        })
        $('.select-item').click(function () {
            $(this).parent().removeClass('active');
            $(this).parent().parent().find('.select-elem').removeClass('active');
            $(this).parent().parent().find('.popup-consult-select-elem__text').addClass('selected');
            $(this).parent().parent().find('.select-text').text($(this).text());
            $(this).parent().parent().find('.select-input').val($(this).text().trim());
        })
    };
    dropDown()
    // checkbox
    function checkbox() {
        $.each($(".checkbox"), function () {
            if ($(this).find("input").prop("checked") == true) {
                $(this).addClass("active");
                $('.checkbox-square').addClass("active");
            }
        });

        $(document).on("click", ".checkbox", function () {
            if ($(this).hasClass("active")) {
                $(this).find("input").prop("checked", false);
            } else {
                $(this).find("input").prop("checked", true);
            }
            $(this).toggleClass("active");
            $('.checkbox-square').toggleClass("active");
            $('.checkbox-permission').toggleClass("hidden");
            console.log($(this))
            return false;
        });
    };
    checkbox();
    
    function lastSlideBlog() {
        
        setInterval(() => {
            if($('.blog-slider-panel__next').hasClass('swiper-button-disabled')) {
                $('.blog-slider-progress__all').addClass('full')
            } else {
                $('.blog-slider-progress__all').removeClass('full')
            }
           
        }, 100);
        setInterval(() => {
            if($('.recall-slider-panel__next').hasClass('swiper-button-disabled')) {
                $('.recall-slider-progress__all').addClass('full')
            } else {
                $('.recall-slider-progress__all').removeClass('full')
            }
           
        }, 100);
    }
    lastSlideBlog();
    // DatePickerModal
    
    function datePickerCustom () {
        $('.popup-consult-calendar').datepicker({
          language: 'ru',
          showOtherMonths: false,
          onSelect: function(dateText, inst) { 
            $('.popup-consult-calendar').find('input').val(dateText)
          }
        });
        $('.datepicker--nav-action').click(function () {
            $('.datepicker--cell').removeClass('-selected-')
        })

        $('.popup-consult-time-item').click(function() {
            $('.popup-consult-time-item').removeClass('active');
            $('.popup-consult-time').find('input').val($(this).text().trim());
            $(this).addClass('active')
        })
    };
    datePickerCustom()



    //navigationMoveAdaptive
    function navigationMoveAdaptive() {
        if(window.innerWidth < 768) {
            $('.header-nav').appendTo('.header-info')
        } else {
            $('.header-nav').appendTo('.header-wrapper')
        }
    }
    navigationMoveAdaptive()
    $(window).resize(function() {
        navigationMoveAdaptive()
    });

    // Акордеон в бургере
    function accordion() {
        $(".header-nav ul li:first-child a").click(function(){
            $(this).toggleClass("open").next().slideToggle();
            $(".header-nav ul li:first-child a").not(this).removeClass("open").next().slideUp();
        });
    };
    accordion();

    // Акордеон в faq
    function accordionFaq() {
        $(".faq-item-title").click(function(){
            $(this).toggleClass("open").next().slideToggle();
            $(".faq-item-title").not(this).removeClass("open").next().slideUp();
        });
    };
    accordionFaq();

    // Акордеон в Help
    function accordionHelp() {
        $(".help-item-title").click(function(){
            $(this).toggleClass("open").next().slideToggle();
            $(".help-item-title").not(this).removeClass("open").next().slideUp();
        });
    };
    accordionHelp();

    //closeModal
    function closeModal() {
        $('.popup-close, .close').click(function() {
        $('html').removeClass('hidden');
        $('.duty').removeClass('open');
    });
    $(document).mouseup(function (e) {
        var container = $(".crop");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('html').removeClass('hidden');
            $('.duty').removeClass('open');
        }
        });
    };
    closeModal();

    // OpenModal  
    function openModal() { 
        $('.modal-consult').click(function (e) {
            e.preventDefault();
            $('.popup-consult').addClass('open');
            $('html').addClass('hidden');
        });
        $('.modal-recall').click(function (e) {
            e.preventDefault();
            $('.popup-recall').addClass('open');
            $('html').addClass('hidden');
        });
        $('.modal-education').click(function (e) {
            e.preventDefault();
            $('.popup-education').addClass('open');
            $('html').addClass('hidden');
        });
        $('.modal-contact').click(function (e) {
            e.preventDefault();
            $('.popup-contact').addClass('open');
            $('html').addClass('hidden');
        });
        $('.modal-spiker').click(function (e) {
            e.preventDefault();
            $('.popup-spiker').addClass('open');
            $('html').addClass('hidden');
        });
    }
    openModal();
        //Валидации сайта
    function formValidate() {
        $('#popup-consult').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 5
                },
            },
            messages: {
                name: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                },
                phone: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 5 символов"
                },
            }
        });
        $('#popup-recall').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                }
            },
            messages: {
                name: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                }
            }
        });
        $('#popup-education').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                name: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                },
                phone: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 5 символов"
                }
            }
        });
        $('#popup-contact').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                name: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                },
                phone: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 5 символов"
                }
            }
        });
        $('#faq-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                }
            },
            messages: {
                name: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                }
            }
        });
    };
    formValidate();   
});