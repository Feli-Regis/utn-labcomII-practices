var validarInput = document.getElementById("cantidad-pesos");
var validarSelect = document.getElementById("tipo-monedas");

var boton = document.getElementById("btn");

function calcular() {
    if (validarDatos()) {
    var valorInput = validarInput.value;
    var valorSelect = validarSelect.value;
    var total = valorInput * valorSelect;
    mostrarResultado(total.toFixed(2));
    }
}

function validarDatos() {
    if (!Number(validarInput.value > 0)) {
        var numero = document.getElementById("alert-numero");
        numero.innerText = "Por favor, debe ingresar un numero mayor a 0.";
        return false;
    }

    if (!Number(validarSelect.value)) {
        var opcion = document.getElementById("alert-opcion");
        opcion.innerText = "Por favor, debe ingresar una opcion.";
        return false;
    }
    return true;
}

function mostrarResultado(total) {
    console.log(total);
    var resultado = document.getElementById("resultado");
    resultado.innerText = "Importe total: $" + total;
}

boton.onclick = calcular;


var validarNombre = document.getElementById("nombre-moneda");
var validarCosto = document.getElementById("costo-nueva-moneda");

var botonNuevaMoneda = document.getElementById("btn-nueva-moneda");

function agregarMoneda() {
    if (validarNuevaMoneda()) {
        var valorNombre = validarNombre.value;
        var valorCosto = validarCosto.value;

        validarSelect.options.add(new Option(valorNombre, valorCosto));

        validarNombre.value = "";
        validarCosto.value = "";
    }
}

function validarNuevaMoneda() {
    if (!(validarNombre.value)) {
        var nombre = document.getElementById("alert-nombre");
        nombre.innerText = "Por favor, debe ingresar un nombre.";
        return false;
    }

    if (!Number(validarCosto.value > 0)) {
        var costo = document.getElementById("alert-costo");
        costo.innerText = "Por favor, debe ingresar una numero mayor a 0.";
        return false;
    }
    return true;
}

botonNuevaMoneda.onclick = agregarMoneda
