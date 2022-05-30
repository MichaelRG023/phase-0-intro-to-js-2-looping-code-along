const cards = [('Guadalupe','Ollie','Aki'),"surprise"];
cards.push = [('Guadalupe')];
function writeCards(cards) {
for (let i=0; i < cards.length; i++) {
console.log('Thank you,${cards[i]}, for the suprise gift!');
debugger
}
return cards;
}
writeCards(cards);


let countDown = (11);
while (countDown <10) {
console.log(countDown++);
}