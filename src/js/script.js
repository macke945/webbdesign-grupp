// In this module I have placed the events. 
var EventHandlers = (function () {

   
    function init() {
        // we can take away this
        $(".checkout-modal").hide();
    
        $("form").submit(function(e) {
            alert('Tack för din beställing. Här låtsas vi att det pågår en redirekt till valde betaltjänst. Klicka på ok för att låtsas att allt har gått korrekt');
            window.location.href ="./thanks.html"
            return false;
        });
        
       
    }
 
     
   
    return {
        init
    }
})();

$(document).ready(function () {
    EventHandlers.init();
  
});