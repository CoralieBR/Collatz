/**
 * Exercice 1: Longest Collatz sequence
The following iterative sequence is defined for the set of positive integers:
n → n/2 (n is even)
n → 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers
finish at 1.
Which starting number, under one million, produces the longest chain?
NOTE: Once the chain starts the terms are allowed to go above one million.
The solution should be a script that returns the answer.
Ex :  node script.js
* some special answer *
 */


// 1 : test with number from CLI
/*
const input = process.argv[2]
let i = input
const collatz = [+i]
for (let j = 0; i !== 1; j++) {
    if (i % 2 == 0) {
        i = i/2
    } else {
        i = 3*i+1
    }
    collatz.push(i)
}
console.log(collatz)
console.log('Longueur : ' + collatz.length)
*/

// 2 : test sur des nombres de 2 à 12
/*
for (let i = 2; i < 12; i++) {
    const collatz = [+i]
    let n = i
    for (let j = 0; n !== 1; j++) {
        if (n % 2 == 0) {
            n = n/2
        } else {
            n = 3*n+1
        }
        collatz.push(n)
    }
    console.log(collatz)
    console.log('Longueur : ' + collatz.length)
}
*/

// 3 : un plus grand nombre de tests, sans afficher les résultats mais en les comparant
/*
let longestOne = 0;
let startingNumber = 0;
for (let i = 2; i < 102; i++) {
    const collatz = [+i]
    let n = i
    for (let j = 0; n !== 1; j++) {
        if (n % 2 == 0) {
            n = n/2
        } else {
            n = 3*n+1
        }
        collatz.push(n)
    }
    if(collatz.length > longestOne){
        longestOne = collatz.length;
        startingNumber = collatz[0];
    }
}
console.log('La plus longue chaine commence par ' + startingNumber + ' et est longue de ' + longestOne + ' nombres.')
*/

// 4 : on envoie le million !
/*
let longestOne = 0;
let startingNumber = 0;
for (let i = 2; i < 999999; i++) {
    const collatz = [+i]
    let n = i
    for (let j = 0; n !== 1; j++) {
        if (n % 2 == 0) {
            n = n/2
        } else {
            n = 3*n+1
        }
        collatz.push(n)
    }
    if(collatz.length > longestOne){
        longestOne = collatz.length;
        startingNumber = collatz[0];
    }
}
console.log('La plus longue chaine commence par ' + startingNumber + ' et est longue de ' + longestOne + ' nombres.')
*/

// 5 
/*
function collatz(startingNumber) {
    const collatz = [startingNumber]
    let n = startingNumber
    for (let j = 0; n !== 1; j++) {
        if (n % 2 == 0) {
            n = n/2
        } else {
            n = 3*n+1
        }
        collatz.push(n)
    }
    return result = [startingNumber, collatz.length]
}

let longestOne = 0;
let startingNumber = 0;
for (let i = 2; i < 999999; i++) {
    result = collatz(i);
    if(result[1] > longestOne){
        longestOne = result[1]
        startingNumber = result[0];
    }
}

console.log('La plus longue chaine commence par ' + startingNumber + ' et est longue de ' + longestOne + ' nombres.')
*/

// Solution : en comm