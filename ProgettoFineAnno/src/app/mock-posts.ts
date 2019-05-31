import { Post } from './post';

export const Posts: Post[] = [
  { nome:'Maglietta', tipo:'abbigliamento', prezzo:70, descrizione:'Pantalone Blue', nomeUtente:'Giacomo', cognomeUtente:'Maestro', username:'Maestro.Giacomo', data:'17:43, il 26/11/2018',
    commenti:[
      { testo:'E\'originale?', cognomeUtente: 'Cladino', nomeUtente:'Maria', username:'Clodi', data: '11:43, il 27/11/2018'
      },
      { testo:'Si', cognomeUtente: 'Maestro', nomeUtente:'Giacomo', username:'Maestro.Giacomo', data: '20:03, il 27/11/2018'
      }]
  },
  { nome:'Bicicletta MTB B-twin', tipo:'veicolo', prezzo:50, descrizione:'Bicicletta Rubata', nomeUtente:'Ahmed', cognomeUtente:'Shamdallad', username:'ladro_di_bici', data:'19:00, il 14/05/2019',
    commenti:[
      { testo:'A chi l\'hai rubata infame?', cognomeUtente: 'Fulga', nomeUtente:'Cristian', username:'CristianFulga99', data: '19:20, il 14/05/2019'
      }]
  },
  { nome:'Tappeto di Alladin', tipo:'veicolo', prezzo:1999, descrizione:'Tappeto di Alladin in plastica', nomeUtente:'Alladin', cognomeUtente:'Il Genio', username:'Alladin_sul_tappeto', data:'16:35, il 25/12/2018',
    commenti:[
      { testo:'Che bel pezzo esclusivo', cognomeUtente: 'Malizia', nomeUtente:'Fabio', username:'malizia-g', data: '23:07, il 25/12/2018'
      },
      { testo:'Ma è falso compà', cognomeUtente: 'Gottardo', nomeUtente:'Joshua', username:'joshuagottardogalvani', data: '06:15, il 26/12/2018'
      }]
  }
];
