$(document).ready(readyNow);

function readyNow() {
  $('#gen').on('click', generateFunction);
  $('.CodeClass').on('click', '#swapButton', swapFunction);
}

clicks=0;
function generateFunction(){
  clicks++;
var append = "<div id='generateD'>awesomeDiv</div>";
var button1= "<button type='button' id='swapButton' name='button1'>Swap</button>";
var button2= "<button type='button' id='button2' name='button2'>Delete</button>";
  $('.CodeClass').append(append);
  $('#generateD').html('<p>' + clicks + '</p>');
  $('#generateD').append(button1);
  $('#generateD').append(button2);
}

function swapFunction(){
  $('#generateD').css('background-color', 'yellow');
}
