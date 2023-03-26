jQuery(document).ready(function() {
// Slider
    if (jQuery('.mgallery .swiper-container').length > 0) {
        new Swiper('.mgallery .swiper-container', {
            loop: true,
            slidesPerView: 4,
            paginationClickable: true,
            spaceBetween: 24,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            breakpoints: {
                992: {
                    slidesPerView: 4,
                    spaceBetween: 24
                },
                450: {
                    slidesPerView: 3,
                    spaceBetween: 16
                },
                0: {
                    spaceBetween: 16,
                    slidesPerView: 'auto',
                }
            }
        });
    }
    if (jQuery('.mrooms .swiper-container').length > 0) {
        new Swiper('.mrooms .swiper-container', {
            loop: false,
            slidesPerView: 'auto',
            autoplay: {
              delay: 3500,
              disableOnInteraction: true,
            },
            pagination: {
              el: '.swiper-pagination',
              type: 'progressbar',
            }
        });
    }
    if (jQuery('.droom-s2 .swiper-container').length > 0) {
        new Swiper('.droom-s2 .swiper-container', {
            loop: false,
            slidesPerView: 'auto',
            spaceBetween: 24,
            paginationClickable: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: true,
            },
            pagination: {
              el: '.swiper-pagination',
              type: 'progressbar',
            },
            breakpoints: {
                992: {
                    spaceBetween: 24,
                },
                450: {
                    spaceBetween: 16,
                },
                0: {
                    spaceBetween: 16,
                    slidesPerView: 'auto',
                }
            }
        });
    }

    if (jQuery('.action-s2 .swiper-container').length > 0) {
        new Swiper('.action-s2 .swiper-container', {
            loop: false,
            slidesPerView: 'auto',
            spaceBetween: 24,
            paginationClickable: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: true,
            },
            pagination: {
              el: '.swiper-pagination',
              type: 'progressbar',
            },
            breakpoints: {
                992: {
                    spaceBetween: 24,
                },
                450: {
                    spaceBetween: 16,
                },
                0: {
                    spaceBetween: 16,
                    slidesPerView: 'auto',
                }
            }
        });
    }
// animate menu
    jQuery('#menu-trigger').on('change', function () {
        if (jQuery(this).is(':checked')) {
            tlMenu.restart();
            jQuery('body').addClass('none-scroll');
        } else {
            tlMenu.reverse();
            jQuery('body').removeClass('none-scroll');
        }
    });
    var tlMenu = new TimelineMax({ paused: true });
    var sidebar = document.querySelector('.sidebar');
    var sidebarOverlay = document.querySelector('.sidebar-overlay');
    var sidebarList = document.querySelectorAll('.sidebar-inner ul li');
    var sidebarLang = document.querySelector('.sidebar_lang');
    var sidebarButton = document.querySelector('.sidebar_button');

    tlMenu.to(sidebarOverlay, 0.3, { opacity: 0.5, ease: Power4.easeOut }, "-=0.2")
      .to(sidebar, 0.3, { y: 0, ease: Power4.easeOut });

    tlMenu.to(sidebarLang, 0.2, { x: 0, opacity: 1, ease: Power4.easeOut });

    sidebarList.forEach(function (item) {
      tlMenu.fromTo(item, 0.2, { x: 10, opacity: 0, ease: Power4.easeOut }, { x: 0, opacity: 1, ease: Power4.easeOut }, "-=0.18")
    });

    tlMenu.to(sidebarButton, 0.2, { x: 0, opacity: 1, ease: Power1.easeOut });
// end mouse anim
    jQuery(document).on('click', '.hambuger', function(){
        jQuery(this).toggleClass('activated');
    });

    /*=================================================
                            Custom
    =====================================================*/

    jQuery(document).on('click', '.plus', function() {
        jQuery(this).parent().find('.current').val(Number(jQuery(this).parent().find('.current').val()) + 1);
    });
    jQuery(document).on('click', '.minus', function() {
        if(jQuery(this).parent().find('.current').val() != '0') {
            jQuery(this).parent().find('.current').val(Number(jQuery(this).parent().find('.current').val()) - 1);            
        }
    });

