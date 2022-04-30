// lista studenti

const corso1 = {
  nome: "programmatore front-end",
  ore: 300,
  terminato: false,
};

const corso2 = {
  nome: "programmatore back-end",
  ore: 300,
  terminato: true,
};

const corso3 = {
  nome: "programmatore back-end",
  ore: 300,
  terminato: false,
};

const studente1 = {
  nome: "Polina",
  cognome: "Boretc",
  genere: "femmina",
  eta: 27,
  citta: "Chelyabinsk",
  sposato: false,
  corso: corso1,
};

const studente2 = {
  nome: "Christopher",
  cognome: "Limone",
  genere: "maschio",
  eta: 27,
  citta: "Genova",
  sposato: false,
  corso: corso2,
};

const studente3 = {
  nome: "Cinzia",
  cognome: "Ariotti",
  genere: "femmina",
  eta: 26,
  citta: "Genova",
  sposato: false,
  corso: corso3,
};

const studente4 = {
  nome: "Giovanni",
  cognome: "Cambiaso",
  genere: "maschio",
  eta: 26,
  citta: "Genova",
  sposato: false,
  corso: corso3,
};

const studente5 = {
  nome: "Mattia",
  cognome: "Dalla Mutta",
  genere: "maschio",
  eta: 26,
  citta: "Genova",
  sposato: false,
  corso: corso3,
};

const studente6 = {
  nome: "Mirco",
  cognome: "Faro",
  genere: "maschio",
  eta: 26,
  citta: "Genova",
  sposato: false,
  corso: corso2,
};

const studente7 = {
  nome: "Paolo",
  cognome: "Foppiano",
  genere: "maschio",
  eta: 25,
  citta: "Genova",
  sposato: false,
  corso: corso3,
};

const studente9 = {
  nome: "Leslie",
  cognome: "Fritas Olaechea Stefanny",
  genere: "femmina",
  eta: 26,
  citta: "Lima",
  sposato: false,
  corso: corso3,
};

const studente10 = {
  nome: "Artem",
  cognome: "San Giorgio",
  genere: "maschio",
  eta: 26,
  citta: "San Pietroburgo",
  sposato: false,
  corso: corso2,
};

const studente11 = {
  nome: "Jessica",
  cognome: "Vitanzaq",
  genere: "femmina",
  eta: 26,
  citta: "Lima",
  sposato: false,
  corso: corso1,
};

const studenti = [
  studente2,
  studente3,
  studente4,
  studente5,
  studente6,
  studente7,
  studente9,
  studente10,
  studente11,
];

function writeStudentsDocument(studenti) {
  const studentContainer = document.getElementById("student-container");

  for (let i = 0; i < studenti.length; i++) {
    const studente = studenti[i];

    const p = document.createElement("p");

    const nome = document.createTextNode(studente.nome);

    const br = document.createElement("br");

    p.appendChild(nome);

    const cognome = document.createTextNode(' ' + studente.cognome + ';');

    p.appendChild(cognome); 
    
    p.appendChild(br);

    const genere = document.createTextNode('genere: ' + studente.genere + ';'); 

    const br2 = document.createElement("br");

    p.appendChild(genere); 

    p.appendChild(br2);

    const eta = document.createTextNode('età: ' + studente.eta + ';'); 

    const br3 = document.createElement("br");

    p.appendChild(eta); 

    p.appendChild(br3); 

    const città = document.createTextNode('città: ' + studente.citta + ';'); 

    const br4 = document.createElement("br");

    p.appendChild(città); 

    p.appendChild(br4);

    const sposato = document.createTextNode('sposato: ' + studente.sposato + ';'); 

    const br5 = document.createElement("br");

    p.appendChild(sposato); 

    p.appendChild(br5); 

    const corso = document.createTextNode('corso: ' + JSON.stringify(studente.corso.nome) + ';'); 

    const br6 = document.createElement("br");

    p.appendChild(corso); 

    p.appendChild(br6);

    studentContainer.appendChild(p); 

  }
}

writeStudentsDocument(studenti);

// solo ragazze; 

const femaleArray = studenti.filter(function(studente){ 
  return studente.genere === 'femmina';
}); 

console.log(femaleArray); 

function writeFemaleDocument(femaleArray) {
  const femaleContainer = document.getElementById("female-container");

  for (let i = 0; i < femaleArray.length; i++) {
    const studente = femaleArray[i];

    const p = document.createElement("p");

    const nome = document.createTextNode(studente.nome);

    const br = document.createElement("br");

    p.appendChild(nome);

    const cognome = document.createTextNode(' ' + studente.cognome + ';');

    p.appendChild(cognome); 
    
    p.appendChild(br);

    const genere = document.createTextNode('genere: ' + studente.genere + ';'); 

    const br2 = document.createElement("br");

    p.appendChild(genere); 

    p.appendChild(br2);

    const eta = document.createTextNode('età: ' + studente.eta + ';'); 

    const br3 = document.createElement("br");

    p.appendChild(eta); 

    p.appendChild(br3); 

    const città = document.createTextNode('città: ' + studente.citta + ';'); 

    const br4 = document.createElement("br");

    p.appendChild(città); 

    p.appendChild(br4);

    const sposato = document.createTextNode('sposato: ' + studente.sposato + ';'); 

    const br5 = document.createElement("br");

    p.appendChild(sposato); 

    p.appendChild(br5); 

    const corso = document.createTextNode('corso: ' + JSON.stringify(studente.corso.nome) + ';'); 

    const br6 = document.createElement("br");

    p.appendChild(corso); 

    p.appendChild(br6);

    femaleContainer.appendChild(p); 

  }
}

writeFemaleDocument(femaleArray);

// solo ragazzi

// sorting di qualche genere