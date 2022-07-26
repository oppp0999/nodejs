/*
function a(){
  console.log('A');
}
*/
var a = function(){
  console.log('A');
}
// a();

console.log('1');
function slowfunc(callback){
  callback();
}

slowfunc(a);
console.log('2');
