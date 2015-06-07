try {
    jQuery(document);
} catch (e) {
    alert("Error, jQuery JS not loaded!\n Original error was:" + e);
}

$(document).ready(function(){
    function generate_qr(txt) {
        console.log("render QR:" + JSON.stringify(txt));
        qr.canvas({
            canvas: $("#qr-code")[0],
            value: txt
        });
    }
    generate_qr($("#input").val());
    $("#input").keyup(function(){
        console.log("input changed.");
        generate_qr($("#input").val());
    });
});