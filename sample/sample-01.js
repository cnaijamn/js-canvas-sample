// sample-01.js
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const canvasW = canvas.width;
const canvasH = canvas.height;
console.log(`width=${canvasW} height=${canvasH}`);

document.body.appendChild(canvas);

ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 10;
  ctx.moveTo(0, canvasH / 2);
  ctx.lineTo(canvasW, canvasH / 2);
  ctx.stroke();
ctx.closePath();

ctx.beginPath();
  ctx.strokeStyle = 'blue';
  //ctx.lineWidth = 10;
  ctx.moveTo(0, canvasH / 3);
  ctx.lineTo(canvasW, canvasH / 3);
  ctx.stroke();
ctx.closePath();
