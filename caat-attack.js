
var cta;

function loadedHandler() {
    TweenLite.delayedCall(1, setup);
}

function setup() {
  cta = document.getElementById("cta");
  animate();
}

function animate() {
  TweenLite.to(["#mainContainer","#dmains","#slideContent"],0,{autoAlpha:1, x:0, y:0});
  
  TweenLite.to('#slideContent',0, {x:xPosition(1360), y:yPosition(267)});
  TweenLite.to('#slideContent',5,{x:xPosition(1529), y:yPosition(251), z: 0.1,
       rotationZ: 0.01, // use if jitter or shaking is really bad
       ease:Linear.easeNone});
  TweenLite.to('#slideContent',5,{x:xPosition(1686), y:yPosition(207), z: 0.1,
       rotationZ: 0.01, // use if jitter or shaking is really bad
       ease:Linear.easeNone,
	   delay: 5});
  TweenLite.to('#slideContent',5,{x:xPosition(1919), y:yPosition(707), z: 0.1,
       rotationZ: 0.01, // use if jitter or shaking is really bad
       ease:Linear.easeNone,
	   delay: 10});
}

// x coord: -x means left of viewport is x pixels from the left of the image
function xPosition(xPx) {
	return -xPx+250;
}

// y coord: y means bottom viewport is y pixels from the bottom of the image
function yPosition(yPx) {
	return 2000-yPx-250;
}