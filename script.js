let stockCp = document.querySelector("#stocks-cp");
let stockNumber = document.querySelector("#stock-quantity");
let stockSp = document.querySelector("#stocks-sp");
let displayMessege = document.querySelector(".display-result");

let checkButton = document.querySelector("#check");

checkButton.addEventListener("click", function calculation() {
  displayMessege.style.display = "none";
  let CP = Number(stockCp.value);
  let num = Number(stockNumber.value);
  let SP = Number(stockSp.value);

  if (SP > CP) {
    let profit = SP - CP;
    profitPercentage = (profit / CP) * 100;
    profitValue = profit * num;
    displayMessege.style.display = "block";

    displayMessege.innerText = `Congratulations! Your profit is ${profitValue} and your profit percentage is ${profitPercentage}%`;
  } else if (SP < CP) {
    let loss = CP - SP;
    lossPercentage = (loss / CP) * 100;
    lossValue = loss * num;
    displayMessege.style.display = "block";

    displayMessege.innerText = `oh no ! you lost ${profitValue} and your loss percentage is ${lossPercentage}%`;
  } else if (SP < CP) {
  } else {
    displayMessege.style.display = "block";
    displayMessege.innerText = "Resulted in a neutral outcome.";
  }
});
