// ✅ 드롭다운 열기/닫기
document.querySelectorAll('.dropdown-toggle').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const parent = button.closest('.dropdown');
    document.querySelectorAll('.dropdown').forEach(drop => {
      if (drop !== parent) drop.classList.remove('active');
    });
    parent.classList.toggle('active');
  });
});

// ✅ 과목
document.querySelectorAll('.subject-option').forEach(option => {
  option.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('subject-label').textContent = option.dataset.value + ' ▼';
    option.closest('.dropdown').classList.remove('active');
  });
});

// ✅ 유형
document.querySelectorAll('.type-option').forEach(option => {
  option.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('type-label').textContent = option.dataset.value + ' ▼';
    option.closest('.dropdown').classList.remove('active');
  });
});

// ✅ 목차
document.querySelectorAll('.unit-option').forEach(option => {
  option.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('unit-label').textContent = option.dataset.value + ' ▼';
    option.closest('.dropdown').classList.remove('active');
  });
});

// ✅ 회차 (체크박스 → 단일/다중 처리)
const roundMenu = document.getElementById('round-menu');
const roundLabel = document.getElementById('round-label');

roundMenu.addEventListener('change', () => {
  const checked = roundMenu.querySelectorAll('input[type="checkbox"]:checked');
  if (checked.length === 0) {
    roundLabel.textContent = '회차 ▼';
  } else if (checked.length === 1) {
    roundLabel.textContent = checked[0].value + ' ▼';
  } else {
    roundLabel.textContent = '다중체크 ▼';
  }
});

// ✅ 외부 클릭 닫기
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('active'));
  }
});
