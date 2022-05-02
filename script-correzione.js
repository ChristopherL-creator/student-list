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

function showStudents() {
  const studContainer = document.getElementById("studenti-container"); 

  studContainer.innerHTML = ' '; 

//  ordina studenti in elenco non ordinato;
  for (const studente of studenti) {
    const li = document.createElement("li"); 
//  imposto elemento lista "li" per ciascuna voce;
    const br = document.createElement("br"); 
//  lo stesso per br; li metto all'inizio perché valgono per tutte le voci;

    const nameDiv = document.createElement("div"); 
//  creo div contenitore voce;
    const nameNode = document.createTextNode(studente.nome + " " + studente.cognome);
//  creo testo da inserire in div;
    nameDiv.appendChild(nameNode);
//  inserisco testo "nameNode" in div "nameDiv"; ripeto per ogni voce,

    const ageDiv = document.createElement("div");
    const ageNode = document.createTextNode("età: " + studente.eta);
    ageDiv.appendChild(ageNode);

    const corsoDiv = document.createElement("div");
    const corsoNode = document.createTextNode("corso: " + studente.corso.nome);
    corsoDiv.appendChild(corsoNode);

    li.appendChild(nameDiv);
    li.appendChild(ageDiv);
    li.appendChild(corsoDiv);
    li.appendChild(br);
//  assegno ogni div contenitore, e br, a elemento lista li;

    studContainer.appendChild(li);
//  assegno elemento lista li a contenitore; 

  }
}
