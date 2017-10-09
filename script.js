$(document).ready(readyNow);

function readyNow() {
  $('#gen').on('click', generateFunction);
  $('.CodeClass').on('click', '#swapButton', swapFunction);
  $('.CodeClass').on('click', '#deleteButton', deleteFunction);
}

clicks=0;
function generateFunction(){
  clicks++;
var append = "<div id='generateD'></div>";
var button1= "<button type='button' id='swapButton' name='button1'>Swap</button>";
var button2= "<button type='button' id='deleteButton' name='button2'>Delete</button>";
  $('.CodeClass').append(append);
  $('#generateD').append('<p>' + clicks + '</p>');
  $('#generateD').append(button1);
  $('#generateD').append(button2);
}

function swapFunction(){
  $(this).parent().css('background-color', 'yellow');
}

function deleteFunction(){
  $(this).parent().remove();
}
