add2
var sortNumber = function (number){
console.log(number);
  number.sort(function (a,b){
    console.log(a +'：'+b);
    if(a === b){
      return 0;
    } else {
      return a < b ? -1 : 1;
    }
  });
};    
var number = [19,3,81,24,21];
sortNumber(number);
console.log(number);
