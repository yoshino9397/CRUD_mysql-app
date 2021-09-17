const exSlides = document.getElementsByClassName("carousel-exhibitions__slide");
window.addEventListener("load", function () {
  // setSwipe('.swipe-wrapper');
  setSwipe(".swipe-container");
  exSlides[1].style.opacity = "0.3";
  exSlides[2].style.opacity = "0.3";
});

let client_w = document
  .getElementsByClassName("carousel-exhibitions__slide")
  .item(0).clientWidth;
let criterion = document
  .getElementsByClassName("exhibitions__headline")
  .item(0)
  .getBoundingClientRect();
window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("resize", function () {
    client_w = document
      .getElementsByClassName("carousel-exhibitions__slide")
      .item(0).clientWidth;
    // console.log('client_w:' + client_w);
  });
});

// search
const search = document.getElementById("search");
search.onclick = search_event;
const sClose = document.getElementById("search-close");
sClose.onclick = search_event;

function search_event() {
  // console.log('search');
  searchView();
}

const searchOverlay = document.getElementsByClassName("search-overlay");
const searchDesign1 = document.getElementsByClassName("search-design1");
const searchDesign2 = document.getElementsByClassName("search-design2");
const searchClose = document.getElementsByClassName("search-overlay__close");
const searchOverlayWrap = document.getElementsByClassName(
  "search-overlay__content-wrap"
);

function searchView() {
  searchOverlay[0].classList.toggle("active");
  searchDesign1[0].classList.toggle("active");
  searchDesign2[0].classList.toggle("active");
  searchClose[0].classList.toggle("active");
  searchOverlayWrap[0].classList.toggle("active");
}

// menu
const btn = document.getElementById("btn");
btn.onclick = btn_event;
const bgClick = document.getElementById("bgoverlay");
bgClick.onclick = btn_event;

function btn_event() {
  btn.classList.toggle("active");
  dropdown();
}

const navMobile = document.getElementsByClassName("nav-mobile");
const navDrop = document.getElementsByClassName("nav-mobile__dropdown-design");
const navDropSec1 = document.getElementsByClassName(
  "nav-mobile__dropdown-section-1"
);
const navDropSec2 = document.getElementsByClassName(
  "nav-mobile__dropdown-section-2"
);
const navDropSec3 = document.getElementsByClassName(
  "nav-mobile__dropdown-section-3"
);
const bgoverlay = document.getElementsByClassName("bgoverlay");

function dropdown() {
  // console.log('click');
  navMobile.item(0).classList.toggle("active");
  navDrop[0].classList.toggle("active");
  bgoverlay[0].classList.toggle("active");
  navDropSec1[0].classList.toggle("active");
  navDropSec2[0].classList.toggle("active");
  navDropSec3[0].classList.toggle("active");
}

// fun
const heroHeadline = document.getElementsByClassName("hero__headline");
const heroEffect = document.getElementsByClassName("hero__infobox__effect");
const heroWrap = document.getElementsByClassName("hero__wrap");

// chapter heading
const exHeadline = document.getElementsByClassName("exhibitions__headline");

// shadow
const spotLazyload = document.getElementsByClassName("spot-lazyload");
const spotShadow = document.getElementsByClassName("spot-shadow");
const spot_p = spotLazyload[0].getBoundingClientRect();
let flag = 0;

window.onscroll = () => {
  let scroll_val = window.pageYOffset;
  let exHeadline_p = exHeadline[0].getBoundingClientRect();
  // console.log(scroll_val);
  if (scroll_val <= 200) {
    heroHeadline[0].style.opacity = 1 - scroll_val / 200;
    heroHeadline[0].style.transform = "translate(0%, " + scroll_val / 2 + "%)";
    heroWrap[0].style.marginBottom = 100 - scroll_val / 4 + "px";
  }
  if (scroll_val <= 360) {
    heroEffect[0].style.transform =
      "translate(0%, " + (120 - scroll_val / 3) + "%)";
  }

  // console.log('headline position');
  // console.log(exHeadline_p.top);
  if (scroll_val > exHeadline_p.top) {
    if (exHeadline[0].style.opacity < 1) {
      exHeadline[0].style.opacity = (scroll_val - exHeadline_p.top) / 500;
    } else exHeadline[0].style.opacity = 1;
  }

  // console.log(scroll_val);
  // console.log(spot_p.top);
  if (scroll_val > spot_p.top + 300) {
    if (flag === 0) {
      spotShadow[0].classList.toggle("active");
      flag++;
    }
  }
  if (scroll_val > spot_p.top + 600) {
    if (flag === 1) {
      spotLazyload[0].classList.toggle("active");
      flag++;
    }
  }
};

