function calcularDescuento() {
    var plan = parseInt(document.getElementById('plan').value);
    var lines = parseInt(document.getElementById('lines').value);
    var descuento = 0;
    var costoPorLineaSinDescuento = plan;
    var costoPorLineaConDescuento = plan;
    var ahorroTotalAnual = 0;
    var ahorroTotalMensual = 0;
    var costoTotalSinDescuento = plan * lines;
    var costoTotalConDescuento = 0;

    if (lines >= 3 && plan >= 39990) {
        switch (plan) {
            case 39990:
            case 45990:
                descuento = 0.2;
                break;
            case 49990:
                descuento = 0.3;
                break;
            case 59990:
            case 69990:
                descuento = 0.4;
                break;
        }
        costoPorLineaConDescuento = plan * (1 - descuento);
    }

    costoTotalConDescuento = costoPorLineaConDescuento * lines;
    ahorroTotalAnual = (costoTotalSinDescuento - costoTotalConDescuento) * 12;
    ahorroTotalMensual = costoTotalSinDescuento - costoTotalConDescuento;

    document.getElementById('resultado').innerHTML = "Costo por línea sin descuento: $" + costoPorLineaSinDescuento.toLocaleString('es-ES', {minimumFractionDigits: 2}) + "<br>" +
                                                        "Costo por línea con descuento: $" + costoPorLineaConDescuento.toLocaleString('es-ES', {minimumFractionDigits: 2}) + "<br>" +
                                                        "Ahorro total anual: $" + ahorroTotalAnual.toLocaleString('es-ES', {minimumFractionDigits: 2}) + "<br>" +
                                                        "Ahorro total mensual: $" + ahorroTotalMensual.toLocaleString('es-ES', {minimumFractionDigits: 2}) + "<br>" +
                                                        "Costo total sin descuento: $" + costoTotalSinDescuento.toLocaleString('es-ES', {minimumFractionDigits: 2}) + "<br>" +
                                                        "Costo total con descuento: $" + costoTotalConDescuento.toLocaleString('es-ES', {minimumFractionDigits: 2});


}

function limpiarCampos() {
    document.getElementById('plan').selectedIndex = 0; // Restablece la selección del plan al primer plan
    document.getElementById('lines').value = '1'; // Restablece el número de líneas a 1
    document.getElementById('resultado').innerHTML = ''; // Limpia el resultado
}
