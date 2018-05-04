var map;
var activeInfoWindows;

var markerUIT;
var infoWindowUIT;

var markerService1;
var infowindowService1;
var markerService2;
var infowindowService2;
var markerService3;
var infowindowService3;
var markerService4;
var infowindowService4;

var markerMagasin1;
var infowindowMagasin1;
var markerMagasin2;
var infowindowMagasin2;
var markerMagasin3;
var infowindowMagasin3;
var markerMagasin4;
var infowindowMagasin4;

var markerRestaurant1;
var infowindowRestaurant1;
var markerRestaurant2;
var infowindowRestaurant2;
var markerRestaurant3;
var infowindowRestaurant3;
var markerRestaurant4;
var infowindowRestaurant4;
var markerRestaurant5;
var infowindowRestaurant5;
var markerRestaurant6;
var infowindowRestaurant6;
var markerRestaurant7;
var infowindowRestaurant7;
var markerRestaurant8;
var infowindowRestaurant8;

var markerLoisir1;
var infowindowLoisir1;
var markerLoisir2;
var infowindowLoisir2;
var markerLoisir3;
var infowindowLoisir3;
var markerLoisir4;
var infowindowLoisir4;
var markerLoisir5;
var infowindowLoisir5;


var contentStringUIT = '<div class="infoWindowUIT">' + '<div class="iw-title">UIT</div>';

var contentStringService1 = '<div class="infoWindowService">' + '<div class="iw-title">UBS</div>';
var contentStringService2 = '<div class="infoWindowService">Poste du CICG</div>';
var contentStringService3 = '<div class="infoWindowService">Poste de Montbrillant</div>';
var contentStringService4 = '<div class="infoWindowService">Pharmacie Populaire Nations</div>';

var contentStringMagasin1 = '<div class="infoWindowMagasin">Coop</div>';
var contentStringMagasin2 = '<div class="infoWindowMagasin">Migros</div>';
var contentStringMagasin3 = '<div class="infoWindowMagasin">Denner</div>';
var contentStringMagasin4 = '<div class="infoWindowMagasin">Balexert</div>';

var contentStringRestaurant1 = '<div class="infoWindowRestaurant">Thai Phuket</div>';
var contentStringRestaurant2 = '<div class="infoWindowRestaurant">Romana</div>';
var contentStringRestaurant3 = '<div class="infoWindowRestaurant">Pizzeria Ariana</div>';
var contentStringRestaurant4 = '<div class="infoWindowRestaurant">Brasserie Tivoli Les Nations</div>';
var contentStringRestaurant5 = '<div class="infoWindowRestaurant">Le Homard bleu</div>';
var contentStringRestaurant6 = '<div class="infoWindowRestaurant">Table des nations</div>';
var contentStringRestaurant7 = '<div class="infoWindowRestaurant">Sagano</div>';
var contentStringRestaurant8 = '<div class="infoWindowRestaurant">Colombe</div>';

var contentStringLoisir1 = '<div class="infoWindowLoisir">Piscine de Varembé</div>';
var contentStringLoisir2 = '<div class="infoWindowLoisir">Centre de yoga - Colife Nations Yoga & Pilates</div>';
var contentStringLoisir3 = '<div class="infoWindowLoisir">Let\'s Go Fitness</div>';
var contentStringLoisir4 = '<div class="infoWindowLoisir">Parc de l\'Ariana</div>';
var contentStringLoisir5 = '<div class="infoWindowLoisir">Parc de Vermont</div>';

