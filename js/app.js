function getPin(random) {
  const pinString = random + "";
  const pinLength = pinString.length;
  if (pinLength == 4) {
    return pinString;
  } else {
    return getPin();
  }
}

function generatePin() {
  const random = Math.round(Math.random() * 10000);
  const pinCode = getPin(random);
  return pinCode;
}
function setValueToInputField(elementId, value) {
  const inputText = document.getElementById(elementId);
  inputText.value = value;
}

document.getElementById("generate-pin").addEventListener("click", function () {
  const finalPin = generatePin();
  setValueToInputField("display-pin", finalPin);
  const pinFailed = document.getElementById("pin-fail");
  const pinSuccess = document.getElementById("pin-success");
  pinFailed.style.display = "none";
  pinSuccess.style.display = "none";
});

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById("type-numbers");
    const previousTypeNumber = typeNumberField.value;
    const calNumber = parseInt(number);
    if (isNaN(number)) {
      if (number == "C") {
        typeNumberField.value = "";
      } else if (number == "<") {
        // ---------------------------------option 1------------------------------------------------:
        //  const Delete=previousTypeNumber.substring(0,previousTypeNumber.length-1);
        //  typeNumberField.value=Delete
        // ------------------------Option 2:How to delete last element from an array-----------------
        const Split = previousTypeNumber.split("");
        Split.pop();
        const joinAll = Split.join("");
        typeNumberField.value = joinAll;
      }
    } else {
      const inputString = typeNumberField.value;
      const length = inputString.length;
      typeNumberField.value = previousTypeNumber + number;
      // if (length == 4) {
      //   document.getElementById("type-numbers").disabled = "true";
      // } else {
      //   typeNumberField.value = previousTypeNumber + number;
      // }
    }
  });

document.getElementById("verify-pin").addEventListener("click", function () {
  const displayPinField = document.getElementById("display-pin");
  const currentPin = parseInt(displayPinField.value);
  const typeNumberField = document.getElementById("type-numbers");
  typeNumber = parseInt(typeNumberField.value);
  const pinFailed = document.getElementById("pin-fail");
  const pinSuccess = document.getElementById("pin-success");
  const tryAgain = document.getElementById("try-again");
  if (currentPin == typeNumber) {
    pinSuccess.style.display = "block";
    pinFailed.style.display = "none";
    displayPinField.value = "";
    typeNumberField.value = "";
    tryAgain.innerText = 3;
  } else {
    document.getElementById("try-again").innerHTML -= 1;
    const tryAgainStringValue = tryAgain.innerHTML;

    if (tryAgainStringValue == "0") {
      document.getElementById("verify-pin").disabled = "true";
      alert("You have been missed your chance..");
      tryAgain.innerText = 3;
    }

    pinFailed.style.display = "block";
    pinSuccess.style.display = "none";
    displayPinField.value = "";
    typeNumberField.value = "";
  }
});
