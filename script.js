$(document).ready(readyNow);

function readyNow() {
  $('#gen').on('click', generateFunction);
  $('div').on('click', '#swapButton', swapFunction);
  $('div').on('click', '#deleteButton', deleteFunction);
}

var clicks=0;
function generateFunction(){

clicks++;
  var button1= "<button type='button' id='swapButton' name='button1'>Swap</button>";
  var button2= "<button type='button' id='deleteButton' name='button2'>Delete</button>";
  var clickCount='<p>' + clicks + '</p>';
  $('.CodeClass').append('<div>' + button1 + button2 + clickCount + '</div>');
}
console.log(clicks);

function swapFunction(){
  $(this).parent().css('background-color', 'yellow');
}

function deleteFunction(){
  $(this).parent().remove();
}
