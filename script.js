let firstName, lastName, preferedColor;

firstName = prompt('Qual\'è il tuo nome?');
lastName = prompt('Qual\'è il tuo cognome?');
preferedColor = prompt('Qual\'è il tuo colore preferito?');
//  let outputText = ` Ciao, mi chiamo ${firstName} ${lastName} ed il mio colore preferito è ${preferedColor}!`
let outputText = `${firstName}${lastName}${preferedColor}22`
document.getElementById('output-text').innerHTML =  outputText;