$(document).ready(function(){
$('#add').click(function(){
$('#container').append('<div id="item"> <input type="file" accept="image/gif, image/jpeg, image/png"><select><option value="select">Primary Image</option> <option value="select">Secondary Image</option></select><button type="button" id="btn"> Remove</button></div><br>');

 $( 'div #btn' ).click(function() {
  $(this).parent().remove();
});
});
});
