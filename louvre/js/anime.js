// menu
const btn = document.getElementById('btn');
btn.onclick = btn_event;

function btn_event() {
  btn.classList.toggle('active');
  dropdown();
}

const navMobile = document.getElementsByClassName('nav-mobile');
const navDrop = document.getElementsByClassName('nav-mobile__dropdown-design');
const navDropSec1 = document.getElementsByClassName('nav-mobile__dropdown-section-1');
const navDropSec2 = document.getElementsByClassName('nav-mobile__dropdown-section-2');
const navDropSec3 = document.getElementsByClassName('nav-mobile__dropdown-section-3');
const bgoverlay = document.getElementsByClassName('bgoverlay');

function dropdown() {
  // console.log('click');
  // navMobile.item(0).classList.toggle('active');
  navDrop.item(0).classList.toggle('active');
  // navDrop.item(0).classList.add()
  bgoverlay.item(0).classList.toggle('active');
  navDropSec1[0].classList.toggle('active');
  navDropSec2[0].classList.toggle('active');
  navDropSec3[0].classList.toggle('active');
}
