'use strict';

var ChooseSame = function (collectionA, collectionB) {
  var arr = new Array();

  for (var i = 0; i < collectionA.length; i++){
      for(var j=0;j<collectionB.length;j++){
        if(collectionA[i]===collectionB[j]){
          arr.push(collectionA[i]);
        }
          }
      }
  return arr;
};
function collectSameElements(collectionA, collectionB) {
  return ChooseSame(collectionA, collectionB);
}
