
function exibirdados( ) {
  var veiculo = document.querySelector('#veiculo').value
  var total = document.querySelector('#total').value
  var pedagio = document.querySelector('#pedagio').value
  
  if(veiculo ==='' || total ===''  || pedagio ===''){
  alert("Informe os dados correto")
} else {
alert("Os dados são :" +veiculo + "\nTotal de km :"+ total + "\nPedagio é:" +pedagio)
}
}

function mascaraMoeda(event) {
  const onlyDigits = event.target.value
    .split("")
    .filter(s => /\d/.test(s))
    .join("")
    .padStart(3, "0")
  const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
  event.target.value = maskCurrency(digitsFloat)
}

function maskCurrency(valor, locale = 'pt-BR', currency = 'BRL') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(valor)
}
