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
})

const logo = document.querySelector('.logo-heading');

logo.addEventListener('mousemove', event => {
logo.style.color = '#B2D6E5';
})


const busImg = document.querySelector('.fun-bus-img');

busImg.addEventListener('click', event => {
  busImg.src = 'img/fun.jpg';
})

const funBusButton = document.querySelectorAll('.btn');

for(var i= 0; i < funBusButton.length; i++){
  funBusButton[i].addEventListener('mousedown', event => {
  event.target.style.color = '#F8E0CF';
  })
}

const footer = document.querySelector('.footer');

footer.addEventListener('mouseup', event => {
  footer.style.backgroundColor = '#6FB9BC'
})
