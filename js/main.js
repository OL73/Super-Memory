let firstTab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let secondTab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const xTab = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
let compareElts = [];
let eltsFound = [];
let indexOfFinalTab = [];

let row = document.querySelector('.row');

function randomTab(tab) {

    let randomCards = [];
    let temp;
    let random;
    let tabLength = tab.length;

    for (let i = 0; i < tabLength; i++) {

        random = Math.floor(Math.random() * tab.length);
        temp = tab.splice(random, 1);
        randomCards = randomCards.concat(temp);
    }
    return randomCards;
}

function init() {

    for (let i = 0; i < xTab.length; i++) {
        let col = document.createElement('div');
        col.setAttribute('class', 'col-3');
        //col.onclick = () => chooseCard(finalTab[i]);
        col.textContent = xTab[i];
        row.appendChild(col);
    }
}

function chooseCard(element) {
    compareElts.push(element);
}

firstTab = randomTab(firstTab);
secondTab = randomTab(secondTab).reverse();
const finalTab = firstTab.concat(secondTab);
console.log(finalTab);

init();

let divs = document.querySelectorAll('div[class=col-3]');

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', () => {
        
        divs[i].textContent = finalTab[i];
        compareElts.push(finalTab[i]);
        console.log(finalTab[i]);
        indexOfFinalTab.push(i);
        console.log('indexOfFinalTab', indexOfFinalTab);
        
        if (compareElts.length == 2) {
            let index1 = indexOfFinalTab[0];
            let index2 = indexOfFinalTab[1];
            
            if (compareElts[0] == compareElts[1]) {

                console.log('gagné');
                eltsFound = eltsFound.concat(compareElts);
                divs[index1].textContent = finalTab[index1];
                divs[index2].textContent = finalTab[index2];
                compareElts = [];
                console.log(eltsFound.length);
                indexOfFinalTab = [];

            } else if (compareElts[0] != compareElts[1]) {


                setTimeout(() => {
                    divs[index1].textContent = 'XX';
                    divs[index2].textContent = 'XX';
                }, 2000);
                
                indexOfFinalTab = [];
                compareElts = [];

            }
        }

    });
}








/*
//-------------------------------
// entree : le tableau a randommer
// sortie : le tableau randomme
//-------------------------------
function Rand_Tableau( tab_){
    var i;
    var Num;
    var Nbr = tab_.length; // 10
    var Tab = tab_; // cards
    //-- Lance la boucle
    while( Nbr> 0){
      //-- Recup nombre aleatoire
      Num = Math.floor(Math.random() * Nbr);
      console.log('Num', Num);
      //-- 1 de moins a traiter
      Nbr--;
      //-- Stock element tire
      szTmp = Tab[Num];
      console.log('szTmp', szTmp);
      //-- Decalage des valeurs du tableau
      for( i= Num; i < Nbr; i++)
        Tab[i] = Tab[i+1]
        console.log('Tab[i]', Tab[i]);
      //-- Stock l'element tire en fin
      Tab[ Nbr] = szTmp;
      console.log('Tab[ Nbr]', Tab[ Nbr]);
    }
    //-- On peut remettre dans l'ordre du tirage
    Tab.reverse();
    //-- Retourne resultat
    return( Tab);
  }

    //-- Random du tableau
    Tab = Rand_Tableau(cards);

//console.log(random);

// exemple 2 :
function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
        console.log('m', m);
        // Pick a remaining element…
        i = Math.floor(Math.random() * m);
        m--;
        console.log('i', i);


        // And swap it with the current element.
        t = array[m];
        console.log('t', t);

        array[m] = array[i];
        console.log('array[m]', array[m]);

        array[i] = t;
        console.log('array[i]', array[i]);
    }

    return array;
}

console.log(shuffle(cards)); */