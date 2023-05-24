let count = [0, 0, 0];
let buttonNumber = 0;

function handleButtonClick(btnIndex) {
  buttonNumber = btnIndex;
  count[btnIndex-1]++;
  document.getElementById(`button${btnIndex}`).innerHTML = count[btnIndex-1];
  document.getElementById(`button${btnIndex}Count`).innerHTML = count[btnIndex-1];
  document.getElementById("img").src = `Images/bg${buttonNumber}.jpg`;
  document.getElementById("corner").src = `Images/${buttonNumber}.jpg`;
}