// On peut déclarer une variable via le mot clé "var" ou "let".
// A savoir: "var" est l'ancienne façon de travailler. Donc risque un jour de disparaitre...

let prenom = 'Michel'; //string -> string
let age = 23; //integer -> number
let celibataire = true; //boolean -> boolean
let taille = 1.8; //float -> number
let neant = null;
console.log(typeof(prenom));

let consoles = [];

consoles = ['Xbox', 'PS4']; // array -> object
let consolesdict = {0: 'Xbox',
                    1: 'PS4'};
let dict = {};
dict = {'Claude': 32}; // dict -> object
//Type des variables
//alert('Prénom: ' + typeof(prenom));
//alert('Age: ' + typeof(age));
//alert('Célibataire: ' + typeof(celibataire));
//alert('Taille: ' + typeof(taille));
//alert('Console: ' + typeof(consoles));
//alert('Dict: ' + typeof(dict));

//Incrémenter l'âge de plusieurs façon
//age = age + 1;
//age += 1;
//age = ++age; //suffixe
//let test = age++; //préfixe
//console.log(age);

//Concaténation de string
let nom = 'Dupont';
//console.log(prenom + ' ' + nom);

//Concaténation d'une string avec un integer
//console.log('1 '+2);
//console.log(parseInt('1') + 2);

//Ajouter/Supprimer des éléments d'un array
consoles = ['Xbox', 'PS4']; // array -> object
//consoles.push('Switch'); //Rajoute un élément à la fin de la liste
//consoles.splice(1, 0, 'Switch'); //Rajoute un élément en position 1
//consoles.splice(0, 2); // Supprime 2 éléments à partir de la position 0
//consoles.splice(consoles.indexOf('PS4'), 1); // Supprime l'élément PS4
consoles = consoles.concat(['GameBoy', 'NES']); // Ajoute un array dans un array
console.log(consoles.join(','));

//Ajouter/Supprimer des éléments d'un dictionnaire
dict = {'Claude': 32}; // dict -> object
dict.Jean = 6;
//dict['Pierre'] = 4; // à éviter
delete dict.Claude;
console.log(dict);
