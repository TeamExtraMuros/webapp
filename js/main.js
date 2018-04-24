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
    
    // ======== STEP 2 ========
    $(".flags a").each(function (index) {
        $(this).click(() => {
            var video = $(".player video").get(0);
            console.log($(this).attr("data-time"));
            video.currentTime = $(this).attr("data-time");
            video.play();
        });
    });
    
    
 
    if(!navigator.onLine){
        addErrorMsg(); 
    } 
    
    window.addEventListener('offline', function(event){
        addErrorMsg();
    });
    
    window.addEventListener('online', function(event){
        addMap();
    });
    
    
    
    // ========================
});

function addErrorMsg() {
        // get the parent container of the iframe in order to add another element if no connection has been established. 
        var container = $("#map-frame").parent();
        $("#map-frame").remove();
        var offline_msg = "Veuillez utiliser une connexion Internet afin d'afficher la carte. La carte permet d'afficher l'emplacement du Parking des Nations."
        $('<div id="offline-msg"><i class="fas fa-exclamation-triangle"></i><br/><br/><p>' + offline_msg + '</p></div>').appendTo(container);
}
    
function addMap() {
        // get the parent container of the iframe in order to add another element if no connection has been established. 
        var container = $("#offline-msg").parent();
        $("#offline-msg").remove();
    
        // display GoogleMaps iframe
        $('<iframe id="map-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2406.707632241522!2d6.137100769134995!3d46.221209502556746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64e6b26a148d%3A0x8aab5bf1feca5e49!2sParking+des+Nations%2C+1202+Gen%C3%A8ve!5e0!3m2!1sfr!2sch!4v1524040996776" width="100%" frameborder="0" style="border:0" allowfullscreen=""></iframe>').appendTo(container);
}
