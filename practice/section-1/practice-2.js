'use strict';

var ChooseOfSame = function (collectionA, collectionB) {
  var arr = new Array();

  for (var i = 0; i < collectionA.length; i++){
      for(var j=0;j<collectionB[0].length;j++){
        if(collectionA[i]===collectionB[0][j]){
          arr.push(collectionA[i]);
        }
          }
      }
  return arr;
};
function collectSameElements(collectionA, collectionB) {
  return ChooseOfSame(collectionA, collectionB);
}
