"use strict";

(function(){
  angular
  .module("blitter", [
    "ui.router",
    "blitter_resources"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("blitterIndex", {
      url: "/bleets",
      templateUrl: "js/blitter/index.html",
      controller: "BlitterIndexController",
      controllerAs: "BlitterIndexViewModel"
    })
    .state("blitterShow", {
      url: "/bleets/:id",
      templateUrl: "/js/blitter/show.html",
      controller: "BlitterShowController",
      controllerAs: "BlitterShowViewModel"
    });
  }
})();
