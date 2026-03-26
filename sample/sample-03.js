// sample-03.js
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const canvasW = canvas.width;
const canvasH = canvas.height;
console.log(`width=${canvasW} height=${canvasH}`);

document.body.appendChild(canvas);

// 円・扇型
// arc(x, y, radius, startRadian, endRadian [, counterclockwise])
//  x                :円の中心のx座標
//  y                :円の中心のy座標
//  radius           :円の半径
//  startRadian      :描画開始の角度(弧度で指定)
//  endRadian        :描画終了の角度(弧度で指定)
//  counterclockwise :描画の方向を真偽値で指定

ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(canvasW / 2, canvasH / 3, 50, 0, Math.PI * 2, false);
  ctx.fill();
ctx.closePath();

ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.moveTo(canvasW / 2, canvasH * 2 / 3);
  ctx.arc(canvasW / 2, canvasH * 2 / 3, 40, 0, Math.PI / 4, false);
  ctx.fill();
ctx.closePath();

ctx.beginPath();
  //ctx.fillStyle = "purple";
  ctx.strokeStyle = "purple";
  ctx.lineWidth = 20;
  ctx.arc(canvasW / 2, canvasH / 2, 50, 0, Math.PI * 1.5, false);
  //ctx.fill();
  ctx.stroke();
ctx.closePath();

// 楕円
// ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise])
//  x             :中心のx座標
//  y             :中心のy座標
//  radiusX       :横の半径
//  radiusY       :縦の半径
//  rotation      :傾き
//  startAngle    :開始角度
//  endAngle      :終了角度
//  anticlockwise :描画方向

ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 10;
  ctx.ellipse(canvasW / 2, canvasH / 2, 300, 150, 0, 0, Math.PI * 2);
  ctx.stroke();
ctx.closePath();
