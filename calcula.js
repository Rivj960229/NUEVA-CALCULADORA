function calcularDescuento() {
    const planPrecio = parseInt(document.getElementById('plan').value);
    const lineas = parseInt(document.getElementById('lineas').value);

    let descuento = 0;

    if (lineas >= 3) {
        if (planPrecio == 39990 || planPrecio == 45990) {
            descuento = 0.7;
        } else if (planPrecio == 49990) {
            descuento = 0.8;
        } else if (planPrecio == 59990 || planPrecio == 65990) {
            descuento = 0.9;
        }
    } else if (lineas >= 1) {
        if (planPrecio == 39990 || planPrecio == 45990 || planPrecio == 49990 || planPrecio == 59990 || planPrecio == 65990) {
            descuento = 0.5;
        }
    }

    const precioTotal = (planPrecio * lineas * (1 - descuento)).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    document.getElementById('resultado').innerHTML = `El precio total con descuento es: ${precioTotal}`;
}
