$('.avoidance-box, .add-info-box, .error-code-box').hide();

$(document).ready(function () {

    /* ************************************ SMOOTH SCROLLING *** */

    $('a[href^="#"]').on('click', function (event) {
        let target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 600);
        }
    });

    $('.uparrow, .logo').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    /* ******************************** CHANGE NAV ON SCROLL *** */

    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {

            $('.nav').css({'padding': '.5rem', 'align-items': 'center'});

            $('.logo').css({'width': '15rem'});

            $('.logoText').css({'font-size': '1.5rem', 'left': '3.3rem'});

            $('.flag').css({'width': '2.5rem'});

            $('.flagDE').css();

            $('.flagAT').css();


        } else {

            $('.nav').css({'padding': '.8rem', 'align-items': 'flex-end'});

            $('.logo').css({'width': '18rem'});

            $('.logoText').css({'font-size': '2rem', 'left': '3.3rem'});

            $('.flag').css({'width': '3rem'});

            $('.flagDE').css();

            $('.flagAT').css();


        }
    });

    /* ***************************************** SHOW - HIDE *** */

    $('.avoidance-box-toggler').on('click', function () {
        $('.add-info-box').slideUp(600);
        $('.avoidance-box').not($(this).next()).slideUp(600);
        $(this).next().slideToggle(600);

    });

    $('.error-code-toggler').on('click', function () {
        $('.error-code-box').not($(this).next()).slideUp();
        $(this).next().slideToggle();
    });

    $('.add-info-toggler').on('click', function () {
        $('.add-info-box').not($(this).prev()).slideUp();
        $('.avoidance-box').slideUp();
        $(this).prev().slideToggle();
    });


    $('.avoidance-box-toggler, .add-info-toggler, .error-code-toggler').on('click', function () {
        if ($(this).children().hasClass('fa-plus-square')) {
            $('i.far').removeClass('fa-minus-square').addClass('fa-plus-square').css({'color': '#02666E'});
            $(this).children().removeClass('fa-plus-square').addClass('fa-minus-square').css({'color': 'rgba(184, 7, 35, .85)'});
            $('.add-info-toggler').children().css('color', '#FCE181');
        } else {
            $('i.far').addClass('fa-plus-square');
            $(this).children().not($('.add-info-toggler').children()).css('color', '#02666E');
        }
    });


});

