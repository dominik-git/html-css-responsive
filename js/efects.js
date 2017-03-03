

(function($) {



    /*AKORDEON */

    $( document ).ready(function () {

        var list = $('.jokes'),
            copy = $('.copy');

        list.find('dd').hide();

        list.find('dt').on('click', function () {
            var dt = $(this),
                dd = dt.next();

            dd.slideToggle()
                .siblings('dd').slideUp();

            var content = (dt.text() + dd.html());

            copy.html(content + "<hr>");
        });


        /*light box animation*/


        var gallery = $('.gallery');

        gallery.find('img').css({opacity: .5})
            .on('mouseenter mouseleave', function (event) {
                if(event.type == 'mouseenter'){
                    $(this).stop().fadeTo(200, 1);
                }
                else if(event.type == "mouseleave"){
                    $(this).stop().fadeTo(200,.5);
                }

            });

        var overlay = $("<div/>", {id: "overlay"}),
            image = $('<img>');
        overlay.appendTo('body').hide();

        gallery.find('a').on('click', function (event) {
            var href = $(this).attr('href');
                image.attr({src:href, alt:"obrazok"});
            overlay.html(image).show();

            event.preventDefault();
        });

        overlay.on('click',function () {
           overlay.hide();
        });

    /*SCROLLOVANIE*/

   /* var menu = $('.gallery-menu'),
        menuLinks = menu.find('a');


        menuLinks.on('click', function (event) {
            event.preventDefault();

           var id = this.hash;
            $(" body ").animate({scrollTop: $(id).offset().top}, 2000, function () {
                window.location.hash = id;
            });

        });
        */

        /*
         * back to top
         */
        var backToTop = $('<a>',{
            href:"#home",
            class:'back-to-top',
            html: '<i class="fa fa-caret-up fa-5x"></i>'

        });

        backToTop
            .hide()
            .appendTo("body")
            .on('click', function () {
                $("body").animate({scrollTop:0});
            });

        var win = $(window);
        win.on('scroll',function () {
            if(win.scrollTop() >=400){
                backToTop.fadeIn();
            }
            else{
                backToTop.hide();
            }
        });

        /*zobrazime len galeriu ktora prislucha kliknutemu idecku*/

        var galeria = $('.gallery-menu'),
            links = galeria.find('a')





        /*menu*/
        $("#main-menu").before('<div id="menu-new">☰</div>');

        $("#menu-new").click(function(){
            $("#main-menu").toggle();
        });

        $(window).resize(function(){
            if(window.innerWidth >= 500) {
                $("#main-menu").removeAttr("style");
            }
        });

    });

})(jQuery);
