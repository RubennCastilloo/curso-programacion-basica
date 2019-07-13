var d = document.getElementById('dibujito');
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = 'red';

// while (l < lineas) {
//     yi = 10 * l
//     xf = 10 * (l + 1);

//     dibujarLinea(colorcito, 0, yi, xf,300);
//     console.log("linea" + l);
//     l++;
// }

for (l=0; l < lineas; l++) {
    yi = 10 * l
    xf = 10 * (l + 1);

    dibujarLinea(colorcito, 0, yi, xf,300);
    // dibujarLinea(colorcito, 300, yi, xf, 0);
    console.log("linea" + l);
    
}

for (l=0; l < lineas; l++) {
    yi = 300 - (10 * l);
    xf = 10 * (l+1);
    // dibujarLinea(colorcito, 300, yi, xf, 300);
    dibujarLinea(colorcito, 0, yi, xf, 0);
    
}

dibujarLinea(colorcito, 1, 1, 1, 300);
dibujarLinea(colorcito, 1, 299, 299, 300);





function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}