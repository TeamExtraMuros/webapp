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
  menuHandler();
    $(".flags a").each(function (index) {
        $(this).click(() => {
            var video = $(".player video").get(0);
            console.log($(this).attr("data-time"));
            video.currentTime = $(this).attr("data-time");
            video.play();
        });
    });

});

// Fonction pour charger les points d interets
function switchPage(pageId) {
    $(".page").hide();
    $("#page_" + pageId).show();
}

function menuHandler() {
  $('#restaurant').click(() => {
    var idPage = 'restaurant';
  });
    $(window).on("popstate", function(e) {
        var idPage = location.hash;
        idPage = idPage.substring(1);
            window.location = "#" + idPage;
        switchPage(idPage);
    });
    $(window).trigger('popstate');
}
