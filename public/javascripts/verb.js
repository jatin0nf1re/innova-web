

window.addEventListener("load",function(){
  var load_screen= document.getElementById("loader");
  $('.after-load').hide();
  document.body.removeChild(load_screen);
  $('.after-load').show();

  if($(window).width()> 425){
    $('.nav').hide();
    $('.mainpage .nav').show();
    AOS.init();

    $(function() {
      $.scrollify({
    section : "section",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });

      });

    $('.events div button').click(function(){
      console.log("clicked");
    });

    $('.box-faces').mouseenter(function(){
        $(this).css({"animation":"spin 0.5s linear","animation-fill-mode":"forwards"});
    });

    $('.box-faces').mouseleave(function(){
        $(this).css({"animation":"spinback 0.5s linear","animation-fill-mode":"forwards"});
    });



    var moveForce = 30; // max popup movement in pixels
    var rotateForce = 20; // max popup rotation in deg

    $(document).mousemove(function(e) {
        var docX = $(document).width();
        var docY = $(document).height();

        var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
        var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;

        var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
        var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);

        $('.popup')
            .css('left', moveX+'px')
            .css('top', moveY+'px')
            .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');
    });

    $(".btn").hover( function (e) {
       $(this).toggleClass('animated wobble', e.type === 'mouseenter');
    });

    $(".a").click(function() {
        $('html,body').animate({
            scrollTop: $(".about").offset().top},
            'slow');
    });

    $(".e").click(function() {
        $('html,body').animate({
            scrollTop: $(".events").offset().top},
            'slow');
    });

    $(".s").click(function() {
        $('html,body').animate({
            scrollTop: $(".sponsors").offset().top},
            'slow');
    });

    $(".t").click(function() {
        $('html,body').animate({
            scrollTop: $(".team").offset().top},
            'slow');
    });

    $(function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll = $(".team").offset().top ) {
              $('.count').each(function () {
                  $(this).prop('Counter',0).animate({
                      Counter: $(this).text()
                  }, {
                      duration: 3000,
                      easing: 'swing',
                      step: function (now) {
                          $(this).text(Math.ceil(now));
                      }
                  });

              });
              $('div').removeClass("count");
              // if($(window).width()<= 425){
              //   $('c-ount').css('font-size','15px');
              // }
            }
        });
    });

    //Shatering Effect
    var tmax_optionsGlobal = {
      repeat: 0,
      repeatDelay: 0.65,
      yoyo: true
    };

    // CSSPlugin.useSVGTransformAttr = true;

    var tl = new TimelineMax(tmax_optionsGlobal),
        path = 'svg *',
        stagger_val = 0.0325,
        duration = 1.75;

    $.each($(path), function(i, el) {
      tl.set($(this), {
        x: '+=' + getRandom(-500, 500),
        y: '+=' + getRandom(-500, 500),
        rotation: '+=' + getRandom(-720, 720),
        scale: 0,
        opacity: 0
      });
    });

    var stagger_opts_to = {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      rotation: 0,
      ease: Power4.easeInOut
    };

    tl.staggerTo(path, duration, stagger_opts_to, stagger_val);

    var $svg = $('svg');
    $svg.hover(
      function() {
        tl.timeScale(0.1);
      },
      function() {
        tl.timeScale(0.65);
      });

    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }

    $('.member').mouseover(function(){
      $('.image',this).css({'transform':'scale(0.75) translateY(-100px)'});
    }).mouseout(function(){
      $('.image',this).css({'transform':'scale(1)','margin-bottom':'0'});
    });
  }else{
    AOS.init({disable:true})
    //Shattering Effect
    var tmax_optionsGlobal = {
      repeat: 0,
      repeatDelay: 0.65,
      yoyo: true
    };

    // CSSPlugin.useSVGTransformAttr = true;

    var tl = new TimelineMax(tmax_optionsGlobal),
        path = 'svg *',
        stagger_val = 0.0325,
        duration = 1.75;

    $.each($(path), function(i, el) {
      tl.set($(this), {
        x: '+=' + getRandom(-500, 500),
        y: '+=' + getRandom(-500, 500),
        rotation: '+=' + getRandom(-720, 720),
        scale: 0,
        opacity: 0
      });
    });

    var stagger_opts_to = {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      rotation: 0,
      ease: Power4.easeInOut
    };

    tl.staggerTo(path, duration, stagger_opts_to, stagger_val);

    var $svg = $('svg');
    $svg.hover(
      function() {
        tl.timeScale(0.65);
      },
      function() {
        tl.timeScale(0.1);
      });

    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }
    $('.about,.team,.sponsors-bg,.events-bg').hide();

    $(".a").click(function() {
        $('.mainpage,.team,.sponsors-bg,.events-bg').hide();
        $('.about').show();
        $('.count').each(function () {
                      $(this).prop('Counter',0).animate({
                          Counter: $(this).text()
                      }, {
                          duration: 3000,
                          easing: 'swing',
                          step: function (now) {
                              $(this).text(Math.ceil(now));
                          }
                      });

                  });
                  // if($(window).width()<= 425){
                  //   $('c-ount').css('font-size','15px');
                  // }
    });
    $(".m").click(function() {
        $('.events-bg,.team,.sponsors-bg,.about').hide();
        $('.mainpage').show();
    });

    $(".e").click(function() {
        $('.mainpage,.team,.sponsors-bg,.about').hide();
        $('.events-bg').show();
    });
    $(".s").click(function() {
        $('.mainpage,.team,.about,.events-bg').hide();
        $('.sponsors-bg').show();
    });
    $(".t").click(function() {
        $('.mainpage,.about,.sponsors-bg,.events-bg').hide();
        $('.team').show();
    });

    $('.member').click(function(){
      $('.image',this).css({'transform':'scale(0.75) translateY(-100px)'});
    }).mouseout(function(){
      $('.image',this).css({'transform':'scale(1)','margin-bottom':'0'});
    });

    $('.box-faces').click(function(){
        $(this).css({"animation":"spin 0.5s linear","animation-fill-mode":"forwards"});
    });
    $('.box-faces').mouseleave(function(){
        $(this).css({"animation":"spinback 0.5s linear","animation-fill-mode":"forwards"});
    });
  }

});
