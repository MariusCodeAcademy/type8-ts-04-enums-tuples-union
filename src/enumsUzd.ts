// 1. sukurti baltijos saliu enuma be string reiksmiu.

enum BalStates {
  Lietuva = 10,
  Latvia,
  Estija,
}

console.log('BalStates.Latvia ===', BalStates.Latvia);

// 2. sukurti atskira baltijos saliu enuma su sostine issaugota kaip string reiksme.

enum BalStateCaps {
  Lietuva = 'Vilnius',
  Latvia = 'Riga',
  Estija = 'Talin',
}

// 2.1 parasyti funkcija kuri priima argumentu priima 2prat

function aboutCountry(capital: BalStateCaps): void {
  switch (capital) {
    case BalStateCaps.Lietuva:
      console.log('Skanus saltibarsciai');
      break;
    case BalStateCaps.Latvia:
      console.log('Saldainiu fabrikas');
      break;
    case BalStateCaps.Estija:
      console.log('Sestam rate suprato kad vaziuoja ziedu');
      break;
    default:
      console.log('kazkastai kazkurtai');
  }
}

aboutCountry(BalStateCaps.Latvia);
aboutCountry(BalStateCaps.Estija);
