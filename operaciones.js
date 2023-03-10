function limpiar() {
    document.getElementById('obtenerDatos').reset();
}

function suma() {
    console.log("iniciando suma")

    var valorA = Number(document.getElementById("valor1").value);
    var valorB = Number(document.getElementById("valor2").value);

    if (!valorA || !valorB) {
        document.getElementById("resultado").innerHTML = 'Faltan datos ->';
    }

    if (valorA && valorB) {
        console.log('procesando resultado');
        console.log('valor A ->', valorA);
        console.log('valor B ->', valorB);
        document.getElementById("resultado").innerHTML = valorA + valorB;
    }

}

function resta() {
    console.log("iniciando resta")

    let valorA = Number(document.getElementById("valor1").value);
    let valorB = Number(document.getElementById("valor2").value);

    if (!valorA || !valorB) {
        document.getElementById("resultado").innerHTML = 'Faltan datos ->';
    }

    if (valorA && valorB) {
        console.log('procesando resultado');
        console.log('valor A ->', valorA);
        console.log('valor B ->', valorB);
        document.getElementById("resultado").innerHTML = valorA - valorB;
    }
}

function multiplicar() {
    console.log("iniciando multiplicacion")

    let valorA = Number(document.getElementById("valor1").value);
    let valorB = Number(document.getElementById("valor2").value);

    if (!valorA || !valorB) {
        document.getElementById("resultado").innerHTML = 'Faltan datos ->';
    }

    if (valorA && valorB) {
        console.log('procesando resultado');
        console.log('valor A ->', valorA);
        console.log('valor B ->', valorB);
        document.getElementById("resultado").innerHTML = valorA * valorB;
    }
}

function dividir() {
    console.log("iniciando division")

    let valorA = Number(document.getElementById("valor1").value);
    let valorB = Number(document.getElementById("valor2").value);

    if (!valorA || !valorB) {
        document.getElementById("resultado").innerHTML = 'Faltan datos ->';
    }
    
    if (valorA && valorB) {
        console.log('procesando resultado');
        console.log('valor A ->', valorA);
        console.log('valor B ->', valorB);
        document.getElementById("resultado").innerHTML = valorA / valorB;
    }
}
