var canvas;
var ctx;

window.onload = function() {
  canvas = document.getElementById("drawingCanvas");
  ctx = canvas.getContext("2d");

  ctx.onmousedown = startDrawing;
  ctx.onmouseup = stopDrawing;
  ctx.onmouseout = stopDrawing;
  ctx.onmousemove = draw;
};

var isDrawing = false;

function startDrawing(e) {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}

function stopDrawing() {
  isDrawing = false;
}

function draw(e) {
  if (isDrawing == true) {
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;
    ctx.lineTo(x, y);
    ctx.stroke();	
  }
}
var previousColorElement; // wczesniejszy color
function changeColor(color, imgElement){ // funkcja zmieniajaca kolor rysowania
	ctx.strokeStyle = color; // zmien color rysowania na kolor wybrany przez uzytkownika
	imgElement.className = "Selected"; // oznacz kolor na palecie jako wybrany
	if (previousColorElement != null) { // jesli wczesniejszy kolor istnieje
		previousColorElement.className = " "; // odznacz go jako wybrany na palecie
		previousColorElement = imgElement;	// do wczesniejszego koloru przypisz obecny
	}
}

var previousSizeElement; //wczesniejszy rozmiar
function changeSize(size, imgElement){ // funkcja zmieniajaca rozmiar "pisaka"
	ctx.lineWidth = size; 
	imgElement.className = "Selected";
	if (previousSizeElement != null) {
		previousSizeElement.className = " ";
		previousSizeElement = imgElement;				
	}
}