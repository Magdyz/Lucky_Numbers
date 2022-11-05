// create random number function

function createRandomNum( n ) {
    let random = Math.random();
    random = Math.floor( random * n ) + 1;
    return random
}

function generateNums (){
    let newNum = [];
    let luckyNum = [];

    for (let i = 0 ; i < 5 ; i ++){
        let fistPickMain = createRandomNum ( 50 );
        if (newNum.includes( fistPickMain )){
            fistPickMain = createRandomNum ( 50 );
            newNum.push( fistPickMain );
        } else {
            newNum.push( fistPickMain );
        }
    }

    for (let i = 0 ; i < 2 ; i ++){
        let firstPick = createRandomNum (12);
        if (luckyNum.includes( firstPick )){
            firstPick = createRandomNum (12);
            luckyNum.push( firstPick );
        } else {
            luckyNum.push( firstPick );
        }
    }

    let result = newNum.concat(luckyNum);

    document.querySelector('.numbers').innerHTML = result.join(' ');
}

