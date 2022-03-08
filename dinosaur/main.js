/* --------- lording ---------- */
onload = function() {
    const gao = this.document.getElementById('loading');
    gao.classList.add('loaded');
}

/* --------- ham icon ---------- */
// let icon = document.querySelector('.icon');
// icon.addEventListener('click', () => {
//     icon.classList.toggle('show');
// })

const testArray = [
    {image:'slideimg', text:'moji', class1:'slideDino', class2:'slideMoji'},
    {image:'imgpc', text:'bun', class1:'slideImgpc', class2:'slideBun'},
    {image:'main4thimg', text:'bun4th', class1:'slideimg4', class2:'slidebun4th'},
    {image:'gaoo', text:'th', class1:'fadein', class2:'fade'},
    {image:'main5thimg', text:'bun5th', class1:'slideimg5', class2:'slidebun5th'},
    {image:'main6thimg', text:'bun6th', class1:'slideimg6', class2:'slidebun6th'},
];
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
// -----
const con3 = document.getElementById('con3');
con3.addEventListener('mouseover', function() {
    mouseOver(testArray[2]);
}, false);
con3.addEventListener('mouseleave', function() {
    mouseLeave(testArray[2]);
}, false);
// -----
const con4 = document.getElementById('con4');
con4.addEventListener('mouseover', function() {
    mouseOver(testArray[3]);
}, false);
con4.addEventListener('mouseleave', function() {
    mouseLeave(testArray[3]);
}, false);
// -----
const con5 = document.getElementById('con5');
con5.addEventListener('mouseover', function() {
    mouseOver(testArray[4]);
}, false);
con5.addEventListener('mouseleave', function() {
    mouseLeave(testArray[4]);
}, false);
// -----
const con6 = document.getElementById('con6');
con6.addEventListener('mouseover', function() {
    mouseOver(testArray[5]);
}, false);
con6.addEventListener('mouseleave', function() {
    mouseLeave(testArray[5]);
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