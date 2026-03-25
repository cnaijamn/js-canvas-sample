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
        ctx.arc(100, 150, 80, 0, Math.PI * 2.0, true);
        ctx.fill();
        // 円弧2
        ctx.beginPath();
        ctx.fillStyle = '#FF9933';
        ctx.arc(200, 150, 80, 0, Math.PI * 2.0, true);
        ctx.fill();
        // 円弧3,4 (同色で重ねる)
        ctx.beginPath();
        ctx.fillStyle = '#9933FF';
        ctx.arc(250, 150, 80, 0, Math.PI * 2.0, true);
        ctx.arc(300, 150, 80, 0, Math.PI * 2.0, true);
        ctx.fill();
        // 同色の複数の多角形
        ctx.beginPath();
        ctx.fillStyle = '#330000';
        {
          ctx.moveTo(150, 250);
          ctx.lineTo(260, 20);
          ctx.lineTo(340, 50);
          ctx.closePath();
        }
        {
          ctx.moveTo(50, 50);
          ctx.lineTo(360, 200);
          ctx.lineTo(140, 250);
          ctx.closePath();
        }
        ctx.fill();
    }
}

function drawRandomLine(id) {
    var canvas = document.getElementById(id);
        if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        // 全体の透明度
        ctx.globalAlpha = 0.3;
        // 1000回処理を繰り返す
        for (i = 0; i < 1000; i++) {
            ctx.beginPath();
            // ランダムな色を生成
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            ctx.strokeStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
            // ランダムな場所に始点を移動
            ctx.moveTo(Math.random() * 400, Math.random() * 300);
            // ランダムな場所まで線分を描く
            ctx.lineTo(Math.random() * 400, Math.random() * 300);
            ctx.stroke();
        }
    }
}

function drawAnim1(id) {
    var speedX = 3.0;
    var speedY = 4.0;
    var locX = 200;
    var locY = 150;
    var ctx;

    var canvas = document.getElementById(id);
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        setInterval(draw, 33);
    }

    function draw() {
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "rgba(8, 8, 12, .2)";
        ctx.fillRect(0, 0, 400, 300);
        ctx.globalCompositeOperation = "lighter";

        // 位置を更新
        locX += speedX;
        locY += speedY;

        if (locX < 0 || locX > 400)
            speedX *= -1;

        if (locY < 0 || locY > 300)
            speedY *= -1;

        // 更新した座標で円を描く
        ctx.beginPath();
        ctx.fillStyle = '#3399FF';
        ctx.arc(locX, locY, 4, 0, Math.PI * 2.0, true);
        ctx.fill();
    }
}

function drawAnim2(id) {
    const NUM = 10;
    const WIDTH = 400;
    const HEIGHT = 300;
    const PI_2 = Math.PI * 2;
    var speedX = new Array(NUM);
    var speedY = new Array(NUM);
    var locX = new Array(NUM);
    var locY = new Array(NUM);
    var radius = new Array(NUM);
    var r = new Array(NUM);
    var g = new Array(NUM);
    var b = new Array(NUM);
    var ctx;

    var canvas = document.getElementById(id);
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        for (var i = 0; i < NUM; i++) {
            speedX[i] = Math.random() * 8.0 - 4.0;
            speedY[i] = Math.random() * 8.0 - 4.0;
            locX[i] = WIDTH / 2;
            locY[i] = HEIGHT / 2;
            radius[i] = Math.random() * 8.0 + 1.0;
            r[i] = Math.floor(Math.random() * 96);
            g[i] = Math.floor(Math.random() * 96);
            b[i] = Math.floor(Math.random() * 96);
        }
        setInterval(draw, 33);
    }

    function draw() {
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "rgba(8, 8, 12, .2)";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        ctx.globalCompositeOperation = "lighter";

        for (var i = 0; i < NUM; i++) {
            // 位置を更新
            locX[i] += speedX[i];
            locY[i] += speedY[i];

            if (locX[i] < 0 || locX[i] > WIDTH)
                speedX[i] *= -1;

            if (locY[i] < 0 || locY[i] > HEIGHT)
                speedY[i] *= -1;

            // 更新した座標で円を描く
            ctx.beginPath();
            ctx.fillStyle = 'rgb(' + r[i] + ',' + g[i] + ',' + b[i] + ')';
            ctx.arc(locX[i], locY[i], radius[i], 0, PI_2, true);
            ctx.fill();
        }
    }
}

