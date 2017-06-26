'use strict';

var ChooseValueSame = function (collectionA, objectB) {
  var arr = new Array();

  for (var i = 0; i < collectionA.length; i++){
      for(var j=0;j<objectB.value.length;j++){
        if(collectionA[i]===objectB.value[j]){
          arr.push(collectionA[i]);
        }
          }
      }
  return arr;
};
function collectSameElements(collectionA, objectB) {
  return ChooseValueSame(collectionA, objectB);
}
