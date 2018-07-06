$('.avoidanceBox').hide();

$(document).ready(function () {

    /* ************************************ SMOOTH SCROLLING *** */

    $('a[href^="#"]').on('click', function (event) {
        let target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top -50
            }, 600);
        }
    });

    $('#topBtn').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    /* ********************************* HIDE LOGO ON SCROLL *** */

    $(window).scroll(function () {
        if ($(document).scrollTop() > 1) {
            $('.header').slideUp(200);
            $('.nav').css('top', '0').css('height', '4rem');
            $('.nav-item').css('font-size', '1.5rem');
        } else {
            $('.header').slideDown(300);
            $('.nav').css('top', '6rem').css('height', '3rem');
            $('.nav-item').css('font-size', '1.3rem');
        }
    });

    /* ***************************************** SHOW - HIDE *** */



    $('.avoidanceBoxToggler').on('click', function () {

        $(this).parent().next().slideToggle(function () {

             /* let $togglerText = $('.avoidanceBoxToggler').text();
                $togglerText == "AVOID !" ?
                $('.avoidanceBoxToggler').text('CLOSE') :
                $('.avoidanceBoxToggler').text('AVOID !'); */

        });
    });


});

