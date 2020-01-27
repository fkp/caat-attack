mapboxgl.accessToken = 'pk.eyJ1IjoiZnJhc2Vya3AiLCJhIjoiNjUxMjNiMTI3M2Q5YTRlYTkxMzkxNzNhNDYxNGJiMmUifQ.O5ZRm8pWtN1Ao6YNJMRF7Q';
var start = [-3.190, 55.944];
var end = [-3.269965, 55.967333];
var end2 = [-3.269503, 55.967393];
var end3 = [-3.268988, 55.967501];
var end4 = [-3.267469, 55.965649];

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/fraserkp/ck435sshr1jp01cs4yzcjczmv',
    center: start,
    zoom: 11
});
 
var isAtStart = true;
 
document.getElementById('animate').addEventListener('click', function() {
    PanTo(map, end, 10);
    setTimeout(function(){ PanTo(map, end2, 0.2) }, 3000);
    setTimeout(function(){ PanTo(map, end3, 0.2) }, 4000);
    setTimeout(function(){ PanTo(map, end4, 0.2) }, 5000);

    function PanTo(map, place, speedRequired) {

        map.flyTo({
            // These options control the ending camera position: centered at
            // the target, at zoom level 9, and north up.
            center: place,
            zoom: 17,
            bearing: 0,

            // These options control the flight curve, making it move
            // slowly and zoom out almost completely before starting
            // to pan.
            speed: speedRequired,
            curve: 1, // change the speed at which it zooms out

            // This can be any easing function: it takes a number between
            // 0 and 1 and returns another number between 0 and 1.
            easing: function(t) {
                return t;
            },

            // this animation is considered essential with respect to prefers-reduced-motion
            essential: true
        });
    }
});