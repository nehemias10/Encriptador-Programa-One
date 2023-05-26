function cifrar() {
  var message = document.getElementById('message').value;
  var shift = parseInt(document.getElementById('shift').value);
  var result = document.getElementById('result');
  var encryptedMessage = '';

  for (var i = 0; i < message.length; i++) {
    var charCode = message.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      // Caracteres mayúsculos
      encryptedMessage += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Caracteres minúsculos
      encryptedMessage += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    } else {
      // Otros caracteres no alfabéticos
      encryptedMessage += message.charAt(i);
    }
  }

  result.textContent = encryptedMessage;
}

function descifrar() {
  var message = document.getElementById('message').value;
  var shift = parseInt(document.getElementById('shift').value);
  var result = document.getElementById('result');
  var decryptedMessage = '';

  for (var i = 0; i < message.length; i++) {
    var charCode = message.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      // Caracteres mayúsculos
      decryptedMessage += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Caracteres minúsculos
      decryptedMessage += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
    } else {
      // Otros caracteres no alfabéticos
      decryptedMessage += message.charAt(i);
    }
  }

  result.textContent = decryptedMessage;
}