function initMap() {
    var positionUIT = {
        lat: 46.220741,
        lng: 6.137027
    };

    var positionService1 = {
        lat: 46.219999,
        lng: 6.136433
    };
    var positionService2 = {
        lat: 46.220029,
        lng: 6.137951
    };
    var positionService3 = {
        lat: 46.21310,
        lng: 6.141907
    };
    var positionService4 = {
        lat: 46.220450,
        lng: 6.140240
    };

    var positionMagasin1 = {
        lat: 46.220270,
        lng: 6.141794
    };
    var positionMagasin2 = {
        lat: 46.216206,
        lng: 6.139476
    };
    var positionMagasin3 = {
        lat: 46.220328,
        lng: 6.140325
    };
    var positionMagasin4 = {
        lat: 46.219842,
        lng: 6.113765
    };

    var positionRestaurant1 = {
        lat: 46.220605,
        lng: 6.141932
    };
    var positionRestaurant2 = {
        lat: 46.219116,
        lng: 6.137512
    };
    var positionRestaurant3 = {
        lat: 46.220745,
        lng: 6.140143
    };
    var positionRestaurant4 = {
        lat: 46.221084,
        lng: 6.139885
    };

    var positionRestaurant5 = {
        lat: 46.219583,
        lng: 6.136966
    };
    var positionRestaurant6 = {
        lat: 46.218115,
        lng: 6.133623
    };
    var positionRestaurant7 = {
        lat: 46.219984,
        lng: 6.141478
    };
    var positionRestaurant8 = {
        lat: 46.220047,
        lng: 6.133549
    };

    var positionLoisir1 = {
        lat: 46.219318,
        lng: 6.135093
    };
    var positionLoisir2 = {
        lat: 46.219663,
        lng: 6.133406
    };
    var positionLoisir3 = {
        lat: 46.219999,
        lng: 6.143350
    };
    var positionLoisir4 = {
        lat: 46.225298,
        lng: 6.141423
    };
    var positionLoisir5 = {
        lat: 46.218543,
        lng: 6.139639
    };


    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: positionUIT
    });


    infoWindowUIT = new google.maps.InfoWindow({
        content: contentStringUIT,
        pixelOffset: new google.maps.Size(0, -30),
    });

    infowindowService1 = new google.maps.InfoWindow({
        content: contentStringService1,
        pixelOffset: new google.maps.Size(0, -30),
    });
    infowindowService2 = new google.maps.InfoWindow({
        content: contentStringService2,
        pixelOffset: new google.maps.Size(0, -30)
    });
    infowindowService3 = new google.maps.InfoWindow({
        content: contentStringService3,
        pixelOffset: new google.maps.Size(0, -30)
    });
    infowindowService4 = new google.maps.InfoWindow({
        content: contentStringService4,
        pixelOffset: new google.maps.Size(0, -30)
    });

    infowindowMagasin1 = new google.maps.InfoWindow({
        content: contentStringMagasin1,
        pixelOffset: new google.maps.Size(0, -30)
    });
    infowindowMagasin2 = new google.maps.InfoWindow({
        content: contentStringMagasin2,
        pixelOffset: new google.maps.Size(0, -30)
    });
    infowindowMagasin3 = new google.maps.InfoWindow({
        content: contentStringMagasin3,
        pixelOffset: new google.maps.Size(0, -30)
    });
    infowindowMagasin4 = new google.maps.InfoWindow({
        content: contentStringMagasin4,
        pixelOffset: new google.maps.Size(0, -30)
    });

    infowindowRestaurant1 = new google.maps.InfoWindow({
        content: contentStringRestaurant1,
        pixelOffset: new google.maps.Size(0, -30)
    });
    infowindowRestaurant2 = new google.maps.InfoWindow({
        content: contentStringRestaurant2,
        //pixelOffset: new google.maps.Size(0,-30)
    });
    infowindowRestaurant3 = new google.maps.InfoWindow({
        content: contentStringRestaurant3,
        pixelOffset: new google.maps.Size(0, -30)
    });
    infowindowRestaurant4 = new google.maps.InfoWindow({
        content: contentStringRestaurant4,
        pixelOffset: new google.maps.Size(0, -30)
    });
    infowindowRestaurant5 = new google.maps.InfoWindow({
        content: contentStringRestaurant5,
        pixelOffset: new google.maps.Size(0, -30)
    });
    infowindowRestaurant6 = new google.maps.InfoWindow({
        content: contentStringRestaurant6,
        pixelOffset: new google.maps.Size(0, -30)
    });
    infowindowRestaurant7 = new google.maps.InfoWindow({
        content: contentStringRestaurant7,
        pixelOffset: new google.maps.Size(0, -30)
    });
    infowindowRestaurant8 = new google.maps.InfoWindow({
        content: contentStringRestaurant8,
        pixelOffset: new google.maps.Size(0, -30)
    });
    infowindowLoisir1 = new google.maps.InfoWindow({
        content: contentStringLoisir1,
        pixelOffset: new google.maps.Size(0, -30)
    });
    infowindowLoisir2 = new google.maps.InfoWindow({
        content: contentStringLoisir2,
        pixelOffset: new google.maps.Size(0, -30)
    });
    infowindowLoisir3 = new google.maps.InfoWindow({
        content: contentStringLoisir3,
        //pixelOffset: new google.maps.Size(0,-30)
    });
    infowindowLoisir4 = new google.maps.InfoWindow({
        content: contentStringLoisir4,
        pixelOffset: new google.maps.Size(0, -30)
    });
    infowindowLoisir5 = new google.maps.InfoWindow({
        content: contentStringLoisir5,
        pixelOffset: new google.maps.Size(0, -30)
    });


    markerUIT = new google.maps.Marker({
        position: positionUIT,
        map: map,
        title: 'UIT',
        visible: false,
    });

    markerService1 = new google.maps.Marker({
        position: positionService1,
        map: map,
        title: 'UBS',
        visible: false,
    });

    markerService2 = new google.maps.Marker({
        position: positionService2,
        map: map,
        title: 'Poste du CICG',
        visible: false,
    });

    markerService3 = new google.maps.Marker({
        position: positionService3,
        map: map,
        title: 'Poste de Montbrillant',
        visible: false,
    });
    markerService4 = new google.maps.Marker({
        position: positionService4,
        map: map,
        title: 'Pharmacie Populaire Nations',
        visible: false,
    });
    markerMagasin1 = new google.maps.Marker({
        position: positionMagasin1,
        map: map,
        title: 'Coop',
        visible: false,
    });
    markerMagasin2 = new google.maps.Marker({
        position: positionMagasin2,
        map: map,
        title: 'Migros',
        visible: false,
    });
    markerMagasin3 = new google.maps.Marker({
        position: positionMagasin3,
        map: map,
        title: 'Denner',
        visible: false,
    });
    markerMagasin4 = new google.maps.Marker({
        position: positionMagasin4,
        map: map,
        title: 'Balexert',
        visible: false,
    });
    markerRestaurant1 = new google.maps.Marker({
        position: positionRestaurant1,
        map: map,
        title: 'Thai Pucket',
        visible: false,
    });
    markerRestaurant2 = new google.maps.Marker({
        position: positionRestaurant2,
        map: map,
        title: 'Romana',
        //visible: false,
        icon: '../img/icon/romana.png',
    });
    markerRestaurant3 = new google.maps.Marker({
        position: positionRestaurant3,
        map: map,
        title: 'Pizzeria Ariana',
        visible: false,
    });
    markerRestaurant4 = new google.maps.Marker({
        position: positionRestaurant4,
        map: map,
        title: 'Brasserie Tivoli Les Nations',
        visible: false,
    });
    markerRestaurant5 = new google.maps.Marker({
        position: positionRestaurant5,
        map: map,
        title: 'Le Homard bleu',
        visible: false,
    });
    markerRestaurant6 = new google.maps.Marker({
        position: positionRestaurant6,
        map: map,
        title: 'Table des nations',
        visible: false,
    });
    markerRestaurant7 = new google.maps.Marker({
        position: positionRestaurant7,
        map: map,
        title: 'Sagano',
        visible: false,
    });
    markerRestaurant8 = new google.maps.Marker({
        position: positionRestaurant8,
        map: map,
        title: 'Colombe',
        visible: false,
    });
    markerLoisir1 = new google.maps.Marker({
        position: positionLoisir1,
        map: map,
        title: 'Piscine de Varembé',
        visible: false,
    });
    markerLoisir2 = new google.maps.Marker({
        position: positionLoisir2,
        map: map,
        title: 'Centre de yoga \n Colife Nations Yoga & Pilates',
        visible: false,
    });
    markerLoisir3 = new google.maps.Marker({
        position: positionLoisir3,
        map: map,
        title: 'Fitness Let\'s go',
        //visible: false,
        icon: '../img/icon/fitness.png',
    });
    markerLoisir4 = new google.maps.Marker({
        position: positionLoisir4,
        map: map,
        title: 'Parc de l\'Ariana',
        visible: false,
    });
    markerLoisir5 = new google.maps.Marker({
        position: positionLoisir5,
        map: map,
        title: 'Parc de Vermont',
        visible: false,
    });

    infoWindowUIT.open(map, markerUIT)
}

