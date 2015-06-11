var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>")
  //image to overlay
$overlay.append($image);
  //a caption to overlay
$overlay.append($caption);
  //add overlay
$("body").append($overlay);


  //capture the click event on a link to an image
$("#imageGallery img").click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("#");
   //update overlay with the image linked in the link
  $image.attr("src" , imageLocation);
  
   //show the over lay
  $overlay.show();
   
  
   //get childs alt atribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

//when overlay ois clicked
$overlay.click(function(){
  //hide overlay
  $overlay.hide();

});