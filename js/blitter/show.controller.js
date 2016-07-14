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

  function BlitterShowControllerFunction(BlitterFactory, $stateParams, $state){
    var vm = this;
    console.log("show controller works");
    this.bleet = BlitterFactory.get({id: $stateParams.id});
    vm.update = function(){
      vm.bleet.$update({id: $stateParams.id}).then(function(update){
        $state.go("blitterIndex", ({id: update.id}))
      })
    }
  }
})();
