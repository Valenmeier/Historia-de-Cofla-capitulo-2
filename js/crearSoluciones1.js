let free = false;
const validarCliente= time => {
    let edad= parseInt(prompt(`¿Cuál es tu edad?`))
    if (edad>=18){
        if (time>=2 && time< 7 && free == false) { //! ES BUENO ACLARAR EL FREE==FALSE PORQUE VA A SER LA PRIMERA Y UNICA ENTRADA GRATIS
            alert(`Podes pasar gratis, debido a que sos la primera persona en llegar luego de las 12`);
            free=true;
        }else {
            alert(`Son las ${time}hs, podes pasar, pero tenes que pagar la entrada`);
        }
    }else {
        alert(`Sos menor de edad, no podes ingresar`);
    }

}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);