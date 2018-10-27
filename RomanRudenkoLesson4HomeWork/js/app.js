/*

При клике по кнопке активная карточка должна скрыться, а та чью кнопку кликнули отобразиться

*/

$("#oneBtn").click(function() {
    $("#twoCard").hide();
    $("#threeCard").hide();
    $("#oneCard").slideToggle(240, "linear");

});

$("#twoBtn").click(function() {
    $("#oneCard").hide();
    $("#threeCard").hide();
    $("#twoCard").slideToggle();
});

$("#threeBtn").click(function() {
    $("#oneCard").hide();
    $("#twoCard").hide();
    $("#threeCard").slideToggle(240, "linear");
});