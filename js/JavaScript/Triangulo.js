function calcularArea() {
    // Os valores inseridos pelo usuário para a base e altura do triângulo
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);

    // Calcule a área do triângulo usando a fórmula A = (Base * Altura) / 2
    var area = (base * altura) / 2;

    // Mostra o resultado na página
    document.getElementById('resultado').textContent = area.toFixed(2);
}