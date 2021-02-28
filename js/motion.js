var wrap;
var x = 0,
    y = 0;
var mx = 0,
    my = 0;
var orientNumX = 0;
var orientNumY = 0;
var isMobile = false;

window.onload = function () {
    wrap = document.querySelector(".contentWrap");
    isMobile = mobileChk();

    if (isMobile) {
        //모바일이면 실행
        if (window.DeviceOrientationEvent) {
            window.addEventListener("deviceorientation", function (event) {
                x = event.gamma;
                y = event.beta;
            });
        }
        loopMobile();

    } else {
        //pc면 실행
        window.addEventListener("mousemove", function (e) {
            x = (e.clientX - window.innerWidth / 2);
            y = (e.clientY - window.innerHeight / 2);
        });
        loop();
    }

}

function loopMobile() {
    mx += (x - mx) * .1;
    my += (y - my) * .1;
    wrap.style.transform = "translate3d(-50%, -50%, 0) rotateX(" + (my - 50) + "deg) rotateY(" + (mx) + "deg)";
    window.requestAnimationFrame(loopMobile);
}

function loop() {
    mx += (x - mx) * .1;
    my += (y - my) * .1;
    wrap.style.transform = "translate3d(-50%, -50%, 0) rotateX(" + (my / 10) + "deg) rotateY(" + (-mx / 10) + "deg)";
    window.requestAnimationFrame(loop);
}


function mobileChk() {
    var mobileKeyWords = new Array('Android', 'iPhone', 'iPod', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson');
    for (var info in mobileKeyWords) {
        if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
            return true;
        }
    }
    return false;
}