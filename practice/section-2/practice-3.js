'use strict';

var BesicTotal = function (collection) {
  var arr = new Array();
  arr.push({name: collection[0], summary: 1});

  for (var i = 1; i < collection.length; i++){
      var flag =0;
      var student = new Object();//中间转换量
      for(var j=0;j<arr.length;j++){
        if(collection[i].charAt(0)===arr[j].name){
          //if(collection[i].toString().charAt(1)==='-'){
          // arr[j].count=5;//collection[i].charAt(2);charCodeAt(2)-48
          // }
          arr[j].summary++;
          flag=1;
        }
      }
      if(flag==0){
        //arr.push({key:collection[i],count:1})
        student.name=collection[i].charAt(0);
        if(collection[i].charAt(0)==='h')student.summary=3;
        else if(collection[i].charAt(0)==='t')student.summary=11;
        else if(collection[i].charAt(0)==='c')student.summary=8;
        else if(collection[i].charAt(0)==='d')student.summary=5;
              else  student.summary=1;
              arr.push(student);
          }
      }

  return arr;
};
function countSameElements(collection) {
  return BesicTotal(collection);
}
