function calcularArea() {
    var raioMaior = parseFloat(document.getElementById('raioMaior').value);
    var raioMenor = parseFloat(document.getElementById('raioMenor').value);
    var anguloSetor = parseFloat(document.getElementById('anguloSetor').value);

    var anguloRadianos = (anguloSetor / 180) * Math.PI;
    var areaSetor = (anguloRadianos / (2 * Math.PI)) * Math.PI * (Math.pow(raioMaior, 2) - Math.pow(raioMenor, 2));

    document.getElementById('resultado').textContent = areaSetor.toFixed(2);
}
