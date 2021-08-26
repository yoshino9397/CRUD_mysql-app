/* --------- lording ---------- */
// onload = function() {
//     const gao = this.document.getElementById('loading');
//     gao.classList.add('loaded');
// }

/* --------- ham icon ---------- */
// let icon = document.querySelector('.icon');
// icon.addEventListener('click', () => {
//     icon.classList.toggle('show');
// })

const testArray = [
    {image:'slideimg', text:'moji', class1:'slideDino', class2:'slideMoji'},
    {image:'imgpc', text:'bun', class1:'slideImgpc', class2:'slideBun'}];
// --------- click event ----------
const con1 = document.getElementById('con1');
con1.addEventListener('mouseover', function() {
    mouseOver(testArray[0]);
}, false);
con1.addEventListener('mouseleave', function() {
    mouseLeave(testArray[0]);
}, false);

// -----
const con2 = document.getElementById('con2');
con2.addEventListener('mouseover', function() {
    mouseOver(testArray[1]);
}, false);
con2.addEventListener('mouseleave', function() {
    mouseLeave(testArray[1]);
}, false);

function mouseOver(chara) {
    document.getElementById(chara.image).classList.add(chara.class1);
    document.getElementById(chara.text).classList.add(chara.class2);
}
function mouseLeave(chara) {
    document.getElementById(chara.image).classList.remove(chara.class1);
    document.getElementById(chara.text).classList.remove(chara.class2);
}
// -----
// const con2 = document.getElementById('con2');
// con2.addEventListener('mouseover', function() {
//     mouseOver();
// }, false);
// con2.addEventListener('mouseleave', function() {
//     mouseLeave();
// }, false);

// function mouseOver() {
//     document.getElementById('imgpc').classList.add('slideImgpc');
//     document.getElementById('bun').classList.add('slideBun');
// }
// function mouseLeave() {
//     document.getElementById('imgpc').classList.remove('slideImgpc');
//     document.getElementById('bun').classList.remove('slideBun');
// }