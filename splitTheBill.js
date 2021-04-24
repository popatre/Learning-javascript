function splitTheBill(x) {
    var total = 0;
     for (var value in x) {
       total += x[value];
   }
 

   var objectArray = Object.keys(x);    // converts object to array
 
   var average = total/objectArray.length;   // total sum / array length
   
   var result = {};
 
   for(var value in x){
       result[value] =   Math.round( (x[value] - average)*100 )/100 ;    // decimal places
   }
 
       return result;
 }

console.log(splitTheBill({A: 20, B: 15, C: 10}));