const character = document.getElementsByClassName("character");
const fukidashi = document.getElementsByClassName("fukidashi");
const quote = document.getElementsByClassName("quote");
spotLazyload[0].addEventListener(
  "mouseover",
  function () {
    mouseOver();
  },
  false
);
spotLazyload[0].addEventListener(
  "mouseleave",
  function () {
    mouseLeave();
  },
  false
);

// マウスが要素上に入った時
function mouseOver() {
  console.log("over");
  character[0].style.transform = "rotateX(0deg)";
  fukidashi[0].style.transform = "rotateX(0deg)";
  quote[0].style.transform = "rotateX(0deg)";
  // spotLazyload[0].style.opacity = '0';
}

// マウスが要素上から離れた時
function mouseLeave() {
  console.log("leave");
  character[0].style.transform = "rotateX(90deg)";
  fukidashi[0].style.transform = "rotateX(90deg)";
  quote[0].style.transform = "rotateX(90deg)";
  // spotLazyload[0].style.opacity = '1';
}

// click event

let swipeWrapper = document.getElementsByClassName("swipe-wrapper");
let counter = 0;
function setSwipe(elem) {
  let t = document.querySelector(elem);
  let startX, startY;
  let moveX, moveY;
  let dist = 100,
    dist2 = 30;
  let len = document.querySelectorAll(elem + "> a").length;
  // console.log("length:" + len);
  let currentStyle = window.getComputedStyle(swipeWrapper[0]);
  let initVal = currentStyle.getPropertyValue("transform");
  let initValArray = initVal.split(",");
  let flag = 0,
    stop_jump = 0;

  let drag = false;

  // document.addEventListener('mousedown', () => drag = false);
  // document.addEventListener('mousemove', () => drag = true);
  // document.addEventListener('mouseup', () => console.log(drag ? 'drag' : 'click'));

  t.addEventListener(
    "mousedown",
    function (e) {
      e.preventDefault();
      drag = false;
      initVal = currentStyle.getPropertyValue("transform");
      initValArray = initVal.split(",");
      startX = e.x;
      startY = e.y;
      // console.log('startX:'+startX);
      // console.log('startY:'+startY);
      // console.log('client_w:'+client_w);
      // console.log('initVal:' + currentStyle.getPropertyValue('transform'));
      // console.log('initVal:' + initValArray[4]);
      flag = 1;
    },
    { passive: false }
  );

  t.addEventListener(
    "mousemove",
    function (e) {
      e.preventDefault();
      drag = true;
      if (flag === 1) {
        moveX = e.x;
        moveY = e.y;
        // console.log('moveX:'+moveX);
        // console.log('moveY:'+moveY);
        if (startX > moveX + dist2) {
          stop_jump = 1;
          let movingVal = startX - moveX;
          if (counter === 0) {
            swipeWrapper[0].style.transform =
              "translate3d(-" + movingVal + "px, 0px, 0px)";
          } else if (counter === 1) {
            swipeWrapper[0].style.transform =
              "translate3d(-" + (client_w + movingVal) + "px, 0px, 0px)";
          }
          // console.log(movingVal);
        } else if (startX + dist2 < moveX) {
          stop_jump = 1;
          let movingVal = moveX - startX;
          // from left to right
          if (counter === 2) {
            swipeWrapper[0].style.transform =
              "translate3d(-" + (client_w * 2 - movingVal) + "px, 0px, 0px)";
          } else if (counter === 1) {
            swipeWrapper[0].style.transform =
              "translate3d(-" + (client_w - movingVal) + "px, 0px, 0px)";
          }
          // console.log('right');
        }
      }
    },
    { passive: false }
  );

  t.addEventListener(
    "mouseup",
    function (e) {
      e.preventDefault();
      // document.addEventListener('mouseup', () => console.log(drag ? 'drag' : 'click'));
      console.log(drag ? "drag" : "click");
      if (startX > moveX + dist) {
        // from right to left
        if (counter === 0) {
          swipeWrapper[0].style.transform =
            "translate3d(-" + client_w + "px, 0px, 0px)";
          exSlides[0].style.opacity = "0.3";
          exSlides[1].style.opacity = "1";
          counter++;
        } else if (counter === 1) {
          swipeWrapper[0].style.transform =
            "translate3d(-" + client_w * 2 + "px, 0px, 0px)";
          exSlides[1].style.opacity = "0.3";
          exSlides[2].style.opacity = "1";
          counter++;
        }
        // console.log('left');
      } else if (startX + dist < moveX) {
        // from left to right
        if (counter === 2) {
          swipeWrapper[0].style.transform =
            "translate3d(-" + client_w + "px, 0px, 0px)";
          exSlides[1].style.opacity = "1";
          exSlides[2].style.opacity = "0.3";
          counter--;
        } else if (counter === 1) {
          swipeWrapper[0].style.transform = "translate3d(0px, 0px, 0px)";
          exSlides[0].style.opacity = "1";
          exSlides[1].style.opacity = "0.3";
          counter--;
        }
        // console.log('right');
      } else {
        swipeWrapper[0].style.transform =
          "translate3d(" + initValArray[4] + "px, 0px, 0px)";
      }
      flag = 0;
    },
    { passive: false }
  );
}

