$(window).scroll(function() {
    var offset = $(window).scrollTop();
    console.log(offset);
    $('.navbar').toggleClass('trans', offset > 50);
});
