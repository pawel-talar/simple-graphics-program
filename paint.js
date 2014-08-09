var canvas;
var ctx;

window.onload = function() {
  canvas = document.getElementById("drawingCanvas");
  ctx = canvas.getContext("2d");

  canvas.onmousedown = startDrawing; // wcisniecie prawego przycisku myszki powoduje zaczecie rysowania
  canvas.onmouseup = stopDrawing; // zwonienie prawego przycisku myszki przerywa rysowanie
  canvas.onmouseout = stopDrawing; // wyjechanie kursorem poza canvas przerywa rysowanie
  canvas.onmousemove = draw; // poruszanie myszka powoduje rysowanie
};

var isDrawing = false; // zmienna logiczna, ktora przechowuje informacje o tym czy skrypt ma rysowac, czy nie

function startDrawing(e) { // funkcja odpowiadajaca za rozpoczecie rysowania
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop); // przesuniece olowka w miejsce, w którym znajduje sie kursor myszki
}

function stopDrawing() {  
  isDrawing = false;
}
 
function draw(e) { // funkcja rysujaca
  if (isDrawing == true) { // jesli masz rysowac to...
    // ustalanie wpolrzednych rysowanej linii
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;   
    ctx.lineTo(x, y); // zaznaczenie linii o powyzszych wspolrzednych 
    ctx.stroke(); // narysowanie zadanej linii	
  }
}

function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height); //czysc cale plotno
	ctx.beginPath(); // rozpocznij nowa sciezke rysowania
}

var previousColorElement; // wczesniejszy kolor z palety
function changeColor(color, imgElement) {
  ctx.strokeStyle = "color";
  imgElement.className = "Selected";
  if (previousColorElement != null) previousColorElement.className = "";
  previousColorElement = imgElement;
}

var previousSizeElement; // wczesniejszy rozmiar 
function changeSize(size, imgElement) {
  ctx.lineWidth = size;
  imgElement.className = "Selected";
  if (previousSizeElement != null) previousSizeElement.className = "";
  previousSizeElement = imgElement;
}