// swipeWrapper[0].onmousedown = function(e) {
//   console.log('moveX:' + e.pageX + '/Y:' + e.pageY);
//   let t = document.querySelector(elem);
//   let startX, startY;
//   let moveX, moveY;
//   let dist = 50;
//   let len = document.querySelectorAll(elem + '> a').length;
//   console.log('length:' + len);
//   let currentStyle = window.getComputedStyle(swipeWrapper[0]);
//   let initVal = currentStyle.getPropertyValue('transform');
//   let initValArray = initVal.split(',');

//   t.addEventListener("touchstart", function(e) {
//     if (e.cancelable) e.preventDefault();
//     initVal = currentStyle.getPropertyValue('transform');
//     initValArray = initVal.split(',');
// 		startX = e.touches[0].pageX;
// 		startY = e.touches[0].pageY;
//     console.log('startX:'+startX);
//     console.log('startY:'+startY);
//     console.log('client_w:'+client_w);
//     console.log('initVal:' + currentStyle.getPropertyValue('transform'));
//     console.log('initVal:' + initValArray[4]);
// 	});

//   t.addEventListener("touchmove", function(e) {
//     if (e.cancelable) e.preventDefault();
// 		moveX = e.changedTouches[0].pageX;
// 		moveY = e.changedTouches[0].pageY;
//     console.log('moveX:'+moveX);
//     console.log('moveY:'+moveY);
//     if (startX>moveX) {
//       let movingVal = startX-moveX;
//       if (counter === 0) {
//         swipeWrapper[0].style.transform = 'translate3d(-' + (movingVal) +'px, 0px, 0px)';
//       } else if (counter === 1) {
//         swipeWrapper[0].style.transform = 'translate3d(-' + (client_w+movingVal) +'px, 0px, 0px)';
//       }
//       console.log(movingVal);
//     } else if (startX<moveX) {
//       let movingVal = moveX-startX;
//       // from left to right
//       if (counter === 2) {
//         swipeWrapper[0].style.transform = 'translate3d(-' + (client_w*2-movingVal) +'px, 0px, 0px)';
//       } else if (counter === 1) {
//         swipeWrapper[0].style.transform = 'translate3d(-' + (client_w-movingVal) + 'px, 0px, 0px)';
//       }
//       console.log('right');
//     }
// 	});

//   t.addEventListener("touchend", function(e) {
//     if ((startX>moveX) && (startX>(moveX+dist))) {
//       // from right to left
//       if (counter === 0) {
//         swipeWrapper[0].style.transform = 'translate3d(-' + client_w +'px, 0px, 0px)';
//         exSlides[0].style.opacity = '0.3';
//         exSlides[1].style.opacity = '1';
//         counter++;
//       } else if (counter === 1) {
//         swipeWrapper[0].style.transform = 'translate3d(-' + client_w*2 +'px, 0px, 0px)';
//         exSlides[1].style.opacity = '0.3';
//         exSlides[2].style.opacity = '1';
//         counter++;
//       }
//       console.log('left');
//     } else if ((startX<moveX) && ((startX+dist)<moveX)) {
//       // from left to right
//       if (counter === 2) {
//         swipeWrapper[0].style.transform = 'translate3d(-' + client_w +'px, 0px, 0px)';
//         exSlides[1].style.opacity = '1';
//         exSlides[2].style.opacity = '0.3';
//         counter--;
//       } else if (counter === 1) {
//         swipeWrapper[0].style.transform = 'translate3d(0px, 0px, 0px)';
//         exSlides[0].style.opacity = '1';
//         exSlides[1].style.opacity = '0.3';
//         counter--;
//       }
//       console.log('right');
//     } else {
//       swipeWrapper[0].style.transform = 'translate3d(' + initValArray[4] +'px, 0px, 0px)';
//     }
//   });
// };

