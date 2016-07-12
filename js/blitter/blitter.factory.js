"use strict";

(function(){
  angular
    .module("blitter_resources")
    .factory("BlitterFactory", [
      "$resource",
      BlitterFactoryFunction
    ]);

    function BlitterFactoryFunction($resource){
      return $resource("http://localhost:3000/bleets/:id");
    }
})();
