let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let row = document.querySelector('.row');
let randomCards = [];
let temp;
let random;

//console.log(random);

for (let i = 0; i < cards.length; i++) {
    console.log('cards length', cards.length);
    
    random = Math.floor(Math.random() * cards.length);
    console.log('random', random);

    for (let card of randomCards) {


        if (random == card) {
            random = Math.floor(Math.random() * cards.length);
        } else {
            randomCards.push(random);
        }

    }

    console.log(randomCards);


    /* cards.find(elt => {

        if (elt === random) {
            console.log(elt);
            temp = cards.splice(cards.indexOf(random), 1);
            randomCards = randomCards.concat(temp);
            console.log(randomCards);
        }
        randomCards = randomCards.concat(cards);
    }) */


}










function init() {

    for (let i = 0; i < randomCards.length; i++) {
        let col = document.createElement('div');
        col.setAttribute('class', 'col-3');
        col.onclick = () => showCard(i);
        col.textContent = randomCards[i];
        row.appendChild(col);
    }
}

init();

function showCard(index) {
    console.log(index);
}