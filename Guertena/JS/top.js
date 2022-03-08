// 曜日指定して開店表示
let text1;
switch (new Date().getDay()) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    text1 = "Closed Today";
    break;
  default:
    text1 = "Opening";
}

document.getElementById("text-button").onclick = function() {
  document.getElementById("date").innerHTML = text1;
};

