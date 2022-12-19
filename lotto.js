alert("Hi")
// create random number function

function createRandomNum( n ) {
    let random = Math.random();
    random = Math.floor( random * n ) + 1;
    return random
}

// Main function template 

function generateNums (firstNumbersCount, numberOfNumbers, secondNumbersCount){

  // list for main numbers and another for extra if needed
    let newNum = [];
    let luckyNum = [];

  // a condition in case no need for second number
  
    if (typeof(secondNumbersCount)=='undefined'){
      secondNumbersCount = 0;
    }

  // fill newNum list for main numbers with custom digits
  
    for (let i = 0 ; i < numberOfNumbers ; i ++){
        newNum.push( createRandomNum (firstNumbersCount) );
    }

  // fill luckyNum list for secondary numbers with condition
  // not to repeat same number twice
  
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

let euroMillionsMain = generateNums ( 50 , 5 , 12 ).slice ( 0 , 5 ).toLocaleString();

let euroMillionsLucky = generateNums ( 50 , 5 , 12 ).slice ( 5 , 8 ).toLocaleString();

// for lotto there arent any lucky nums

let lottoNumbers = generateNums ( 59 ).slice ( 0 , 6 ).toLocaleString();


let lotto = lottoNumbers;
let euroMillions = euroMillionsMain + ' ' + euroMillionsLucky
let setForLife = 

function runEuroMillions(){
    document.querySelector('#euro').innerHTML = euroMillions;
}

function runlotto(){
    document.querySelector('#lotto').innerHTML = lotto;
}

