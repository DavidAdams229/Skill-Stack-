const form = document.getElementById('skill-form');
const skillInput = document.getElementById('skill-input');
const levelInput = document.getElementById('level-input');
const skillList = document.getElementById('skill-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const skill = skillInput.value.trim();
  const level = levelInput.value;

  if (skill === '') return;

  const card = document.createElement('div');
  card.className = 'skill-card';
  card.innerHTML = `<span>${skill}</span> - ${level}`;
  
  skillList.appendChild(card);
  skillInput.value = '';
});