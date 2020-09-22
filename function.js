const os = require('os');
const fs = require('fs');

const choiseGender = 'm';
const choiceAge = '31';


function randChoice(arr) {
    const arrLength = arr.length
    //console.log('arrLength: ', arrLength)
    const randomNumber = Math.floor(Math.random() * arrLength)
    //console.log('randomNumber: ', randomNumber)
    const randomElem = arr[randomNumber]
    //console.log('randomElem: ', randomElem)
    return randomElem
}


function randPESEL (choiseGender, choiceAge) {

    const PESEL = [];
    const keyPESEL= [1,3,7,9,1,3,7,9,1,3]
    const resultArray = [];
    const femaleNumber = [0, 2, 4, 6, 8];
    const maleNumber = [1, 3, 5, 7, 9];

    let month = 0;
    let randDay = 0;
    let day = 0;
    let sex = 0;
    let sumControl = 0;

    // number 1-2 (year)
    const now = new Date;
    const fullYear = (now.getFullYear() - choiceAge).toString();
    const year = fullYear.slice(2,4);

    //number 3-4 (month)
    const randMonth = Math.floor(Math.random() * 12 + 1);

    if (randMonth < 10) {
        month = '0' + randMonth.toString();
    } else { 
        month = randMonth.toString();
    }

    //number 5-6 (day)

    if (randMonth == 2) {
        if ((fullYear/4).toString().indexOf('.') == -1) {
            randDay = Math.floor(Math.random() * 28 + 1);
            // console.log('randDay:', randDay);
        }
        else {
            randDay = Math.floor(Math.random() * 29 + 1);
            // console.log('randDay:', randDay);
        }
    }
    if (randMonth == 4 || randMonth == 6 || randMonth == 9 || randMonth == 11) {
        randDay = Math.floor(Math.random() * 30 + 1);
        // console.log('randDay:', randDay);
    }
    else {
        randDay = Math.floor(Math.random() * 30 + 1);
        // console.log('randDay:', randDay);
    }


    if (randDay < 10) {
        day = '0' + randDay.toString();
    } else { 
        day = randDay.toString();
    }

    PESEL.push(year[0], year[1], month[0], month[1], day[0], day[1]);

    //number 7-9 (day)

    for (let i=0; i < 3; i++) {
       const randNumber = Math.floor(Math.random() * 9 + 1);
       PESEL.push(randNumber.toString());
    }

    //number 10 (sex)

    if (choiseGender == 'k') {
        sex = randChoice(femaleNumber);
    }
    else {
        sex = randChoice(maleNumber);
    }
    PESEL.push(sex.toString());

    //number 11 (control)
    for ( let i = 0; i < 10; i++) {
        const result = PESEL[i] * keyPESEL[i]
        console.log('result: ', result);
        if (result < 10) {
            resultArray.push(result);
        }
        else {
            const resultstring = result.toString();
            console.log('resultstring: ', resultstring);
            const resultNumber = resultstring[1];
            resultArray.push(parseInt(resultNumber));
        }
    }

    for (let i = 0; i < 10; i++) {
        sumControl += resultArray[i];
    }

    console.log(sumControl);

    const controlNumber = sumControl.toString()[1];
    console.log ('controlNumber: ', controlNumber);

    PESEL.push((10 - controlNumber).toString());

    console.log(PESEL);
    console.log(keyPESEL);
    console.log(resultArray);

    const PESELWithCommas = PESEL.join();
    const PESELNumber = PESELWithCommas.replace(/,/g, "");
    console.log(PESELNumber);
    return PESELNumber

}

randPESEL(choiseGender, choiceAge); 