// Show / Hide lightbox
    jQuery(document).on('click', '.md-trigger', function() {
        var val = jQuery(this).attr('data-modal');
        var that = jQuery(this);
        if(val == '#choose1'){
            jQuery('input[name="daterange"]').daterangepicker({
                "inline": true,
                // "singleRange": true,
                "minDate": new Date(),
                "startDate": that.attr('date-start'),
                "endDate": that.attr('date-end'),
                "locale": {
                    "format": "MM/DD/YYYY",
                    "separator": " - ",
                    "applyLabel": "Xác nhận",
                    "weekLabel": "W",
                    "daysOfWeek": [
                        "CN",
                        "T2",
                        "T3",
                        "T4",
                        "T5",
                        "T6",
                        "T7"
                    ],
                    "monthNames": [
                        "Tháng 1, ",
                        "Tháng 2, ",
                        "Tháng 3, ",
                        "Tháng 4, ",
                        "Tháng 5, ",
                        "Tháng 6, ",
                        "Tháng 7, ",
                        "Tháng 8, ",
                        "Tháng 9, ",
                        "Tháng 10, ",
                        "Tháng 11, ",
                        "Tháng 12, "
                    ],
                    "firstDay": 1
                },
            }, function(start, end) {
                jQuery('.date-start').text(start.format("DD/MM/YYYY")).attr('data-date', start.format("MM/DD/YYYY"));
                jQuery('.date-end').text(end.format("DD/MM/YYYY")).attr('data-date', end.format("MM/DD/YYYY"));

                jQuery('.area--date').attr('date-start', start.format("MM/DD/YYYY")).attr('date-end', end.format("MM/DD/YYYY"));
                jQuery('.lightbox').removeClass('open');
            });
        } else if(val == '#choose2'){
            var adults = jQuery('.mbooking .dropdown--current span').attr("data-adults");
            var children = jQuery('.mbooking .dropdown--current span').attr("data-children");
            var children2 = jQuery('.mbooking .dropdown--current span').attr("data-children2");
            var children3 = jQuery('.mbooking .dropdown--current span').attr("data-children3");
            jQuery('#choose2 input[name=adults]').val(adults);
            jQuery('#choose2 input[name=children]').val(children);
            jQuery('#choose2 input[name=children2]').val(children2);
            jQuery('#choose2 input[name=children3]').val(children3);
        }
        jQuery(val).addClass('open');  
    });
    jQuery(document).on('click', '.lightbox .area--close, .lightbox .lightbox-dark', function() {
        jQuery(this).closest('.lightbox').removeClass('open');  
    });

// Datepicker
    if(jQuery('.mbooking').length > 0 ){
        jQuery('.date-start').text(moment().endOf('day').format("DD/MM/YYYY"));
        jQuery('.date-end').text(moment().endOf('weeks').add(1,'days').format("DD/MM/YYYY"));
        
        jQuery('.area--date').attr('date-start', moment().endOf('day').format("MM/DD/YYYY")).attr('date-end', moment().endOf('weeks').add(1,'days').format("MM/DD/YYYY"));
    }

// Scroll menu
    
    jQuery(document).on('click', '#choose2 .foot--button', function() {
        var adults = jQuery(this).closest('.lightbox-area').find('input[name=adults]').val();
        var children = jQuery(this).closest('.lightbox-area').find('input[name=children]').val();
        var children2 = jQuery(this).closest('.lightbox-area').find('input[name=children2]').val();
        var children3 = jQuery(this).closest('.lightbox-area').find('input[name=children3]').val();
        var count = Number(children) + Number(children2) + Number(children3);
        if(count > 0){
            jQuery('.mbooking .dropdown--current span').text(adults + " người lớn, " + count + " trẻ em");
            jQuery('.mbooking .dropdown--current span').attr("data-adults", adults);
            jQuery('.mbooking .dropdown--current span').attr("data-children", children);
            jQuery('.mbooking .dropdown--current span').attr("data-children2", children2);
            jQuery('.mbooking .dropdown--current span').attr("data-children3", children3);
        } else {
            jQuery('.mbooking .dropdown--current span').text(adults + " người lớn");
            jQuery('.mbooking .dropdown--current span').attr("data-adults", adults);
            jQuery('.mbooking .dropdown--current span').attr("data-children", children);
            jQuery('.mbooking .dropdown--current span').attr("data-children2", children2);
            jQuery('.mbooking .dropdown--current span').attr("data-children3", children3);
        }

        jQuery('.lightbox').removeClass('open');
    });

// Scroll Animation
    setTimeout(function(){
        var $animation_elements = $('[data-anim]');
        var $window = $(window);

        function anim() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + 600);

            $.each($animation_elements, function() {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + 600);

                //check to see if this current container is within viewport
                if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                    $element.attr('data-anim', "true");
                } else {
                    // $element.removeClass('in-view');
                }
            });
        }

        $window.on('scroll resize', anim);
        $window.trigger('scroll');
    }, 100);

    const scrollLayer = new LocomotiveScroll({
        el: document.querySelector('.smooth-scroll'),
        smooth: true,
    });
    
    var c;
    scrollLayer.on('scroll', b=>{
        c = b.direction,
        $scrollPos = b.scroll.y,
        $scrollPos > 120 ? jQuery('.header').addClass('header--scrolled') : jQuery('.header').removeClass('header--scrolled'),
        $scrollPos > 120 ? jQuery('#header-responsive').addClass('header--scrolled') : jQuery('#header-responsive').removeClass('header--scrolled');
    });
    
    gsap.registerPlugin(ScrollTrigger);    
    
    scrollLayer.on('scroll', ScrollTrigger.update);
    
    window.addEventListener("load", function () {      
        ScrollTrigger.addEventListener("refresh", () => scrollLayer.update()); //locomotive-scroll      
        ScrollTrigger.refresh();
    });

    jQuery(document).on('click', '.room-s2 .box-nav ul li', function(e) {
        e.preventDefault()
        let target = e.target.getAttribute("data-id");
        scrollLayer.scrollTo(target);
    });
});