const bgpic = document.getElementsByClassName("bgpic");

function changeBG(wIMG) {
  bgpic[0].style.backgroundImage = "url(" + wIMG + ")";
}
function returnBG(){
  bgpic[0].style.backgroundImage = "url('../image/7Szg.gif')";
}
