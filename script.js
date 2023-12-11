
//------------------------------------- Funciones para el calculo ---------------------------
function hollidaySegar(pesoH) {
    let resultado = 0
    if (pesoH <= 10) {
        resultado = pesoH * 100

    } else if (pesoH <= 20) {
        resultado = 1000 + ((pesoH - 10) * 50)
    } else {
        resultado = 1500 + ((pesoH - 20) * 20)
    }
    return resultado
}
function superficieCorporal(pesoS) {
    let resultado = 0
    resultado = ((pesoS * 4) + 7) / (pesoS + 90)
    return resultado
}


const CALCULAR = document.getElementById("calcular");
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const DIA = document.getElementById('dia');
//Para la caja de texto que muestre el metodo
const cajaDetalle = document.getElementById('detalle');
const CONTENEDOR = document.getElementById('contenido')
const msjhs = document.getElementById('metodohs')//mensaje de holly segar
const msjsc = document.getElementById('metodosc')//mensaje de superficie corpotal

cajaDetalle.style.display = "none"
CONTENEDOR.style.display = "none"

CALCULAR.addEventListener('click', () => {

    
    let peso = document.getElementById('pesokg').valueAsNumber;

    if (peso > 0) {

        ERROR.innerHTML = "Debe completar todos los datos"
        ERROR.style.display = "none"
        if (peso <= 30) {
            DIA.innerHTML = "Volumen Diario: " + hollidaySegar(peso) + " cc"
            DIA.style.display = "block"
            FLU.innerHTML = "Mantenimiento: " + ((hollidaySegar(peso) / 24).toFixed(2)) + " cc/hr"
            FLU.style.display = "block"
            ERROR.style.display = "none"
            MAN.innerHTML = "man+man/2: " + (((hollidaySegar(peso) / 24) + (hollidaySegar(peso) / 24) / 2)).toFixed(2) + " cc/hr"
            MAN.style.display = "block"
            ERROR.style.display = "none"
            CONTENEDOR.style.display = "block"
            cajaDetalle.style.display = "block"
            msjhs.style.display = "block"
            msjsc.style.display = "none"

        } else {
            DIA.style.display = "none"
            let sc = superficieCorporal(peso) * 1500;
            FLU.innerHTML = 'Superficie Corporal *1500 : ' + sc.toFixed(2) + ' cc';
            sc = superficieCorporal(peso) * 2000;
            MAN.innerHTML = 'Superficie Corporal *2000 : ' + sc.toFixed(2) + ' cc';
            CONTENEDOR.style.display = "block"
            cajaDetalle.style.display = "block"
            msjhs.style.display = "none"
            msjsc.style.display = "block"
        }
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
} );
