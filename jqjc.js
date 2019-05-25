///<reference path="src/jcanvas.d.ts"/>
// npm install --save @types/jquery  ←Jquery.d.tsの設定
/* jQuery と jCanvas の型定義ファイルを設定することで、
  トランスパイルが通るようにする。
   tsc -m commonjs -t ES6 jqjc.ts
*/
//jCanvas描画起点を中心からではなく左上からにする
$.jCanvas.defaults.fromCenter = false;
$(function () {
    console.log("jQuery is alive!");
    $(".test").text("testtest");
    var d = new Draws(10, 20, "#CCAC26");
    d.draw();
});
class Draws {
    constructor(x, y, c) {
        this.x = x || 0;
        this.y = y || 0;
        this.c = c || "#000000";
    }
    draw() {
        $("#canv").drawRect({
            fillStyle: this.c,
            x: this.x, y: this.y,
            width: 200,
            height: 100,
            draggable: true
        });
        $("#canv").drawText({
            fillStyle: '#9cf',
            strokeStyle: '#25a',
            strokeWidth: 2,
            x: 150, y: 100,
            fontSize: 48,
            fontFamily: 'Verdana, sans-serif',
            text: 'Hello'
        });
    }
}
