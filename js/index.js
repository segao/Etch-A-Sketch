// FUNCTION DEFINITIONS
// Creates a grid with (size x size) dimensions 
function makeGrid(size) {
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      $('#grid').append("<div class='block notHovered'></div>");
    }
  }
  var side = size * size;
  $(".block").width(480/size);
  $(".block").height(480/size);
  $('.block').on("mouseover", black);
}

// Creates a new grid with user given dimensions
function newGrid() {
	newSize = prompt("Please enter a new size for the grid: ");
  if (newSize === null)
      return;
  while (isNaN(newSize) || newSize < 1) {
  	newSize = prompt("Please enter a positive integer value: ");
    if (newSize === null)
      return;
  }
  $('#grid').empty();
  makeGrid(newSize);
}
// Button click function to call newGrid()
$('#newGrid').click(function(){
	newGrid();
});

// Changes color of block to black on hover
function black() {
  $(this).css("background-color", "black");
  $(this).css("opacity", "1");
}
// Button click function to turn on black color
$('#black').click(function(){
  $('.block').off("mouseover");
	$('.block').on("mouseover", black);
});

// Gradient-mode: each hover increases the opacity by 10%
function gradient() {
  if ($(this).hasClass('notHovered')) {
    $(this).css("background-color", "black");
    $(this).css("opacity", "0.1");
    $(this).removeClass('notHovered');
  }
  else {
    $(this).css("opacity", "+=0.1");
  }
}
// Button click function to turn on gradient-mode
$('#gradient').click(function(){
  $('.block').off("mouseover");
	$('.block').on("mouseover", gradient);
});

// Rainbow-mode: block changes to a random color on hover
function rainbow() {
  var randomColor = "#" + ((1<<24)*Math.random()|0).toString(16);
  $(this).css("background-color", randomColor);
  $(this).css("opacity", "1");
}
// Button click function to turn on gradient-mode
$('#rainbow').click(function(){
  $('.block').off("mouseover");
	$('.block').on("mouseover", rainbow);
});

// Clears and resets sketch pad to original size
function reset() {
  $('#grid').empty();
  makeGrid(32);
}
// Button click function to call reset()
$('#reset').click(function(){
	reset();
});

// Initializes page with a 16 x 16 grid
$(document).ready(function() {
  makeGrid(32);
});