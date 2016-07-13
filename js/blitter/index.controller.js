"use strict";
console.log("Controller online");
(function(){
  angular
  .module("blitter_resources")
  .controller("BlitterIndexController", [
    "BlitterFactory",
    "$state",
    BlitterIndexControllerFunction
  ]);

  function BlitterIndexControllerFunction(BlitterFactory, $state){
    var vm = this;
    console.log("The controller works");
    this.bleets = BlitterFactory.query();
    this.bleet = new BlitterFactory();
    this.create = function(){
      this.bleet.$save().then(function(){
        // $state.go("blitterIndex")
        vm.bleets.push(vm.bleet)
      })
    }
  }
})();
