<script>

function fibonacciGenerator (n) {


    var seq = [0, 1,];

    if(n === 1){
      console.log(seq[0]);
    } else if (n === 2){
      console.log(seq = [0, 1]);
    } else {

      while(seq.length < n){
     var lastNum = (seq.length-1);
     var secondLast = (seq.length-2);
     var add = seq[lastNum] + seq[secondLast];
     seq.push(add);
     }
     console.log(seq);
   }
 }



fibonacciGenerator(7)
</script>
