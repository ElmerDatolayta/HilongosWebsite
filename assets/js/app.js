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