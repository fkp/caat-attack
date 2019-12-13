
var cta;

function loadedHandler() {
    TweenLite.delayedCall(1, setup);
}

function setup() {
  cta = document.getElementById("cta");
  animate1();
}

function animate1() {
  TweenLite.to(["#mainContainer","#dmains","#slideContent"],0,{autoAlpha:1});
	//TweenLite.fromTo('#slideContent',1, {x:0}, {x:100});
	
  TweenLite.to('#slideContent',5,{x:-2000, y:200, z: 0.1, // use if jitter or shaking is really bad
       rotationZ: 0.01, // use if jitter or shaking is really bad
       ease:Linear.easeNone});
  TweenLite.to('#slideContent',5,{x:-1000, y:-200, z: 0.1, // use if jitter or shaking is really bad
       rotationZ: 0.01, // use if jitter or shaking is really bad
       ease:Linear.easeNone,
	   delay: 5});

 	//document.getElementById('slideContent').className = "start"
	//TweenLite.to('#endFrame',1,{autoAlpha:1, delay:0})
}
