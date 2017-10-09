$(document).ready(readyNow);

function readyNow() {
  $('#gen').on('click', generateFunction);
}

clicks=0;
function generateFunction(){
  clicks++;
var append = "<p>awesomeDiv</p>";
var button1= "<button type='button' id='button1' name='button1'>Swap</button>";
var button2= "<button type='button' id='button2' name='button2'>Delete</button>";
  $('#generateD').append(append);
  $('#clickCount').html(clicks);
  $('#generateD').append(button1);
  $('#generateD').append(button2);
}