//zoom to show infowindow from medium marker
function focusMediumPointInteret(marker, infoWindow) {

    if (activeInfoWindows) {
        activeInfoWindows.close();
    }
    map.setZoom(17);
    map.setCenter(marker.getPosition());
    infoWindow.open(map, marker);
    activeInfoWindows = infoWindow;
    marker.setVisible(false);

}

//zoom to show infowindow from big marker
function focusMinPointInteret(marker, infoWindow) {

    if (activeInfoWindows) {
        activeInfoWindows.close();
    }
    map.setZoom(15);
    map.setCenter(marker.getPosition());
    infoWindow.open(map, marker);
    activeInfoWindows = infoWindow;
    marker.setVisible(false);

}

//zoom to show marker and infowindow when not present on map
function focusMaxPointInteretIcon(marker, infoWindow) {

    if (activeInfoWindows) {
        activeInfoWindows.close();
    }
    map.setZoom(19);
    map.setCenter(marker.getPosition());
    infoWindow.open(map, marker);
    activeInfoWindows = infoWindow;
    marker.setVisible(false);

}

//zoom to show infowindow from little marker
function focusMaxPointInteret(marker, infoWindow) {

    if (activeInfoWindows) {
        activeInfoWindows.close();
    }
    map.setZoom(19);
    map.setCenter(marker.getPosition());
    infoWindow.open(map, marker);
    activeInfoWindows = infoWindow;
    marker.setVisible(false);

}
//set uit infowindow
function setUIT(marker, infoWindow) {
    infoWindow.open(map, marker);
    marker.setVisible(true);
}


// ========================
