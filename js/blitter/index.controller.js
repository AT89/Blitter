"use strict";
console.log("Controller online");
(function(){
  angular
  .module("blitter_resources")
  .controller("BlitterIndexController", [
    "BlitterFactory",
    BlitterIndexControllerFunction
  ]);

  function BlitterIndexControllerFunction(BlitterFactory){
    console.log("The controller works");
    this.bleets = BlitterFactory.query();
  }

})();
