// In this module I have placed the events. 
var EventHandlers = (function () {

   
    function init() {
        $(".checkout-modal").hide();
        $(".checkout__details--button").click(onClickCheckoutConfirm);
       
    }

    function onClickCheckoutConfirm(e) { 
        $(".checkout__details").hide();
        $(".checkout-modal").show();
        
            alert('Tack för din beställing. Här låtsas vi att det pågår en redirekt till valde betaltjänst. Klicka på ok för att låtsas att allt har gått korrekt');
           
    }
     
   
    return {
        init
    }
})();

$(document).ready(function () {
    EventHandlers.init();
  
});