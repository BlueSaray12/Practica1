function Contabilidad() {
    let nombreEmpleado = document.getElementById("NombreEmpleado").value;    
    let cargoEmpleado = document.getElementById("CargoEmpleado").value;
    let horas = document.getElementById("Horas").value;
    var sueldoBase;
    switch (cargoEmpleado) {
        case "Administrativo":
            sueldoBase = 700, 00;
            break;
        case "Supervisor":
            sueldoBase = 650, 00;
            break;
        case "Operario":
            sueldoBase = 440, 00;
            break;
        case "Control de calidad":
            sueldoBase = 490, 00;
            break;
    }
    let sueldoFinal = sueldoBase + (horas * 10);
    document.getElementById("Información")
        .innerHTML = " Nombre: " + nombreEmpleado + " Cargo: " + cargoEmpleado + " Sueldo: " + sueldoFinal;
}

function Cotizacion() {
    let CI = document.getElementById("CI").value;
    let Nombre = document.getElementById("Nombre").value;
    let Apellido = document.getElementById("Apellido").value;
    let Direccion = document.getElementById("Direccion").value;
    let Carro = document.getElementById("Vehiculo").value;
    let Precio = document.getElementById("Precio").value;
    switch (Carro) {
        case "FORD_FIESTA":
            Precio * 0.05;
            break;
        case "FORD_FOCUS":
            Precio * 0.10;
            break;
    }
document.getElementById("Información")
.innerHTML = " Cedula: " + CI + " Nombre: " + Nombre + " Apellido: " + Apellido + " Direccion: " + Direccion + " Vehiculo: " + Carro; 
}
