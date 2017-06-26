'use strict';


var BasicTotal = function (collection) {
  var arr = new Array();
  arr.push({name: collection[0], summary: 1});

  for (var i = 1; i < collection.length; i++){
      var flag =0;
      var student = new Object();//中间转换量
      for(var j=0;j<arr.length;j++){
        if(collection[i]===arr[j].name){//或者collection[i].charAt(0)===arr[j].key
          arr[j].summary++;
          flag=1;
        }
      }
      if(flag==0){
        //arr.push({key:collection[i],count:1})
        student.name=collection[i];
        student.summary=1;
        arr.push(student);
        //document.write(student.key+" "+student.count+"\n");
      }
    }
  for (var t = 0; t < arr.length; t++){
      document.write(arr[t].name+" "+arr[t].summary+"\n");
      }
  return arr;
};
function countSameElements(collection) {
  return BasicTotal(collection);

}


