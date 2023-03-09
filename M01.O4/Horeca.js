var frisprijs = 1.50;
var bierprijs = 2.00;
var wijnprijs = 2.50;

var menu = ['fris', 'bier', 'wijn'];
var frisbesteld = 0;
var bierbesteld = 0;
var wijnbesteld = 0;

while (true) {
  var input = prompt('Welkom bij SnackLine wat wilt u bestellen? Kies uit: fris, bier of wijn. Typ stop om te stoppen.');
  if (input == 'fris' ){
    var aantal = parseInt(prompt('Hoeveel fris wilt u?'));
    frisbesteld += aantal;
    alert('U heeft ' + frisbesteld + ' fris besteld');
  }
  else if (input == 'bier' ){
    var aantal = parseInt(prompt('Hoeveel bier wilt u?'));
    bierbesteld += aantal;
    alert('U heeft ' + bierbesteld + ' bier besteld');
  }
  else if (input == 'wijn' ){
    var aantal = parseInt(prompt('Hoeveel wijn wilt u?'));
    wijnbesteld += aantal;
    alert('U heeft ' + wijnbesteld + ' wijn besteld');
  }
  else if (input == 'stop' || input == 'Stop' || input == 'STOP') {
    break;
  }
  else {
    alert('Die ken ik niet, probeer het nog eens.');
  }
}

var totaalprijs = frisbesteld * frisprijs + bierbesteld * bierprijs + wijnbesteld * wijnprijs;

alert('U heeft ' + frisbesteld + ' fris besteld voor een totaalprijs van €' + (frisbesteld * frisprijs).toFixed(2) +
      '\nU heeft ' + bierbesteld + ' bier besteld voor een totaalprijs van €' + (bierbesteld * bierprijs).toFixed(2) +
      '\nU heeft ' + wijnbesteld + ' wijn besteld voor een totaalprijs van €' + (wijnbesteld * wijnprijs).toFixed(2) +
      '\n\nTotaal: €' + totaalprijs.toFixed(2));
