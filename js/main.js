let a = null
let b = null

function getValues() {
  a = parseInt(document.getElementById('a').value) || 0
  b = parseInt(document.getElementById('b').value) || 0
}

function addition() {
  getValues()
  let c = a + b
  document.getElementById('result').innerHTML = a + " + " + b + " = " + c
}

function subtract() {
  getValues()
  let c = a - b
  document.getElementById('result').innerHTML = a + " - " + b + " = " + c
}

function multiply() {
  getValues()
  let c = a * b
  document.getElementById('result').innerHTML = a + " * " + b + " = " + c
}

function divide() {
  getValues()
  let c = a / b
  document.getElementById('result').innerHTML = a + " / " + b + " = " + c
}

function degree() {
  getValues()
  document.getElementById('result').innerHTML = Math.pow(a, b)
}

function root() {
  getValues()
  document.getElementById('result').innerHTML = Math.sqrt(a)
}

function sin() {
  getValues()
  document.getElementById('result').innerHTML = Math.sin(a)
}

function cos() {
  getValues()
  document.getElementById('result').innerHTML = Math.cos(a)
}

function factorial() {
  getValues()
  let res = 1
  //while(a) res *= a--;
  while(a) {
    res = res * a
    a--
  }
  document.getElementById('result').innerHTML = res
}