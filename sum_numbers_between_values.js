//Given two integers a and b, which can be positive or negative,
//find the sum of all the integers between including them too and return it.
 //If the two numbers are equal return a or b.

//Note: a and b are not ordered!


<script>



function getSum( a,b )
{
  var count = 0;                  //if both the same value //
  if (a===b){
    return a;
  }
  else if(a < b) {                 // if a is less than b //
    for(var a; a < b; a++ ){
      count+= a;
    }
     return count + b;
  }

  else {                         // if b is less than a //
    for(var b; a > b; b++ ){
      count+= b;
    }
     return count + a;

  }

}

</script>
