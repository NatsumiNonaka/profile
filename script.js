$(function() {

  $(function() {
    setTimeout(function(){
      $('h1','p').fadeIn(1600);
    },500); 
    s
  });

  $('#top-btn').click(function(){
    $('html, body').animate({
      'scrollTop':0
     }, 600);
  });

  $('.photo-hover') .hover (
    function() {  
    $(this).find('.text-contents').fadeIn('text-active');      
    },
     function() {
    $(this).find('.text-contents').fadeOut('text-active');
   });

   $('#korean-img').click(function(){
    $('#korean-modal').fadeIn();
    });

  $('#cakes-img').click(function(){
      $('#cakes-modal').fadeIn();
    });

  $('#oc-img').click(function(){
      $('#oc-modal').fadeIn();
    });

   $('.close-modal').click(function(){
      $('#korean-modal').fadeOut();
      $('#cakes-modal').fadeOut();
      $('#oc-modal').fadeOut();
    });

      

});
















