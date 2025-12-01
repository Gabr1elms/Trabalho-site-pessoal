$(document).ready(function () {
  let likeCount = 0; 


  $('#like-button').on('click', function () {
    likeCount++; 
    $('#like-count').text(likeCount); 
  });
});


$(document).ready(function () {
  $('.navbar-toggler').on('click', function () {
    $('#navbarNav').collapse('toggle');
  });
});


$(document).ready(function () {
  let likeCount = 0; 


  $('#like-button').on('click', function () {
    likeCount++; 
    $('#like-count').text(likeCount); 
  });
});

$(document).ready(function () {
  const toggleButton = $('#theme-toggle');

  toggleButton.on('click', function () {
    $('body').toggleClass('white-mode'); 

    if ($('body').hasClass('dark-mode')) {
      toggleButton.text('☀️'); 
    } else {
      toggleButton.text('🌙'); 
    }
  });
});