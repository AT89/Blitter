"use strict";

(function(){
  angular
  .module("blitter_resources")
  .controller("BlitterShowController", [
    "BlitterFactory",
    "$stateParams",
    "$state",
    BlitterShowControllerFunction
  ]);

  function BlitterShowControllerFunction(BlitterFactory, $stateParams){
    console.log("show controller works");
    this.bleets = BlitterFactory.get({id: $stateParams.id});
  }
})();
