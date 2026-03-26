// sample-04.js
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const canvasW = canvas.width;
const canvasH = canvas.height;
console.log(`width=${canvasW} height=${canvasH}`);

document.body.appendChild(canvas);

// 参考: canvas_drawimage.jpg
// https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/drawImage
// ・drawImage(image, dx, dy)
// ・drawImage(image, dx, dy, dWidth, dHeight)
// ・drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

const img = new Image();
img.src = './firefox_browser_logo_icon_152991.webp';

img.addEventListener('load', () => {
  ctx.drawImage(img, 0, 0, 200, 200);
  ctx.drawImage(img, 0, 250, 200, 100);
  ctx.drawImage(img, 0, 0, 512, 256,
                     30, 400, 100, 200);
});
