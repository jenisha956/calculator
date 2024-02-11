document.addEventListener("DOMContentLoaded", function () {

  var inputBox = document.getElementById("inputBox");
  var buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      handleButtonClick(this.innerText);
    });
  });

  function handleButtonClick(value) {
    switch (value) {
      case "AC":
        inputBox.value = "0";
        break;
      case "DEL":
        inputBox.value = inputBox.value.length - 1;
        break;
      case "=":
        
          inputBox.value = calculateResult(inputBox.value);
        
        break;
      
        default:
          if (inputBox.value == "0" || inputBox.value == "Error") {
              inputBox.value = value;
          } else {
              inputBox.value = inputBox.value + value;
          }
          
          break;
    }
  }

  function calculateResult(expression) {
    
       return new Function('return' + expression)();
    
  }
});
