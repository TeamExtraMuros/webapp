if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('../sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

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
        // the message that will be displayed in the box in case offline mode is activated.
        var msgToDisplay;
        if(document.URL.indexOf("html/etape2.html") != -1){
            msgToDisplay = "Veuillez utiliser une connexion Internet afin d'afficher la carte. La carte permet d'afficher l'emplacement du Parking des Nations.";
        } else if(document.URL.indexOf("html/etape3.html") != -1){
            msgToDisplay = "Veuillez utiliser une connexion Internet afin d'afficher la carte. La carte permet d'afficher l'emplacement du bâtiment de l'UIT.";
        }
        
        addErrorMsg(msgToDisplay);
    } 
    
    window.addEventListener('offline', function(event){
        
        // the message that will be displayed in the box in case offline mode is activated.
        var msgToDisplay;
        if(document.URL.indexOf("html/etape2.html") != -1){
            msgToDisplay = "Veuillez utiliser une connexion Internet afin d'afficher la carte. La carte permet d'afficher l'emplacement du Parking des Nations.";
        } else if(document.URL.indexOf("html/etape3.html") != -1){
            msgToDisplay = "Veuillez utiliser une connexion Internet afin d'afficher la carte. La carte permet d'afficher l'emplacement du bâtiment de l'UIT.";
        }
        
        addErrorMsg(msgToDisplay);
    });
    
    window.addEventListener('online', function(event){
        
        // the frame that will be displayed in the box in case online mode is activated.
        var iframeToDisplay;
        if(document.URL.indexOf("html/etape2.html") != -1){
            iframeToDisplay = $('<iframe id="map-frame" class="offline_display" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2406.707632241522!2d6.137100769134995!3d46.221209502556746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64e6b26a148d%3A0x8aab5bf1feca5e49!2sParking+des+Nations%2C+1202+Gen%C3%A8ve!5e0!3m2!1sfr!2sch!4v1524040996776" width="100%" frameborder="0" style="border:0" allowfullscreen=""></iframe>');
            
        } else if(document.URL.indexOf("html/etape3.html") != -1){
            iframeToDisplay = $('<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1226.7186208603707!2d6.136702027268748!3d46.219878443866406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7d37e7fb458fe110!2sUnion+Internationale+des+T%C3%A9l%C3%A9communications+(UIT)!5e0!3m2!1sfr!2sch!4v1524473821354" class="map-etape3 offline_display" frameborder="0" allowfullscreen></iframe>');
        }
        
        addMap(iframeToDisplay);
    });
    
    
    
    // ========================
});

function addErrorMsg(msg) {
        // get the parent container of the iframe in order to add another element if no connection has been established. 
        var container = $(".offline_display").parent();
        $(".offline_display").remove();
        $('<div class="offline-msg"><i class="fas fa-exclamation-triangle"></i><br/><br/><p>' + msg + '</p></div>').appendTo(container);
}
    
function addMap(iframe) {
        // get the parent container of the iframe in order to add another element if no connection has been established. 
        var container = $(".offline-msg").parent();
        $(".offline-msg").remove();
    
        // display GoogleMaps iframe
        iframe.appendTo(container);
}
