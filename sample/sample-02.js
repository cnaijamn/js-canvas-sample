// sample-02.js
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const canvasW = canvas.width;
const canvasH = canvas.height;
console.log(`width=${canvasW} height=${canvasH}`);

document.body.appendChild(canvas);

ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.lineWidth = 10;
  ctx.rect(canvasW / 4, canvasH / 4, 200, 100);
  ctx.stroke();
ctx.closePath();

ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.fillRect(canvasW / 5, canvasH / 2, 200, 200);
  ctx.fill();

  ctx.fillStyle = "blue";
  ctx.fillRect(canvasW / 2, canvasH / 2, 200, 100);
  ctx.fill();
ctx.closePath();
