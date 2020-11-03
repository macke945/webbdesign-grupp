// In this module I have placed the events. 
var EventHandlers = (function () {

   
    function init() {

      

        $(".checkout-modal").hide();
        $(".education").hide();
        $("#btn-hide-work").hide(); 
        $("#btn-hide-edu").hide();
        $(".checkout__details--button").click(onClickCheckoutConfirm);
        $("#btn-hide-work").click(onClickHideWorkButton);
        $("#btn-show-edu").click(onClickShowEducationButton);
        $("#btn-hide-edu").click(onClickHideEducationButton);
 
    }

      

    function onClickCheckoutConfirm() { 
        $(".checkout__details").hide();
        $(".checkout-modal").show();
         
    }

    function onClickHideWorkButton() { 
        $(".work").hide();
        $("#btn-hide-work").hide();
        $("#btn-show-work").show();
    }

    function onClickShowEducationButton() { 
        $(".education").show();
        $("#btn-show-edu").hide(); 
        $("#btn-hide-edu").show(); 
    }

    function onClickHideEducationButton() { 
        $(".education").hide();
        $("#btn-hide-edu").hide();
        $("#btn-show-edu").show();
    }

    return {
        init
    }
})();

$(document).ready(function () {
    EventHandlers.init();
  
});