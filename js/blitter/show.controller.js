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
    var vm = this;
    console.log("show controller works");
    this.bleet = BlitterFactory.get({id: $stateParams.id});
    vm.update = function(bleet){
      vm.bleet.$save();
    }
  }
})();
