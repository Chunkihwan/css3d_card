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
            //모바일 디바이스가 움직임이 감지되면 실행
            alert(11)
            window.addEventListener("deviceorientation", function (event) {
                x = event.gamma;
                y = event.beta;
            }, true);
        }
        loopMobile();

    } else {
        //pc면 실행
        window.addEventListener("mousemove", function (e) {
            x = (e.clientX - window.innerWidth / 2);
            y = (e.clientY - window.innerHeight / 2);
            //마우스 위치값을 화면의 정가운데가 0,0이 되도록 맞춤
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
    //가속도 설정. 뒤의 값을 변경하면 가속도 값 변경

    wrap.style.transform = "translate3d(-50%, -50%, 0) rotateX(" + (my / 10) + "deg) rotateY(" + (-mx / 10) + "deg)";
    //마우스 위치에 따른 대상의 움직임 위치 셋팅

    window.requestAnimationFrame(loop);
    //반복 실행
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