  const btn = document.getElementById('toggle-button');
  const sidebar = document.querySelector('.sidebar');
  const main = document.querySelector('.main-content');

  btn.addEventListener('click', () => {
    sidebar.classList.toggle('closed');
    main.classList.toggle('expanded');
  });