

function initialize() {
    let i = 0;
    let intervalID = null;
    let intervalTime = 250;
    let textvalue = null;
    let selectedAnimation = null;

    let btnSartElem = document.getElementById("btnstart");
    btnSartElem.onclick = start;

    let btnStopElem = document.getElementById("btnstop");
    btnStopElem.onclick = end;


    let selanimElem = document.getElementById("animation");
    selanimElem.onchange = animation;

    let selsizeElem = document.getElementById("size");
    selsizeElem.onchange = changeSize;

    let chkTurboElem = document.getElementById("check");
    chkTurboElem.onchange = turboAnimate;

    let textareaElem = document.getElementById("textarea");

    function controlDisplay(control) {

        //start clicked
        if (control === 0) {
            btnSartElem.disabled = true;
            selanimElem.disabled = true;
            btnStopElem.disabled = false;
        } else {
            btnSartElem.disabled = false;
            btnStopElem.disabled = true;
            selanimElem.disabled = false;
        }
    }

    //displaying animation
    function display() {
        textareaElem.value = textvalue[i];
        i = i + 1;

        if (i === textvalue.length) {
            i = 0;
        }
    }

    //start animation
    function start() {
        controlDisplay(0);
        textvalue = textareaElem.value.split("=====");
        if (intervalID === null) {
            intervalID = setInterval(display, intervalTime);
        }
        //console.log(intervalID + " i=" + i)
    }

    //end animation
    function end() {

        if (intervalID !== null) {
            controlDisplay(1);

            clearInterval(intervalID);
            intervalID = null;
        }
        i = 0;
        selectedAnimation = selanimElem.value;
        textareaElem.value = ANIMATIONS[selectedAnimation];

    }

    function animation() {
        //alert(this.value)
        textareaElem.value = ANIMATIONS[this.value];

    }

    function changeSize() {
        textareaElem.style.fontSize = this.value;
    }

    function turboAnimate() {
        if (intervalID !== null) {
            // alert(this.checked)
            if (this.checked) {
                clearInterval(intervalID);
                intervalTime = 50;
                intervalID = setInterval(display, intervalTime);

            } else {
                clearInterval(intervalID);
                intervalTime = 250;
                intervalID = setInterval(display, intervalTime);
            }
        }
    }


}
window.onload = initialize;