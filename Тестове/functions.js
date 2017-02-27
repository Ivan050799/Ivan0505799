(function($) {
  var $li = $('.img-list').find('> li'),
      $links = $li.find('> a'),
      $lightbox = $('.lightbox'),
      $next = $('.next'),
      $prev = $('.prev'),
      $overlay = $('.overlay'),
      liIndex,
      targetImg;
  
  //preload images
  var imgSources = [
  'UuFv_kw6eGE.jpg',
  'B7iPvfazzeE.jpg',
  'EZA2zKyaU2o.jpg',
  '5NjJPSBTTnU.jpg',
 'xqvaDrM2FoI.jpg',
'WJOK2Vr-f7o.jpg'
      
  ];

  var imgs = [];
  for (var i = 0; i < imgSources.length; i++) {
    imgs[i] = new Image();
    imgs[i].src = imgSources[i];
  }

  function replaceImg(src) {
    $lightbox.find('img').attr('src', src);
  }

  function getHref(index) {
    return $li.eq(index).find('>a').attr('href');
  }

  function closeLigtbox() {
    $lightbox.fadeOut();
  }

  $overlay.click(closeLigtbox);
    

  $links.click(function(e) {
    e.preventDefault();
    targetImg = $(this).attr('href');
    liIndex = $(this).parent().index();
    replaceImg(targetImg);
    $lightbox.fadeIn();
  });

   $next.click( function() {  
    if ( (liIndex + 1) < $li.length ) { 
      targetImg = getHref(liIndex + 1);
      liIndex ++;
    } else {
      targetImg = getHref(0);
      liIndex = 0;
    }
    replaceImg(targetImg);
  });

   $prev.click( function() {  
    if ( (liIndex) > 0 ) { 
      targetImg = getHref(liIndex - 1);
      liIndex --;
    } else {
      targetImg = getHref($li.length - 1);
      liIndex = $li.length - 1;
    }
    replaceImg(targetImg);
  });
  $('body').append('<button class="btn_up"/>');
    $('.btn_up').click(function(){
       $('body').animate({scrollTop: 0}, 1000);
        $('html').animate({scrollTop: 0}, 1000);
        });
    

})(jQuery);
