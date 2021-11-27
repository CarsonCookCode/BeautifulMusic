// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
let intViewportWidth = window.innerWidth;
var id = null;
function myMove() {
    intViewportWidth = window.innerWidth;
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == (intViewportWidth - 50)) {
            clearInterval(id);
            myMoveBack();
        } else {
            pos++;
            //elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

function myMoveBack() {
    intViewportWidth = window.innerWidth;
    var elem = document.getElementById("myAnimation");
    var pos = (intViewportWidth - 50)
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
            myMove();
        } else {
            pos--;
            //elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

myMove();