const original = "z-index: 100000; width: 20px; height: 20px; border: 2px solid white; border-radius: 50%; position: absolute;transition: all 0.1s linear; pointer-events: none;"

var n = document.createElement("div");
            n.className = "cursor";
            n.style.cssText = original;
            document.body.appendChild(n);

document.addEventListener('mousemove', (e) => {
  n.style.left = (e.pageX - 11) + "px";
  n.style.top = (e.pageY - 11) + "px";
});

for (let e of document.getElementsByTagName("em")) { e.onmouseover = function(){
    n.style.border = "1px solid white"
  n.style.cssText += 'transform: scale(2);mix-blend-mode:difference;background: red;';
};
e.onmouseout = function(){
  n.style.cssText = original;
};
}