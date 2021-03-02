<script>

function fibonacciGenerator (n) {

    
    var seq = [0, 1,];

    if(n === 1){
      seq=[0];
    } else if (n === 2){
      seq=[0, 1];
    } else {
      
      for(var n; seq.length < n;) {
     var lastNum = (seq.length-1);
     var secondLast = (seq.length-2);
     var add = seq[lastNum] + seq[secondLast];
     seq.push(add);
     }
     

    }
    return(seq);
    
    
}
fibonacciGenerator(3)
</script>
