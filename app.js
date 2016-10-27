$(document).ready(function() {


    $.ajax({
        type:"GET",
        url: "https://myapi.profstream.com/api/dc2eb4/wines",
        success: function(wines) {
            HANDLE.renderTemplate({
                templateSource: "#wines-template",
                data: wines,
                where: "#wines",
                clearOriginal: true
            })
        }
    })
});