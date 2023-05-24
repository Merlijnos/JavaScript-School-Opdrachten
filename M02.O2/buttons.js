const buttonColors = ['#4CAF50', '#FF0000', '#800080', '#0000FF', '#000000'];
const numButtons = 30;
const container = document.getElementById('container');
let buttonStates = new Array(numButtons).fill(0);

for (let i = 0; i < numButtons; i++) {
  const button = document.createElement('button');
  button.style.backgroundColor = buttonColors[0];
  button.style.color = 'white';
  button.style.width = '200px';
  button.style.height = '80px';
  button.style.textAlign = 'center';
  button.style.textDecoration = 'none';
  button.style.display = 'inline-block';
  button.style.fontSize = '24px';
  button.style.border = 'none';
  button.style.cursor = 'pointer';
  button.style.borderRadius = '0';
  button.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.1)';
  button.style.transition = 'all 0.3s ease 0s';
  button.textContent = `${i+1}`;
  button.addEventListener('click', () => {
    buttonStates[i]++;
    if (buttonStates[i] >= buttonColors.length) {
      button.remove();
    } else {
      button.style.backgroundColor = buttonColors[buttonStates[i]];
    }
    if (buttonStates[0] === 1 && buttonStates[6] === 1 && buttonStates[12] === 1 && buttonStates[18] === 1 && buttonStates[24] === 1 && buttonStates[28] === 1) {
      for (let j = 0; j < numButtons; j++) {
        buttonStates[j] = 0;
        const button = container.children[j];
        button.style.backgroundColor = buttonColors[0];
      }
    }
  });
  container.appendChild(button);
}
