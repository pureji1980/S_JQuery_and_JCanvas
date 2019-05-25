// jcanvas.d.ts
// 2019.5.25 ぷれじ改
// https://github.com/uestla/convex-hull/blob/master/ConvexHull/jcanvas.d.ts
//
// jqjc.ts の先頭にて
// <reference path="src/jcanvas.d.ts" /> を追記すること(トリプルスラッシュ)
// なお、jQuery.d.tsは
// npm install --save @types/jquery を推奨

interface JQuery {
	drawLayers(): JQuery;
	clearCanvas(): JQuery;
	removeLayers(): JQuery;
	drawArc(options: any): JQuery;
	drawLine(options: any): JQuery;
	drawText(options: any): JQuery;
	drawRect(options: any): JQuery; //なぜか無かったので追記
        removeLayer(name: string): JQuery;
	removeLayerGroup(name: string): JQuery;
	setLayer(name: string, options: any): JQuery;
	setLayerGroup(name: string, options: any): JQuery;

	attr(name: string, value: boolean): JQuery;
}

//追記
//$.jCanvas.defaults.fromCenter = false; を通すため
interface JQueryStatic{
	jCanvas:any;
}
