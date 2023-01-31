function celsiusToFahrenheit() {
  let celsius = document.getElementById("cDegrees").value;
  let resultTitle = document.getElementById("cResult");
  resultTitle.innerText = convertCelsiusToFahrenheit(celsius).toFixed(2) + "°F";
  let fMensagem = document.getElementById("fMensagem");
  fMensagem.innerText = fMensagens(celsius);
}

function convertCelsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32
}

function fMensagens(celsius) {
  return (
    `${celsius}°C em Fahrenheit é:`
  )
}

function fahrenheitToCelsius() {
  let fahrenheit = document.getElementById("fDegrees").value;
  let resultTitle = document.getElementById("fResult");
  resultTitle.innerText = convertFahrenheitToCelsius(fahrenheit).toFixed(2) + "°C";
  let cMensagem = document.getElementById("cMensagem");
  cMensagem.innerText = cMensagens(fahrenheit);
}

function convertFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9
}

function cMensagens(fahrenheit) {
  return (
    `${fahrenheit}°F em Celsius é:`
  )
}