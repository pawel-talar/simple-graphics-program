var canvas;
var ctx;

window.onload = function() {
  canvas = document.getElementById("drawingCanvas");
  ctx = canvas.getContext("2d");
  addBackground();
  canvas.onmousedown = startDrawing; // wcisniecie prawego przycisku myszki powoduje zaczecie rysowania
  canvas.onmouseup = stopDrawing; // zwonienie prawego przycisku myszki przerywa rysowanie
  canvas.onmouseout = stopDrawing; // wyjechanie kursorem poza canvas przerywa rysowanie
  canvas.onmousemove = draw; // poruszanie myszka powoduje rysowanie
};

// funkcja dodajaca tlo w kolorze bialym
function addBackground() {	
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

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

// funkcja czysci plotno i dodaje tlo za pomoca funkcji addBackground
function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height); //czysc cale plotno
	addBackground();
	ctx.beginPath(); // rozpocznij nowa sciezke rysowania
}

var previousColorElement; // wczesniejszy kolor z palety
// funkcja zmieniajaca kolor na wybrany z palety
function changeColor(color, imgElement) {  	
  if (color == 1) ctx.strokeStyle = "black";
  else if (color == 2) ctx.strokeStyle = "blue";
  else if (color == 3) ctx.strokeStyle = "brown";
  else if (color == 4) ctx.strokeStyle = "green";
  else if (color == 5) ctx.strokeStyle = "grey";
  else if (color == 6) ctx.strokeStyle = "orange";
  else if (color == 7) ctx.strokeStyle = "pink";
  else if (color == 8) ctx.strokeStyle = "purple";
  else if (color == 9) ctx.strokeStyle = "red";
  else if (color == 10) ctx.strokeStyle = "white";
  else if (color == 11) ctx.strokeStyle = "gold"; 
  imgElement.className = "Selected";
  if (previousColorElement != null) previousColorElement.className = "";
  previousColorElement = imgElement;
}

var previousSizeElement; // wczesniejszy rozmiar

// funkcja zmieniajaca rozmiar "pedzla" 
function changeSize(size, imgElement) {
  ctx.lineWidth = size;
  imgElement.className = "Selected";
  if (previousSizeElement != null) previousSizeElement.className = "";
  previousSizeElement = imgElement;
}																																		
