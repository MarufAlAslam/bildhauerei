$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button class="btn btn-dark br-0 prevBtn"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="btn btn-dark br-0 nextBtn"><i class="fa fa-angle-right"></i></button>'
  });
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $('.filterBtn').click(function(){
        $('.filterBtn').removeClass('active')
        $(this).addClass('active')
    })

    $('.allbtn').click(function(){
        $('.all').show(300)
    })
    $('.grambmalebtn').click(function(){
        $('.all').hide()
        $('.grambmale').show(300)
    })
    $('.skulpturenbtn').click(function(){
        $('.all').hide()
        $('.skulpturen').show(300)
    })
    $('.resbtn').click(function(){
        $('.all').hide()
        $('.res').show(300)
    })

