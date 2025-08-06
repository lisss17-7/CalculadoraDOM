let inputActivo = "numero1"; // Por defecto primer input

function seleccionarInput(id) {
  inputActivo = id;
}

function agregarNumero(num) {
  const input = document.getElementById(inputActivo);
  input.value += num;
}

function obtenerValores() {
  const num1 = parseFloat(document.getElementById('numero1').value);
  const num2 = parseFloat(document.getElementById('numero2').value);
  return { num1, num2 };
}

function sumar() {
  const { num1, num2 } = obtenerValores();
  document.getElementById('resultado').textContent = "Resultado: " + (num1 + num2);
}

function restar() {
  const { num1, num2 } = obtenerValores();
  document.getElementById('resultado').textContent = "Resultado: " + (num1 - num2);
}

function multiplicar() {
  const { num1, num2 } = obtenerValores();
  document.getElementById('resultado').textContent = "Resultado: " + (num1 * num2);
}

function dividir() {
  const { num1, num2 } = obtenerValores();
  if (num2 === 0) {
    document.getElementById('resultado').textContent = "Error: División por 0";
  } else {
    document.getElementById('resultado').textContent = "Resultado: " + (num1 / num2);
  }
}

function limpiar() {
  document.getElementById('numero1').value = "";
  document.getElementById('numero2').value = "";
  document.getElementById('resultado').textContent = "Resultado: 0";
}