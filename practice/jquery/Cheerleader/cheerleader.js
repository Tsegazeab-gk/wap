$(function () {

    $(document).keypress(cheer);


});    function cheer(e) {
    $("<li>")
        .text(String.fromCharCode(e.which).toUpperCase()+"!")
        .appendTo($("#cheers"));

    setTimeout(removeCheers, 2000);
};

function removeCheers(){
    $("#cheers li").remove().first();
}