'use strict';

function collectSameElements(collectionA, objectB) {
  var arr= new  Array();

  for(var i=0;i<collectionA.length;i++){
    for(var j=0;j<objectB.value.length;j++){
      if(collectionA[i].name[0]===objectB.value[j]){
        arr.push(collectionA[i].name[0]);
      }
    }
  }
  return arr;
}
