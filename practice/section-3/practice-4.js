'use strict';

var CountTotal = function (collectionA) {
  var str = new Array();
  str.push({name: collectionA[0], summary: 1});

  for (var i = 1; i < collectionA.length; i++){
      var flag =0;
      var student = new Object();//中间转换量
      for(var j=0;j<str.length;j++){
        if(collectionA[i]===str[j].name){//或者collection[i].charAt(0)===arr[j].key
          str[j].summary++;
          flag=1;
        }
      }
      if(flag==0){
        student.name=collectionA[i].charAt(0);
        if(collectionA[i].charAt(0)==='d')
          student.summary=5;
        else
          student.summary=1;
        str.push(student);
      }
    }
  //for(var i=0;i<str.length;i++){
  //    document.write("\n"+str[i].name+" "+str[i].summary+"\n");
  //  }
  return str;
};
var CountNTotal = function (collectionA, objectB) {
  var arr = new Array();

  var str = CountTotal(collectionA);

  for (var i = 0; i < str.length; i++){

      for(var j=0;j<objectB.value.length;j++){
        if(str[i].name===objectB.value[j]){

          if(objectB.value[j]==="a"||objectB.value[j]==="d"){
            str[i].summary=str[i].summary-1;
          }
          if(objectB.value[j]==="e"){
            str[i].summary=str[i].summary-2;
          }
          if(objectB.value[j]==="f"){
            str[i].summary=str[i].summary-3;
          }
          //  document.write(collectionA[i].name+" "+collectionA[i].summary);
          break;
              }

          }
          arr.push({name:str[i].name,summary:str[i].summary});
      }

  return arr;
};
function createUpdatedCollection(collectionA, objectB) {
  return CountNTotal(collectionA, objectB);
}
