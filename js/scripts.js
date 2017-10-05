$(function() {
    var $carouselList = $('#carousel ul');
    var $indicators = $('.carousel-indicators');
    var currentSlide = 0;
    var interval;

    function nextSlide() {
        currentSlide > 3 ? currentSlide = 0 : currentSlide++;
        renderSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide < 1 ? currentSlide = 4 : currentSlide--;
        renderSlide(currentSlide);
    }

    function setActiveIndicator(index) {
        $indicators.find('.active').removeClass('active');
        $indicators.find('li').eq(index).addClass('active');
    }

    function renderSlide(index) {
        setActiveIndicator(index);
        $carouselList.animate({marginLeft: -400 * index}, 500);
    }

    function startInterval() {
        interval = setInterval(nextSlide, 3000);
    }

    function restartInterval() {
        clearInterval(interval);
        startInterval();
    }

    $('.left').click(function(e) {
        e.preventDefault();
        prevSlide();
        restartInterval();
    });

    $('.right').click(function(e) {
        e.preventDefault();
        nextSlide();
        restartInterval();
    });

    $indicators.on('click', 'li', function() {
        var indicatorIndex = $(this).index();
        renderSlide(indicatorIndex);
        restartInterval();
    });

    startInterval();
});