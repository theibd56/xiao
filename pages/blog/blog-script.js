
document.addEventListener('DOMContentLoaded', () => {
const filterBtn = document.querySelector('.blog-head_mobile');
const filter = document.querySelector('.blog-filter');
const filterClose = document.querySelector('.blog-filter_head button');
const overlay = document.querySelector('.blog-filter-overlay');

function openFilter() {
  filter.classList.add('active');
  overlay.classList.add('active');
}

function closeFilter() {
  filter.classList.remove('active');
  overlay.classList.remove('active');
}

filterBtn.addEventListener('click', openFilter);
filterClose.addEventListener('click', closeFilter);
overlay.addEventListener('click', closeFilter);

filter.addEventListener('click', (e) => {
  e.stopPropagation();
});

function openFilter() {
  filter.classList.add('active');
  overlay.classList.add('active');
  document.body.classList.add('no-scroll');
}

function closeFilter() {
  filter.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
}
});