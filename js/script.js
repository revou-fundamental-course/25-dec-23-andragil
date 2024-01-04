function hitungLuas() {
  var alas = parseFloat(document.getElementById('alas').value);
  var tinggi = parseFloat(document.getElementById('tinggi').value);

  if (isNaN(alas) || isNaN(tinggi)) {
    document.getElementById('luasResult').innerHTML = 'Masukkan nilai alas dan tinggi yang valid.';
    return;
  }

  var luas = 0.5 * alas * tinggi;
  document.getElementById('luasResult').innerHTML = 'Luas Segitiga: ' + luas.toFixed(2);
}

function clearLuasResult() {
  document.getElementById('luasResult').innerHTML = '';
  document.getElementById('alas').value = '';
  document.getElementById('tinggi').value = '';
}

function hitungKeliling() {
  var sisiA = parseFloat(document.getElementById('sisiA').value);
  var sisiB = parseFloat(document.getElementById('sisiB').value);
  var sisiC = parseFloat(document.getElementById('sisiC').value);

  if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
    document.getElementById('kelilingResult').innerHTML = 'Masukkan nilai sisi yang valid.';
    return;
  }

  var keliling = sisiA + sisiB + sisiC;
  document.getElementById('kelilingResult').innerHTML = 'Keliling Segitiga: ' + keliling.toFixed(2);
}

function clearKelilingResult() {
  document.getElementById('kelilingResult').innerHTML = '';
  document.getElementById('sisiA').value = '';
  document.getElementById('sisiB').value = '';
  document.getElementById('sisiC').value = '';
}