// let counter=0;
// function setSwipe(elem) {
//   let t = document.querySelector(elem);
//   let startX, startY;
//   let moveX, moveY;
//   let dist = 50;
//   let len = document.querySelectorAll(elem + '> a').length;
//   console.log('length:' + len);
//   let currentStyle = window.getComputedStyle(swipeWrapper[0]);
//   let initVal = currentStyle.getPropertyValue('transform');
//   let initValArray = initVal.split(',');

//   t.addEventListener("touchstart", function(e) {
//     if (e.cancelable) e.preventDefault();
//     initVal = currentStyle.getPropertyValue('transform');
//     initValArray = initVal.split(',');
// 		startX = e.touches[0].pageX;
// 		startY = e.touches[0].pageY;
//     console.log('startX:'+startX);
//     console.log('startY:'+startY);
//     console.log('client_w:'+client_w);
//     console.log('initVal:' + currentStyle.getPropertyValue('transform'));
//     console.log('initVal:' + initValArray[4]);
// 	});

//   t.addEventListener("touchmove", function(e) {
//     if (e.cancelable) e.preventDefault();
// 		moveX = e.changedTouches[0].pageX;
// 		moveY = e.changedTouches[0].pageY;
//     console.log('moveX:'+moveX);
//     console.log('moveY:'+moveY);
//     if ((startX>moveX) && (startX>moveX)) {
//       let movingVal = startX-moveX;
//       if (counter === 0) {
//         swipeWrapper[0].style.transform = 'translate3d(-' + (movingVal) +'px, 0px, 0px)';
//       } else if (counter === 1) {
//         swipeWrapper[0].style.transform = 'translate3d(-' + (client_w+movingVal) +'px, 0px, 0px)';
//       }
//       console.log(movingVal);
//     } else if ((startX<moveX) && (startX<moveX)) {
//       let movingVal = moveX-startX;
//       // from left to right
//       if (counter === 2) {
//         swipeWrapper[0].style.transform = 'translate3d(-' + (client_w*2-movingVal) +'px, 0px, 0px)';
//       } else if (counter === 1) {
//         swipeWrapper[0].style.transform = 'translate3d(-' + (client_w-movingVal) + 'px, 0px, 0px)';
//       }
//       console.log('right');
//     }
// 	});

//   t.addEventListener("touchend", function(e) {
//     if ((startX>moveX) && (startX>(moveX+dist))) {
//       // from right to left
//       if (counter === 0) {
//         swipeWrapper[0].style.transform = 'translate3d(-' + client_w +'px, 0px, 0px)';
//         exSlides[0].style.opacity = '0.3';
//         exSlides[1].style.opacity = '1';
//         counter++;
//       } else if (counter === 1) {
//         swipeWrapper[0].style.transform = 'translate3d(-' + client_w*2 +'px, 0px, 0px)';
//         exSlides[1].style.opacity = '0.3';
//         exSlides[2].style.opacity = '1';
//         counter++;
//       }
//       console.log('left');
//     } else if ((startX<moveX) && ((startX+dist)<moveX)) {
//       // from left to right
//       if (counter === 2) {
//         swipeWrapper[0].style.transform = 'translate3d(-' + client_w +'px, 0px, 0px)';
//         exSlides[1].style.opacity = '1';
//         exSlides[2].style.opacity = '0.3';
//         counter--;
//       } else if (counter === 1) {
//         swipeWrapper[0].style.transform = 'translate3d(0px, 0px, 0px)';
//         exSlides[0].style.opacity = '1';
//         exSlides[1].style.opacity = '0.3';
//         counter--;
//       }
//       console.log('right');
//     } else {
//       swipeWrapper[0].style.transform = 'translate3d(' + initValArray[4] +'px, 0px, 0px)';
//     }
//   });
// }

// style="transform: translate3d(0px, 0px, 0px);
