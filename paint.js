var canvas;
var ctx;
window.onload = function () {
	canvas = document.getElementById("drawingCanvas");
	ctx = canvas.getContext("2d");
	canvas.mousedown = startDrawing; // jesli klawisz myszy jest wcisniety to zacznij rysowac
	canvas.onmouseup = stopDrawing; // jesli klawisz myszy jest zwolniony to przestan rysowac
	canvas.onmouseout = stopDrawing; // jesli kursor myszy wyszedl poza canvas to przestan rysowac
	canvas.onmousemove = draw; // jesli kursor jest w ruchu to rysuj
};

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