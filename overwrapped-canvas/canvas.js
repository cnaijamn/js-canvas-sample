// 参考: http://yoppa.org/taumedia10/2065.html

function drawRect(id) {
    var canvas = document.getElementById(id);
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillRect(50, 50, 300, 200);
        ctx.clearRect(120, 80, 200, 140);
        ctx.strokeRect(200, 20, 180, 260);
    }
}

function drawPath(id) {
    var canvas = document.getElementById(id);
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        // 輪郭線による描画
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(360, 200);
        ctx.lineTo(140, 250);
        ctx.closePath();
        ctx.stroke();
        // 塗り潰しによる描画
        ctx.beginPath();
        ctx.moveTo(50, 250);
        ctx.lineTo(160, 20);
        ctx.lineTo(340, 50);
        ctx.closePath();
        ctx.fill();
    }
}

function drawArc(id){
    var canvas = document.getElementById(id);
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        // 円弧1
        ctx.beginPath();
        ctx.arc(200, 150, 100, 0, Math.PI * 2, false);
        ctx.stroke();
        // 円弧2
        ctx.beginPath();
        ctx.arc(200, 150, 80, 0, Math.PI * 1.5, false);
        ctx.stroke();
        // 円弧3
        ctx.beginPath();
        ctx.arc(200, 150, 60, Math.PI * 0.25, Math.PI * 1.5, true);
        ctx.stroke();
        // 円弧4
        ctx.beginPath();
        ctx.arc(200, 150, 20, 0, Math.PI * 2.0, true);
        ctx.fill();
    }
}

function drawColor(id) {
    var canvas = document.getElementById(id);
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        // 全体の透明度
        ctx.globalAlpha = 0.5;
        // 円弧1
        ctx.beginPath();
        ctx.fillStyle = '#3399FF';
        ctx.arc(150, 150, 80, 0, Math.PI * 2.0, true);
        ctx.fill();
        // 円弧2
        ctx.beginPath();
        ctx.fillStyle = '#FF9933';
        ctx.arc(250, 150, 80, 0, Math.PI * 2.0, true);
        ctx.fill();
    }
}
