// venobox
new VenoBox({
    selector: ".my-video-links"
});

// student slider

$('.students_slider').slick({
    dots: true,
    arrows:false,
    speed: 300,
    slidesToShow: 1,
    fade:true,
    centerPadding:"0",
    centerMode:true,
  });

//   back top button
$(".backtop").click(function(){
    $("html,body").animate({
        scrollTop:0,
    })
})
// backtop button hide

$(window).scroll(function(){
    var scrolling = $(this).scrollTop()
    
    if(scrolling > 10){
      $(".backtop").fadeIn(1000)
    }else{
       $(".backtop").fadeOut(1000)
    }
   
    
  })

//   navbar down 

// navv scroll

$(window).scroll(function(){
    var scrolling = $(this).scrollTop()
    if(scrolling > 10){
      $("nav").addClass("navdown")
    }else{
       $("nav").removeClass("navdown")
    }
    
   
    
  })