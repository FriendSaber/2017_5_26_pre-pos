'use strict';

var CountTotal = function (collectionA, objectB) {
  var arr = new Array();
  /*arr.push({name:collectionA[0],summary:2});*/

  for (var i = 0; i < collectionA.length; i++){
      // var temp=new Object();
      for(var j=0;j<objectB.value.length;j++){
        if(collectionA[i].name===objectB.value[j]){
          //temp.summary=collectionA[i].summary-1;
          if(objectB.value[j]==="a"||objectB.value[j]==="d"){
            collectionA[i].summary=collectionA[i].summary-1;
          }
          if(objectB.value[j]==="e"){
            collectionA[i].summary=collectionA[i].summary-2;
          }
          if(objectB.value[j]==="f"){
            collectionA[i].summary=collectionA[i].summary-3;
          }
          //  document.write(collectionA[i].name+" "+collectionA[i].summary);
          break;
        }
        //else {
        //    temp.summary=collectionA[i].summary;
        //  }
      }
      arr.push({name:collectionA[i].name,summary:collectionA[i].summary});
      }

  //for(var i=0;i<arr.length;i++){
  //  document.write("\n"+arr[i].name+" "+arr[i].summary+"\n");
  //}

  return arr;
};
function createUpdatedCollection(collectionA, objectB) {
  return CountTotal(collectionA, objectB);
}
