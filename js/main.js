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

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function () {
//         navigator.serviceWorker.register('../sw.js').then(function (registration) {
//             // Registration was successful
//             console.log('ServiceWorker registration successful with scope: ', registration.scope);
//         }, function (err) {
//             // registration failed :(
//             console.log('ServiceWorker registration failed: ', err);
//         });
//     });
// }

$(function () {

    // ======== SWIPE =========
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;
    var yDown = null;

    // ========================

    // ======== STEP 2 LOGIC ========

    $(".flags a").each(function (index) {
        $(this).click(() => {
            var video = $(".player video").get(0);
            console.log($(this).attr("data-time"));
            video.currentTime = $(this).attr("data-time");
            video.play();
        });
    });
    // ========================



    // ======== STEP 4 LOGIC ========
    $(window).on("popstate", function (e) {
        var idPage = location.hash;
        idPage = idPage.substring(1);
        //window.location = "#" + idPage;
        switchPage(idPage);

        $('#map').hide();
    });
    $(window).trigger('popstate');

    // SOUS-MENU LOGIC
    var infos_resto = info_resto.children;
    $(infos_resto).hide();
    $(liste_resto.children).on("click", function (e) {
        var nom = "#" + this.getAttribute('id') + "-info";
        $(infos_resto).hide();
        $(nom).show();
        $('#map').show();
    });

    var infos_service = info_service.children;
    $(infos_service).hide();
    $(liste_service.children).on("click", function (e) {
        var nom = "#" + this.getAttribute('id') + "-info";
        $(infos_service).hide();
        $(nom).show();
        $('#map').show();
    });

    var infos_magasin = info_magasin.children;
    $(infos_magasin).hide();
    $(liste_magasin.children).on("click", function (e) {
        var nom = "#" + this.getAttribute('id') + "-info";
        $(infos_magasin).hide();
        $(nom).show();
        $('#map').show();
    });

    var infos_loisir = info_loisir.children;
    $(infos_loisir).hide();
    $(liste_loisir.children).on("click", function (e) {
        var nom = "#" + this.getAttribute('id') + "-info";
        $(infos_loisir).hide();
        $(nom).show();
        $('#map').show();
    });

    $('#nom-ubs').on('click', () => focusMediumPointInteret(markerService1, infowindowService1)),
        $('#nom-poste1').on('click', () => focusMaxPointInteret(markerService2, infowindowService2)),
        $('#nom-poste2').on('click', () => focusMediumPointInteret(markerService3, infowindowService3)),
        $('#nom-pharmacie').on('click', () => focusMaxPointInteret(markerService4, infowindowService4)),
        $('#nom-coop').on('click', () => focusMediumPointInteret(markerMagasin1, infowindowMagasin1)),
        $('#nom-migros').on('click', () => focusMediumPointInteret(markerMagasin2, infowindowMagasin2)),
        $('#nom-denner').on('click', () => focusMaxPointInteret(markerMagasin3, infowindowMagasin3)),
        $('#nom-balexert').on('click', () => focusMediumPointInteret(markerMagasin4, infowindowMagasin4)),
        $('#nom-thai').on('click', () => focusMaxPointInteret(markerRestaurant1, infowindowRestaurant1)),
        $('#nom-romana').on('click', () => focusMaxPointInteretIcon(markerRestaurant2, infowindowRestaurant2)),
        $('#nom-ariana').on('click', () => focusMaxPointInteret(markerRestaurant3, infowindowRestaurant3)),
        $('#nom-tivoli').on('click', () => focusMaxPointInteret(markerRestaurant4, infowindowRestaurant4)),
        $('#nom-homard').on('click', () => focusMaxPointInteret(markerRestaurant5, infowindowRestaurant5)),
        $('#nom-nation').on('click', () => focusMaxPointInteret(markerRestaurant6, infowindowRestaurant6)),
        $('#nom-sagano').on('click', () => focusMaxPointInteret(markerRestaurant7, infowindowRestaurant7)),
        $('#nom-colombe').on('click', () => focusMaxPointInteret(markerRestaurant8, infowindowRestaurant8)),
        $('#nom-varembe').on('click', () => focusMediumPointInteret(markerLoisir1, infowindowLoisir1)),
        $('#nom-yoga').on('click', () => focusMaxPointInteret(markerLoisir2, infowindowLoisir2)),
        $('#nom-fitness').on('click', () => focusMaxPointInteretIcon(markerLoisir3, infowindowLoisir3)),
        $('#nom-pariana').on('click', () => focusMinPointInteret(markerLoisir4, infowindowLoisir4)),
        $('#nom-vermont').on('click', () => focusMinPointInteret(markerLoisir5, infowindowLoisir5))

    // ========================



    // MAP OR MESSAGE DISPLAY ACCORDING TO ONLINE / OFFLINE mode
    if (!navigator.onLine) {
        // the message that will be displayed in the box in case offline mode is activated.
        var msgToDisplay;
        if (document.URL.indexOf("html/etape2.html") != -1) {
            msgToDisplay = "Veuillez utiliser une connexion Internet afin d'afficher la carte. La carte permet d'afficher l'emplacement du Parking des Nations.";
        } else if (document.URL.indexOf("html/etape3.html") != -1) {
            msgToDisplay = "Veuillez utiliser une connexion Internet afin d'afficher la carte. La carte permet d'afficher l'emplacement du bâtiment de l'UIT.";
        }

        addErrorMsg(msgToDisplay);
    }

    window.addEventListener('offline', function (event) {

        // the message that will be displayed in the box in case offline mode is activated.
        var msgToDisplay;
        if (document.URL.indexOf("html/etape2.html") != -1) {
            msgToDisplay = "Veuillez utiliser une connexion Internet afin d'afficher la carte. La carte permet d'afficher l'emplacement du Parking des Nations.";
        } else if (document.URL.indexOf("html/etape3.html") != -1) {
            msgToDisplay = "Veuillez utiliser une connexion Internet afin d'afficher la carte. La carte permet d'afficher l'emplacement du bâtiment de l'UIT.";
        }

        addErrorMsg(msgToDisplay);
    });

    window.addEventListener('online', function (event) {

        // the frame that will be displayed in the box in case online mode is activated.
        var iframeToDisplay;
        if (document.URL.indexOf("html/etape2.html") != -1) {
            iframeToDisplay = $('<iframe id="map-frame" class="offline_display" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2406.707632241522!2d6.137100769134995!3d46.221209502556746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64e6b26a148d%3A0x8aab5bf1feca5e49!2sParking+des+Nations%2C+1202+Gen%C3%A8ve!5e0!3m2!1sfr!2sch!4v1524040996776" width="100%" frameborder="0" style="border:0" allowfullscreen=""></iframe>');

        } else if (document.URL.indexOf("html/etape3.html") != -1) {
            iframeToDisplay = $('<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1226.7186208603707!2d6.136702027268748!3d46.219878443866406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7d37e7fb458fe110!2sUnion+Internationale+des+T%C3%A9l%C3%A9communications+(UIT)!5e0!3m2!1sfr!2sch!4v1524473821354" class="map-etape3 offline_display" frameborder="0" allowfullscreen></iframe>');
        }

        addMap(iframeToDisplay);
    });


    // ========================
});

// ======== SWIPE =========

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
        console.log(xDiff);
        if (xDiff > 40) {
            nextPage('next');
        } else if (xDiff < -40) {
            nextPage('prev');
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};

function nextPage(action) {

    // get step number from URL
    var currentStep = parseInt(window.location.pathname.split('/').pop().substr(5, 1));
    switch (action) {
        case "next":
            if (currentStep != 5) {
                window.location = "etape" + (currentStep + 1) + ".html";
            }
            break;
        case "prev":
            if (currentStep != 1) {
                window.location = "etape" + (currentStep - 1) + ".html";
            }
            break;
    }

}

// ========================

// ======== GENERIC FUNCTIONS FOR ALL MAPS IN ALL STEPS =========

function addErrorMsg(msg) {
    // get the parent container of the iframe in order to add another element if no connection has been established.
    var container = $(".offline_display").parent();
    $(".offline_display").remove();
    $('<div class="offline-msg"><i class="fas fa-exclamation-triangle"></i><br/><br/><p>' + msg + '</p></div>').appendTo(container);
}

function addMap(iframe) {

    // get the parent container of the message displayed in order to display the iframe again if the connection is re-established.
    var container = $(".offline-msg").parent();
    $(".offline-msg").remove();

    // display GoogleMaps iframe
    iframe.appendTo(container);
}

// ========================



// ======== STEP 4 FUNCTIONS ========

// Fonction pour charger les points d interets
function switchPage(pageId) {
    $(".page").hide();
    $("#page_" + pageId).show();
}

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
    console.log(infoWindow);
    console.log(marker);
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
    console.log(infoWindow);
    console.log(marker);
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
    console.log(infoWindow);
    console.log(marker);
    infoWindow.open(map, marker);
    activeInfoWindows = infoWindow;
    //marker.setVisible(false);
}

//zoom to show infowindow from little marker
function focusMaxPointInteret(marker, infoWindow) {
    if (activeInfoWindows) {
        activeInfoWindows.close();
    }
    map.setZoom(19);
    map.setCenter(marker.getPosition());
    console.log(infoWindow);
    console.log(marker);
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