function drawAnim3(id) {
    var PI_2 = Math.PI * 2;
    var canvasW = 400;
    var canvasH = 300;
    var numMovers = 50;
    var friction = .96;
    var movers = [];

    var canvas;
    var ctx;

    var mouseX;
    var mouseY;
    var mouseVX;
    var mouseVY;
    var prevMouseX;
    var prevMouseY;
    var isMouseDown;

    canvas = document.getElementById(id);
    if (canvas.getContext) {
        setup();
        setInterval(draw, 33);
    }

    function setup() {
        ctx = canvas.getContext("2d");

        var i = numMovers;
        while (i--) {
            var m = new Mover();
            m.x = canvasW * 0.5;
            m.y = canvasH * 0.5;
            m.vX = Math.cos(i) * Math.random() * 34;
            m.vY = Math.sin(i) * Math.random() * 34;
            movers[i] = m;
        }

        mouseX = prevMouseX = canvasW * 0.5;
        mouseY = prevMouseY = canvasH * 0.5;

        document.onmousedown = onDocMouseDown;
        document.onmouseup = onDocMouseUp;
        document.onmousemove = onDocMouseMove;
    }

    function draw() {
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "rgba(8, 8, 12, .65)";
        ctx.fillRect(0, 0, canvasW, canvasH);
        ctx.globalCompositeOperation = "lighter";

        mouseVX = mouseX - prevMouseX;
        mouseVY = mouseY - prevMouseY;
        prevMouseX = mouseX;
        prevMouseY = mouseY;

        var toDist = canvasW * 0.86;
        var stirDist = canvasW * 0.125;
        var blowDist = canvasW * 0.5;

        var Mrnd = Math.random;
        var Mabs = Math.abs;

        var i = numMovers;
        while (i--) {
            var m = movers[i];
            var x = m.x;
            var y = m.y;
            var vX = m.vX;
            var vY = m.vY;

            var dX = x - mouseX;
            var dY = y - mouseY;
            var d = Math.sqrt(dX * dX + dY * dY);
            if (d == 0) d = 0.001;
            dX /= d;
            dY /= d;

            if (isMouseDown) {
                if (d < blowDist) {
                    var blowAcc = (1 - (d / blowDist)) * 14;
                    vX += dX * blowAcc + 0.5 - Mrnd();
                    vY += dY * blowAcc + 0.5 - Mrnd();
                }
            }

            if (d < toDist) {
                var toAcc = (1 - (d / toDist)) * canvasW * 0.0014;
                vX -= dX * toAcc;
                vY -= dY * toAcc;
            }

            if (d < stirDist) {
                var mAcc = (1 - (d / stirDist)) * canvasW * 0.00026;
                vX += mouseVX * mAcc;
                vY += mouseVY * mAcc;
            }

            vX *= friction;
            vY *= friction;

            var avgVX = Mabs(vX);
            var avgVY = Mabs(vY);
            var avgV = (avgVX + avgVY) * 0.5;

            if (avgVX < .1) vX *= Mrnd() * 3;
            if (avgVY < .1) vY *= Mrnd() * 3;

            var sc = avgV * 0.45;
            sc = Math.max(Math.min(sc, 3.5), 0.4);

            var nextX = x + vX;
            var nextY = y + vY;

            if (nextX > canvasW) {
                nextX = canvasW;
                vX *= -1;
            } else if (nextX < 0) {
                nextX = 0;
                vX *= -1;
            }

            if (nextY > canvasH) {
                nextY = canvasH;
                vY *= -1;
            } else if (nextY < 0) {
                nextY = 0;
                vY *= -1;
            }

            m.vX = vX;
            m.vY = vY;
            m.x = nextX;
            m.y = nextY;

            ctx.fillStyle = m.color;
            ctx.beginPath();
            ctx.arc(nextX, nextY, sc, 0, PI_2, true);
            ctx.closePath();
            ctx.fill();
        }
    }

    function onDocMouseMove(e) {
        var ev = e ? e : window.event;
        mouseX = window.pageXOffset + ev.clientX - canvas.offsetLeft;
        mouseY = window.pageYOffset + ev.clientY - canvas.offsetTop;
        trace(mouseX + ":" + mouseY);
    }

    function onDocMouseDown(e) {
        isMouseDown = true;
        return false;
    }

    function onDocMouseUp(e) {
        isMouseDown = false;
        return false;
    }

    function Mover() {
        this.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        this.x = 0;
        this.y = 0;
        this.vX = 0;
        this.vY = 0;
        this.size = 1;
    }

    function rect(context, x, y, w, h) {
        context.beginPath();
        context.rect(x, y, w, h);
        context.closePath();
        context.fill();
    }
}

function trace(str) {
    document.getElementById("output").innerHTML = str;
}
