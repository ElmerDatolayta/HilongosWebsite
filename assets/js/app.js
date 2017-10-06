$(".navbar .container .navbar-header button").click(function(){
    $(".navbar .container .navbar-header button").addClass("click");
    $("#mobileview #navmenu").addClass("showmobile");

});
$("#mobileview #navmenu button").click(function(){
    $("#mobileview #navmenu").removeClass("showmobile");
});
$("#bannerimage").slick({
    arrows: false,
    dots: true
});
$("#about #bannerimage").slick({
    arrows: false,
    dots: true
});
function collapsenav(){
    if ($(".navbar").offset().top > 80){
        $('.navbar').addClass("scroll-change");
    }else{
        $('.navbar').removeClass("scroll-change");
    }
};
$(window).scroll(collapsenav);
$(document).ready(collapsenav);



// last section 


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  $('#history-collapse').collapse('show');
  $(".generalInformation .container .col-12 a").click(function(e){
        e.preventDefault();
        var id=$(this).attr('href');
        $('.collapse').collapse('hide');
        $(id).collapse('show');
  })

  $('.autoplay1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
      