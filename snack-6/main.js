let randomNumber = Math.floor(Math.random() * 10 + 1);
let usersNumber = Number(prompt('Scegli un numero'));

console.log(randomNumber);

if (randomNumber === usersNumber) {
    console.log('Congratulazioni, hai vinto!');
}
else {
    console.log('Peccato, non hai vinto, riprova!');
};