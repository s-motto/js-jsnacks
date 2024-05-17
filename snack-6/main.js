let randomNumber = Math.floor(Math.random() * 10 + 1);
let usersNumber = prompt('Scegli un numero');
let actualNumber = Number(usersNumber);
console.log(randomNumber);

if (randomNumber === actualNumber) {
    console.log('Congratulazioni, hai vinto!');
}
else {
    console.log('Peccato, non hai vinto, riprova!');
};