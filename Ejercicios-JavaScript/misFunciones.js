/**
 * Conversion de unidades de metros, yardas, pies y pulgadas
 * @method cambiounidades
 * @param {string} id - El id de los inputs de metros, yardas, pies y pulgadas
 * @param {number} valor - El valor de los unputs de metros, yardas, pies y pulgadas
 * @return
 */
function cambiounidades(id , valor) {
    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido");
        document.LasUnidades.unid_metro.value = "";
        document.LasUnidades.unid_pulgada.value = "";
        document.LasUnidades.unid_pie.value = "";
        document.LasUnidades.unid_yarda.value = "";
    } else if (id=="metro")
    {
        document.LasUnidades.unid_pulgada.value = 39.3701 * valor;
        document.LasUnidades.unid_pie.value = 3.28084 * valor;
        document.LasUnidades.unid_yarda.value = 1.09361 * valor;

    }
    else if (id=="pulgada")
    {
        document.LasUnidades.unid_metro.value = 0.0254 * valor;
        document.LasUnidades.unid_pie.value = 0.83333 * valor;
        document.LasUnidades.unid_yarda.value = 0.0277778 * valor;

    }
    else if (id=="pie")
    {
        document.LasUnidades.unid_metro.value = 3.28084*valor;
        document.LasUnidades.unid_pulgada.value = 39.3701*valor;
        document.LasUnidades.unid_yarda.value = 0.33333*valor;

    }

    else if(id=="yarda"){
        document.LasUnidades.unid_metro.value = 3.28084*valor;
        document.LasUnidades.unid_pulgada.value = 39.3701*valor;
        document.LasUnidades.unid_pie.value = 0.33333*valor;

    }

}