var texto = document.getElementById("texto-linea");
var boton = document.getElementById('botoncito');

boton.addEventListener('click', dibujarPorClick);

var d = document.getElementById('dibujito');
var ancho = d.width;
var lienzo = d.getContext("2d");






function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}

function dibujarPorClick() {
        var lineas = parseInt(texto.value);
        var l = 0;
        var yi, xf;
        var colorcito = 'red';
        var espacio = ancho / lineas;

        // while (l < lineas) {
        //     yi = 10 * l
        //     xf = 10 * (l + 1);

        //     dibujarLinea(colorcito, 0, yi, xf,300);
        //     console.log("linea" + l);
        //     l++;
        // }

        for (l=0; l < lineas; l++) {
            yi = espacio * l
            xf = espacio * (l + 1);

            dibujarLinea(colorcito, 0, yi, xf,300);
            // dibujarLinea(colorcito, 300, yi, xf, 0);
            console.log("linea" + l);
            
            
        }

        for (l=0; l < lineas; l++) {
            yi = 300 - (espacio * l);
            xf = espacio * (l+1);
            // dibujarLinea(colorcito, 300, yi, xf, 300);
            dibujarLinea(colorcito, 0, yi, xf, 0);
            
        }

        dibujarLinea(colorcito, 1, 1, 1, 300);
        dibujarLinea(colorcito, 1, 299, 299, 300);
}