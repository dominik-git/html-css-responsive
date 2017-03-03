
/*$(function (){
 console.log("the page is ready");
 var logo = $('#main-menu li'),
 siteHight = $('body').height(),
 styles = {
 position:'relative',
 background: 'blue',
 zIndex: '10'
 };


 logo.on('mouseenter', function(){
 $(this).animate({top: siteHight}, 2000).fadeOut()
 .css(styles);
 });

 }); */


(function ($) {
    //po skonceny animacie  vypneme loader
    var image = $('#logo'),
        loader = $('#loader'),
        bodyWidht = $('body').width(),
        imageWidht = image.width();

    image.on('click', function () {

        loader.fadeIn();
        image.animate({left:(bodyWidht*0.5-imageWidht )}, 4000 ,function () {
            loader.fadeOut();
        });
    });


    //animaciu adstartujeme pravym clickom na mysi a zabranime eventu
    image.on('click',function(event) {
        loader.fadeIn();

        $(this).animate( {left: (bodyWidht*0.5-imageWidht ) },3000);

        setTimeout(function () {

           loader.fadeOut();

        }, 1900);
        event.preventDefault();
    });

})(jQuery);


