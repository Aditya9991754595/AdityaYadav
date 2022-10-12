let light = document.getElementById("lite")
let dark = document.getElementById("drk")
let css = document.getElementById("style")
let timer = document.getElementById("time")



// -------------dark & light mode-------------------
light.onclick = function () {
    css.href = "astyle.css";
}
dark.onclick = function () {
    css.href = "bstyle.css";
}


