$(document).ready(function() {
 $('body').append('<p>hello</p>')
})

var renderBoard() {
	var board = [];
  for(var i = 0; i < 8; i++) {
  	for(var k = 0; k <=8; k++) {
     var board.push('<span>1</span>');
  	}
  }
}