
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
  
  TweenLite.to('#slideContent',0, {x:0, y:1000});
  TweenLite.to('#slideContent',5,{x:-2000, y:200, z: 0.1,
       rotationZ: 0.01, // use if jitter or shaking is really bad
       ease:Linear.easeNone});
  TweenLite.to('#slideContent',5,{x:-1800, y:100, z: 0.1,
       rotationZ: 0.01, // use if jitter or shaking is really bad
       ease:Linear.easeNone,
	   delay: 5});
}
