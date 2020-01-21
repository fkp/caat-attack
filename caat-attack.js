
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

  var tl = new TimelineMax();

  // Coordinates to visit - first will have a 0 duration, we'll calculate the rest based on the distance
  var coords = [
    {xcoord:1360, ycoord:267, duration:0},
    {xcoord:1529, ycoord:251},
    {xcoord:1686, ycoord:207},
    {xcoord:1981, ycoord:860}];

  panToCoords(tl, coords);

  // Show hazard container
  tl.to('#hazardContainer',0.5,{autoAlpha:1});
  tl.to('#hazardImg',0.5,{autoAlpha:1});
  // Set hazard text?
  tl.to('#hazardText',0.5,{text:"Bad crossing!"});
}

// x coord: -x means left of viewport is x pixels from the left of the image
function xPosition(xPx) {
	return -xPx+250;
}

// y coord: y means bottom viewport is y pixels from the bottom of the image
function yPosition(yPx) {
	return 2000-yPx-250;
}

function panToCoords(tl, coords) {
  // Calculate the duration based on the distance between this coordinate and the previous
  for (i=1; i<coords.length; i++)
    coords[i].duration = calcDuration(coords[i].xcoord,coords[i].ycoord,coords[i-1].xcoord,coords[i-1].ycoord);

  coords.forEach(obj =>
  {
    //console.log(obj.duration + " " + obj.xcoord + " " + obj.ycoord);
    tl.to('#slideContent',obj.duration,{x:xPosition(obj.xcoord),y:yPosition(obj.ycoord),z:0.1});
  });
}

function calcDuration(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2)) / 150;
}