const originalCursor = "z-index: 100000; width: 10px; height: 10px; border: 2px solid white;mix-blend-mode:difference; border-radius: 50%; position: absolute;transition: all 0.1s linear; pointer-events: none;"

var n = document.createElement("div");
    n.style.cssText = originalCursor;
    document.body.appendChild(n);

document.addEventListener("mousemove", (e) => {
  n.style.left = (e.pageX - 11) + "px";
  n.style.top = (e.pageY - 11) + "px";
});

// for (let e of document.getElementsByTagName("em")) {
//     e.onmouseover = function(){
//         n.style.border = "1px solid white"
//         n.style.cssText += "transform: scale(3);background: red;border-color:red;";
//     };
//     e.onmouseout = function(){
//         n.style.cssText = originalCursor;
//     };
// }

for (let e of document.getElementsByTagName("a")) {
    e.onmouseover = function(){
        n.style.border = "1px solid white"
        n.style.cssText += "transform: scale(3);background: white;";
    };
    e.onmouseout = function(){
        n.style.cssText = originalCursor;
    };
}
for (let e of document.getElementsByTagName("img")) {
    e.onmouseover = function(){
        n.style.border = "1px solid white"
        n.style.cssText += "transform: scale(4);background: white;";
    };
    e.onmouseout = function(){
        n.style.cssText = originalCursor;
    };
}

// Text shifter

let shifters = document.getElementsByTagName('shift');
let i = 1;
setInterval(function (){
    if(i == 0) {
        shifters[3].classList.remove('visible');
    } else shifters[i-1].classList.remove('visible');
    
    shifters[i].classList.add('visible');
    
    i++;
    if (i == 4) i = 0;
}, 3000)