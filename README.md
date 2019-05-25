# S_JQuery_and_JCanvas
How to use TypeScript & JQuery & Jcanvas

tttt
 |--node_modules
 | |-@types
 |
 |--src
 | |-jcanvas.d.ts
 | |-jquery-3.4.1.js (https://jquery.com/download/)
 | |-jcanvas.min.js  (https://raw.githubusercontent.com/caleb531/jcanvas/v21.0.1/dist/min/jcanvas.min.js)
 | 
 |-jqjc.html         (<script src="src/jquery-3.4.1.js></script> <script src="src/jcanvas.min.js"></script>)
 |-jqjc.ts           (///<reference path="src/jcanvas.d.ts" />
 |-jqjc.js
 |-main.css
 |-package-lock.json
 
 
(ex:/var/www/html :A)
mkdir tttt
cd tttt 
npm install @types/jquery --save (it makes node_modules/@types in A/tttt)
tsc jqjc.ts -m commonjs -t ES6

localhost/tttt/jqjc.html
