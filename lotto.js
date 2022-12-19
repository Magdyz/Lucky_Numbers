// create random number function

function createRandomNum( n ) {
    let random = Math.random();
    random = Math.floor( random * n ) + 1;
    return random
}

function generateNums (firstNumbersCount,secondNumbersCount){
    let newNum = [];
    let luckyNum = [];
    
    if (typeof(secondNumbersCount)=='undefined'){
      secondNumbersCount = 0;
    }

    for (let i = 0 ; i < 5 ; i ++){
        newNum.push( createRandomNum (firstNumbersCount) );
    }

    for (let i = 0 ; i < 2 ; i ++){
        firstPick = createRandomNum (secondNumbersCount);
        if (luckyNum.includes( firstPick )){
            firstPick = createRandomNum (secondNumbersCount);
            luckyNum.push( firstPick );
        } else {
            luckyNum.push( firstPick );
        }
    }

  // combine two lists
    return newNum.concat( luckyNum ) ;
}

// use function customised for each game
// for euro millions slice five numbers and last two for lucky nums

const euroMillionsMain = generateNums ( 50 , 12 ).slice ( 0 , 5 ).toLocaleString();
const euroMillionsLucky = generateNums ( 50 , 12 ).slice ( 5 , 8 ).toLocaleString();

// for lotto there arent any lucky nums

const lottoNumbers = generateNums ( 59 ).slice ( 0 , 6 ).toLocaleString();


let lotto = lottoNumbers;
let euroMillions = euroMillionsMain + ' ' + euroMillionsLucky
let setForLife = 

function runEuroMillions(){
    document.querySelector('.numbers').innerHTML = euroMillions;
}

function runlotto(){
    document.querySelector('.numbers').innerHTML = lotto;
}



