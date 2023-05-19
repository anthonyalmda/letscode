const signButton = document.getElementById('sign');

signButton.addEventListener('click', function() {
  const display = document.getElementsByName('display')[0];
  const currentValue = parseFloat(display.value);
  
  if (currentValue >= 0) {
    display.value = "-" + currentValue;
  } else {
    display.value = Math.abs(currentValue);
  }
});



