let oddNumbers = [];

for (i = 1; i <= 6; i++) {
    let userImput = prompt(`Inserisci il ${i}° numero`);

    if (userImput % 2 !== 0) {

        oddNumbers.push(userImput);
    }

};
console.log(oddNumbers);


