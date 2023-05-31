const buttonColors = ['#4CAF50', '#FF0000', '#800080', '#0000FF', '#000000'];
const numButtons = 30;
const container = document.getElementById('container');
let buttonStates = new Array(numButtons).fill(0);

for (let i = 0; i < numButtons; i++) {
  const button = document.createElement('button');
  button.style.backgroundColor = buttonColors[0];
  button.style.width = '180px';
  button.style.height = '120px';
  button.style.textAlign = 'center';
  button.style.fontSize = '80px';
  button.textContent = `${i+1}`;
  button.addEventListener('click', () => {
    buttonStates[i]++;
    if (buttonStates[i] >= buttonColors.length) {
      button.remove();
    } else {
      button.style.backgroundColor = buttonColors[buttonStates[i]];
    }
  });
  container.appendChild(button);
}
