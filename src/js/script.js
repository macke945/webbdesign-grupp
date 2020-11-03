// In this module I have placed the events. 
var EventHandlers = (function () {

   
    function init() {
        $(".checkout-modal").hide();
        $(".checkout__details--button").click(onClickCheckoutConfirm);
         
          
       
    }

    function onClickCheckoutConfirm(e) { 
        $(".checkout__details").hide();
        $(".checkout-modal").show();
          
    }
     
   
    return {
        init
    }
})();

$(document).ready(function () {
    EventHandlers.init();
  
});