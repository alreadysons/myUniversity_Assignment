var mapContainer = document.getElementById('map');
var mapOptions = {
    center: new kakao.maps.LatLng(37.30508256139348, 127.92340253111414),
    level: 3
};

var map = new kakao.maps.Map(mapContainer, mapOptions);

map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);

var startMarker = new kakao.maps.Marker({
    map: map
});

var endMarker = new kakao.maps.Marker({
    map: map
});

function searchMarkers() {
    var startKeyword = document.getElementById('start').value;
    var endKeyword = document.getElementById('end').value;

    var places = new kakao.maps.services.Places();

    places.keywordSearch(startKeyword, function (startResult, startStatus) {
        if (startStatus === kakao.maps.services.Status.OK) {
            var startPlace = startResult[0];
            var startCoords = new kakao.maps.LatLng(startPlace.y, startPlace.x);
            startMarker.setPosition(startCoords);
            map.setCenter(startCoords);
        }
    });

    places.keywordSearch(endKeyword, function (endResult, endStatus) {
        if (endStatus === kakao.maps.services.Status.OK) {
            var endPlace = endResult[0];
            var endCoords = new kakao.maps.LatLng(endPlace.y, endPlace.x);
            endMarker.setPosition(endCoords);
        }
    });
}

function zoomIn() {
    map.setLevel(map.getLevel() - 1);
}

function zoomOut() {
    map.setLevel(map.getLevel() + 1);
}
