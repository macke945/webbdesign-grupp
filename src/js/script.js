// In this module I have placed the events. 
var EventHandlers = (function () {

   
    function init() {
        $(".checkout-modal").hide();
        $("form").submit(onSubmitOrderForm);
         
          
       
    }

    function onClickCheckoutConfirm(e) { 
        $(".checkout__details").hide();
        $(".checkout-modal").show();
         console.log('test1',e);
    }
     
    function onSubmitOrderForm() { 
        $(".checkout-modal").show();
         console.log('test2');
    }
    return {
        init
    }
})();

$(document).ready(function () {
    EventHandlers.init();
  
});