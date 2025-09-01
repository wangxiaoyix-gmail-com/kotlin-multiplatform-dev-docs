// Simple theme toggle
const header = document.querySelector('header');
const toggle = document.createElement('button');
toggle.textContent = 'Toggle Theme';
header.appendChild(toggle);

let dark = false;
toggle.addEventListener('click', () => {
  dark = !dark;
  document.body.style.background = dark ? '#333' : '#fdfdfd';
  document.body.style.color = dark ? '#fdfdfd' : '#333';
});
