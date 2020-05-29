
function initialize() {
    let i = 0;
    let intervalID = null;
    let intervalTime = 250;
    let textvalue = null;


    const btnSartElem = document.getElementById("btnstart");
    btnSartElem.onclick = start;

    const btnStopElem = document.getElementById("btnstop");
    btnStopElem.onclick = end;


    const selanimElem = document.getElementById("animation");
    selanimElem.onchange = animation;

    const selsizeElem = document.getElementById("size");
    selsizeElem.onchange = changeSize;

    const chkTurboElem = document.getElementById("check");
    chkTurboElem.onchange = turboAnimate;

    function controlDisplay(control) {

        //start clicked
        if (control == 0) {
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

        // console.log(x);
        // document.getElementById("textarea").value=null;
        document.getElementById("textarea").value = textvalue[i];
        i++;
        if (i == textvalue.length) i = 0;
        console.log("Display: i=" + i);
    }

    //start animation
    function start() {
        controlDisplay(0);
        textvalue = document.getElementById("textarea").value.split('=====');
if(intervalID==null){
        intervalID = setInterval(display, intervalTime);
}
        //console.log(intervalID + " i=" + i)
    }

    //end animation
    function end() {

        if (intervalID != null) {
            controlDisplay(1);

            clearInterval(intervalID);
         intervalID=null;
        }
        i=0;
            document.getElementById("textarea").value = ANIMATIONS[document.getElementById("animation").value];

    }

    function animation(x) {
        //alert(this.value)
        document.getElementById("textarea").value = ANIMATIONS[this.value];

    }

    function changeSize() {
        document.getElementById("textarea").style.fontSize = this.value;
    }

    function turboAnimate() {
        if(intervalID!=null){
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