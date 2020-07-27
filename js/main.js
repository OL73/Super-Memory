let firstTab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let secondTab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const xTab = ['question-icon2', 'question-icon', 'question-icon2', 'question-icon', 'question-icon2', 'question-icon', 'question-icon2', 'question-icon', 'question-icon2', 'question-icon', 'question-icon2', 'question-icon', 'question-icon2', 'question-icon', 'question-icon2', 'question-icon', 'question-icon2', 'question-icon', 'question-icon2', 'question-icon'];
let compareElts = [];
let eltsFound = [];
let indexOfFinalTab = [];
let compteur = 0;

let elements = document.querySelector('.elements');
let inputScore = document.querySelector('input');



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
        let element = document.createElement('div');
        element.setAttribute('class', 'element');
        let img = document.createElement('img');
        img.setAttribute('src', `./assets/img/${xTab[i]}.png`);
        element.appendChild(img);
        //col.textContent = xTab[i];
        elements.appendChild(element);
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

let divs = document.querySelectorAll('div[class=element]');
let imgs = document.querySelectorAll('div[class=element] img');

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', () => {

        imgs[i].setAttribute('src', `./assets/img/${finalTab[i]}.png`);
        compareElts.push(finalTab[i]);
        console.log(finalTab[i]);
        indexOfFinalTab.push(i);
        console.log('indexOfFinalTab', indexOfFinalTab);
        compteur++;
        inputScore.value = compteur;

        if (compareElts.length == 2) {
            let index1 = indexOfFinalTab[0];
            let index2 = indexOfFinalTab[1];

            if (index1 === index2) {
                console.log('même index !!!');
                compareElts.pop();
                indexOfFinalTab.pop();
                divs[index1].classList.add('warning');
                setTimeout(() => {
                    divs[index1].classList.remove('warning');
                }, 1000);
            }

            if (compareElts[0] == compareElts[1]) {

                console.log('gagné');
                eltsFound = eltsFound.concat(compareElts);
                imgs[index1].classList.add('win');
                imgs[index2].classList.add('win');
                compareElts = [];
                console.log('Nb éléments trouvés : ', eltsFound.length);
                indexOfFinalTab = [];

            } else if (compareElts[0] != compareElts[1]) {


                setTimeout(() => {
                    imgs[index1].classList.add('nope');
                    imgs[index2].classList.add('nope');
                    setTimeout(() => {
                        imgs[index1].setAttribute('src', `./assets/img/${xTab[index1]}.png`);
                        imgs[index2].setAttribute('src', `./assets/img/${xTab[index2]}.png`);
                        imgs[index1].classList.remove('nope');
                        imgs[index2].classList.remove('nope');
                    }, 1000)
                }, 500);


                indexOfFinalTab = [];
                compareElts = [];

            }
        }

        if (eltsFound.length == 20) {
            console.log('partie terminée !!!');
            let cards = document.getElementById('cards');
            let divGameOver = document.createElement('div');
            let imgGameOver = document.createElement('img');
            divGameOver.setAttribute('id', 'game-over');
            imgGameOver.setAttribute('src', './assets/img/Game_Over.jpg');
            cards.appendChild(divGameOver);
            divGameOver.appendChild(imgGameOver);
            console.log('compteur', compteur);
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