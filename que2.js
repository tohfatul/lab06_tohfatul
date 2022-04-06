
const printNumbers = function (from, to) {

    let starting=1;	
    while(from<=to){
      setTimeout(function(x){
        console.log(x);
      },starting*1000,from);
        from++;
        starting++;
    }
  return;
};
printNumbers(3, 9);
