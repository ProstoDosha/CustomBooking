document.getElementById('calendar').valueAsDate = new Date();
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scrollTop', `${this.scrollY}px`);
})

gsap.registerPlugin(window.ScrollTrigger, window.ScrollSmoother);

window.ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content'
});

(function() {
  const selectHeader = document.querySelectorAll('.select__header');
  const selectItems = document.querySelectorAll('.select__items');

  selectHeader.forEach((item) => {
    item.addEventListener('click', selectToggle)
  })

  selectItems.forEach((item) => {
    item.addEventListener('click', selectChoose)
  })

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    const select = this.closest('.select') 
    const currentText = select.querySelector('.select__current');

    currentText.innerText = this.innerText;
    select.classList.remove('is-active');
  }
}());

function send() {
  const towerSelection = document.querySelector(".select__current").innerHTML;
  const floorSelection = document.querySelector(".floor").innerHTML;
  const roomSelection = document.querySelector(".room").innerHTML;
  const dataSelection = document.querySelector('.calendar').value
  const timeSelection = document.querySelector('.time').value
  const commentSelection = document.querySelector('.comment').value

  console.log({
    tower: towerSelection,
    floor: floorSelection,
    room: roomSelection,
    data: dataSelection,
    time: timeSelection,
    comment: commentSelection,
  });
}

function clean() {
  document.querySelector(".select__current").innerHTML = 'Выбор башни';
  document.querySelector(".floor").innerHTML = 'Выбор этажа';
  document.querySelector(".room").innerHTML = 'Выбор переговорной';
  document.querySelector('.calendar').value = '';
  document.querySelector('.time').value = '';
  document.querySelector('.comment').value = '';
}
