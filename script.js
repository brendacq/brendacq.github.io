var color = "black";
var per = 0.3;
var els = document.getElementsByClassName("u-s");
for(let i = 0; i < els.length; i++){
    var height = els[i].offsetHeight;
    var width = els[i].offsetWidth;

    let underline = document.createElement('div');
    underline.style.width = width * per + "px";
    underline.style.height = 3 + "px";
    underline.style.backgroundColor = color;
    underline.style.position = "relative";
    underline.style.left = (width/2 - ((width *per)/2)) - 12 + "px";
    underline.style.top = 3 + "px";

    els[i].appendChild(underline);
}