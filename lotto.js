alert("Hi")

// generate random integer number

function getRandomNum ( number ){
  
  let randomNum = Math.floor(Math.random()*number+1)
  
  return randomNum
  
  }


function generateRandomSet ( firstNumberOfTimes , firstNumbers , secondNumberOfTimes, secondNumber ){
   
  let firstNumbersSet = []
  let secondNumberSet = []
  
  
  for ( let num = 0 ; num < firstNumberOfTimes ; num ++ ) {
    
    let number = getRandomNum ( firstNumbers )
    
    while ( firstNumbersSet.includes( number )) {
      
      number = getRandomNum ( firstNumbers )
      
    }
    
    firstNumbersSet.push( number )
    
    }
  
  for ( let num2 = 0 ; num2 < secondNumberOfTimes ; num2 ++ ) { 
  
    let number2 = getRandomNum ( secondNumber )
    
    while ( secondNumberSet.includes( number2 )) {
      
      number2 = getRandomNum ( secondNumber )
      
    }
    
    secondNumberSet.push ( number2 )
    
    }
  
  
    
  return ( firstNumbersSet.join(" ") + " " + secondNumberSet.join(" ") )
  
}

function euro (){ 

  return generateRandomSet ( 5 , 50, 2 , 12 )
  
}

function lotto (){
  
  return generateRandomSet ( 6 , 59, 0 , 0 )
  
}

function setForLife (){
  
  return generateRandomSet ( 5 , 47, 1 , 10 )
  
}


