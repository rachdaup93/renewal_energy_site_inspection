(function($){
  const banner1 = Math.ceil(Math.random() * 4);
  const banner2 = Math.ceil(Math.random() * 3);
  const banner3 = Math.ceil(Math.random() * 3);
  const banner4 = Math.ceil(Math.random() * 3);
  const banner5 = Math.ceil(Math.random() * 3);

  $('#banner').data('bg', `first${banner1}.jpg`);
  $('#one').data('bg', `second${banner2}.jpg`);
  $('#two').data('bg', `third${banner3}.jpg`);
  $('#three').data('bg', `forth${banner4}.jpg`);
  $('#four').data('bg', `fifth${banner5}.jpg`);
})(jQuery);