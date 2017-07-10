
$(document).ready(function() {
    $('.MYCLASS').jqzoom();
    var options = {
        zoomType: 'innerzoom',
        lens: true,
        preloadImages: true,
        alwaysOn: false,
        zoomWidth: 300,
        zoomHeight: 250,
        xOffset: 90,
        yOffset: 30,
        position: 'left'
                //...MORE OPTIONS
    };

    $('.MYCLASS').jqzoom(options);
});
