var canvas;
var ctx;

window.onload = function() {
  canvas = document.getElementById("drawingCanvas");
  ctx = canvas.getContext("2d");

  canvas.onmousedown = startDrawing;
  canvas.onmouseup = stopDrawing;
  canvas.onmouseout = stopDrawing;
  canvas.onmousemove = draw;
};

var isDrawing = false;

function startDrawing(e) {
  isDrawing = true;
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

var previousColorElement;
function changeColor(color, imgElement) {
  ctx.strokeStyle = color;
  imgElement.className = "Selected";
  if (previousColorElement != null) previousColorElement.className = "";
  previousColorElement = imgElement;
}

var previousSizeElement;
function changeSize(size, imgElement) {
  ctx.lineWidth = thickness;
  imgElement.className = "Selected";
  if (previousSizeElement != null) previousThicknessElement.className = "";
  previousSizeElement = imgElement;
}