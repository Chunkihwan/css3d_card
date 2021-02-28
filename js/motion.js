var wrap;
let x=0,y=0;
let mx =0,my = 0;
let orientNumX = 0;
let orientNumY = 0;
let isMobile = false;
let perNum = 10;

window.onload = function(){
    wrap = document.querySelector(".contentWrap");
    isMobile = mobileChk();
    if(isMobile){
        perNum = 1;
        if (window.DeviceOrientationEvent) {
            window.addEventListener("deviceorientation", function(event){
                x = event.gamma;
                y = event.beta ;
            });
        }
        loopMobile();

    }else{
        window.addEventListener("mousemove", function(e){
            x = (e.clientX - window.innerWidth / 2);
            y = (e.clientY - window.innerHeight / 2);
        });
        loop();
    }
    
}

function loop(){
    mx += (x - mx) * .1;
    my += (y - my) * .1; 

    wrap.style.transform = "translate3d(-50%, -50%, 0) rotateX("+ (my / perNum) +"deg) rotateY("+ (-mx / perNum ) +"deg)";
    window.requestAnimationFrame(loop);
}

var tempx= 0, tempy=0;
function loopMobile(){
    mx += (x - mx) * .1;
    my += (y - my) * .1; 
    // tempx -= .01;
    // tempy += .4;
    // console.log(tempx)
    wrap.style.transform = "translate3d(-50%, -50%, 0) rotateX("+ (my- 50) +"deg) rotateY("+ (mx) +"deg)";
    window.requestAnimationFrame(loopMobile);
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
