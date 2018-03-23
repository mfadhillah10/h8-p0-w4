function changeVocals (str) {
  var kata = '';
  for (var i in str) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] === 'i' || str[i] == 'u' || str[i] === 'o' || str[i] == 'A' || str[i] == 'E' || str[i] === 'I' || str[i] == 'U' || str[i] === 'O') {
      kata += String.fromCharCode((str[i].charCodeAt(0)+95)-94);
    }
    else {
      kata += str[i];
    }
  }
  return kata
}

function reverseWord (str) {
  var kata = '';
  for (var i = str.length-1; i >= 0; i--) {
    kata += str[i];
  }
  return kata;
}

function setLowerUpperCase (str) {
  var kata = '';
  for (var i in str) {
    if(str[i] === str[i].toLowerCase()) {
      kata += str[i].toUpperCase();
    }
    else {
      kata += str[i].toLowerCase();
    }
  }
  return kata;
}

function removeSpaces (str) {
  if (str.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter'
  var kata = str.replace(' ','');
  return kata;
}

function passwordGenerator (name) {
  var vocals = changeVocals(name);
  var reversed = reverseWord(vocals);
  var lowerUpper = setLowerUpperCase(reversed);
  var spasi = removeSpaces(lowerUpper);
  return spasi;
}
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'