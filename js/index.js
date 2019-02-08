
const funBusHeader = document.querySelector('.fun-bus-header');

funBusHeader.addEventListener('mouseover', event => {
  funBusHeader.style.color = '#F8E5D7';
})

funBusHeader.addEventListener('mouseout', event => {
  funBusHeader.style.color = 'black';
})

const mainNav = document.querySelector('.nav');

mainNav.addEventListener('dblclick', event => {
  mainNav.style.display = 'none';
  event.preventDefault();
})

const logo = document.querySelector('.logo-heading');

logo.addEventListener('mousemove', event => {
logo.style.color = '#B2D6E5';
})


const busImg = document.querySelector('.fun-bus-img');

busImg.addEventListener('click', event => {
  busImg.src = 'img/fun.jpg';
})

const contentSection = document.querySelector('.content-section');

contentSection.addEventListener('mouseup', event => {
  event.target.style.backgroundColor = 'red';
  console.log('hi')
})


const textContent = contentSection.querySelector('.text-content');


const contentHeader = textContent.querySelector('h2');

contentHeader.addEventListener('mouseenter', event => {
  console.log('hello');
  event.stopPropagation();
})

const mainContent = textContent.querySelector('p');

mainContent.addEventListener('pointerout', event => {
  console.log(`I'm pointing out`)
})


const funBusButton = document.querySelectorAll('.btn');

for(var i= 0; i < funBusButton.length; i++){
  funBusButton[i].addEventListener('mousedown', event => {
  event.target.style.color = '#F8E0CF';
  })
}

const footer = document.querySelector('.footer');

footer.addEventListener('mouseup', event => {
  footer.style.backgroundColor = '#6FB9BC';;
})
