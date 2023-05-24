let count = [0, 0, 0];
let buttonNumber = 0;

function handleButtonClick(btnIndex) {
  if (buttonNumber !== btnIndex) {
    buttonNumber = btnIndex;
    count[btnIndex-1]++;
    document.getElementById(`button${btnIndex}Count`).innerHTML = count[btnIndex-1];
    document.getElementById("img").src = `Images/bg${buttonNumber}.jpg`;
    document.getElementById("corner").src = `Images/${buttonNumber}.jpg`;
  }
  document.getElementById(`btn${btnIndex}`).style.backgroundColor = "red";
  document.getElementById(`btn${btnIndex}`).disabled = true;
  for (let i = 1; i <= 3; i++) {
    if (i !== btnIndex) {
      document.getElementById(`btn${i}`).style.backgroundColor = "green";
      document.getElementById(`btn${i}`).disabled = false;
    }
  }
}