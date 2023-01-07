
// generate random integer number

function getRandomNum(number) {

  let randomNum = Math.floor(Math.random() * number + 1)

  return randomNum

}


function generateRandomSet(firstNumberOfTimes, firstNumbers, secondNumberOfTimes, secondNumber) {

  let firstNumbersSet = []
  let secondNumberSet = []


  for (let num = 0; num < firstNumberOfTimes; num++) {

    let number = getRandomNum(firstNumbers)

    while (firstNumbersSet.includes(number)) {

      number = getRandomNum(firstNumbers)

    }

    firstNumbersSet.push(number)

  }

  for (let num2 = 0; num2 < secondNumberOfTimes; num2++) {

    let number2 = getRandomNum(secondNumber)

    while (secondNumberSet.includes(number2)) {

      number2 = getRandomNum(secondNumber)

    }

    secondNumberSet.push(number2)

  }

  //  return result.length
  //  return ( firstNumbersSet.join(" ") + " " + secondNumberSet.join(" ") )
  return (firstNumbersSet + "," + secondNumberSet).split(",")

}

function euro() {
  list = generateRandomSet(5, 50, 2, 12)
  let index = 0;
  return {
    next: () => {
      if (index < list.length) {
        return { value: list[index++], done: false };
      } else {
        return { done: true };
      }
    }
  }
}

function lotto() {

  list = generateRandomSet(6, 59, 0, 0)
  let index = 0;
  return {
    next: () => {
      if (index < list.length) {
        return { value: list[index++], done: false };
      } else {
        return { done: true };
      }
    }
  }
}

function setForLife() {

  list = generateRandomSet(5, 47, 1, 10)
  let index = 0;
  return {
    next: () => {
      if (index < list.length) {
        return { value: list[index++], done: false };
      } else {
        return { done: true };
      }
    }
  }
}

$(document).ready(function () {

  $("#euro").click(() => {

    let euroNums = euro()

    $("#num1").html(euroNums.next().value).css({ "background-color": "#f5f5dc", "color": "#5fad41" });
    $("#num2").html(euroNums.next().value).css({ "background-color": "#f5f5dc", "color": "#5fad41" });
    $("#num3").html(euroNums.next().value).css({ "background-color": "#f5f5dc", "color": "#5fad41" });
    $("#num4").html(euroNums.next().value).css({ "background-color": "#f5f5dc", "color": "#5fad41" });
    $("#num5").html(euroNums.next().value).css({ "background-color": "#f5f5dc", "color": "#5fad41" });
    $("#num6").html(euroNums.next().value).css({ "background-color": "#5fad41", "color": "#f5f5dc" });
    $("#num7").html(euroNums.next().value).css({ "display": "", "background-color": "#5fad41", "color": "#f5f5dc" });

  }
  )

  $("#lotto").click(() => {

    let lottoNums = lotto()

    $("#num1").html(lottoNums.next().value).css({ "background-color": "#f5f5dc", "color": "#5fad41" });
    $("#num2").html(lottoNums.next().value).css({ "background-color": "#f5f5dc", "color": "#5fad41" });
    $("#num3").html(lottoNums.next().value).css({ "background-color": "#f5f5dc", "color": "#5fad41" });
    $("#num4").html(lottoNums.next().value).css({ "background-color": "#f5f5dc", "color": "#5fad41" });
    $("#num5").html(lottoNums.next().value).css({ "background-color": "#f5f5dc", "color": "#5fad41" });
    $("#num6").html(lottoNums.next().value).css({ "background-color": "#f5f5dc", "color": "#5fad41" });
    $("#num7").html("").css("display", "none");

  }
  )
  $("#set").click(() => {

    let setNums = euro()

    $("#num1").html(setNums.next().value).css({ "background-color": "#f5f5dc", "color": "#5fad41" });
    $("#num2").html(setNums.next().value).css({ "background-color": "#f5f5dc", "color": "#5fad41" });
    $("#num3").html(setNums.next().value).css({ "background-color": "#f5f5dc", "color": "#5fad41" });
    $("#num4").html(setNums.next().value).css({ "background-color": "#f5f5dc", "color": "#5fad41" });
    $("#num5").html(setNums.next().value).css({ "background-color": "#f5f5dc", "color": "#5fad41" });
    $("#num6").html(setNums.next().value).css({ "background-color": "#5fad41", "color": "#f5f5dc" });
    $("#num7").html("").css("display", "none");
  }
  )
})
