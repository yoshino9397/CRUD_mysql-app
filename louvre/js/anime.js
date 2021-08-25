const btn = document.getElementById('btn');
btn.onclick = btn_event;

function btn_event() {
  console.log("click");
  btn.classList.toggle('active');
}