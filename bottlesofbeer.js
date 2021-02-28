<html>

<script>

var beerCount = 99;


function beer(){


    while(beerCount> -1) {


   if(beerCount <= 99 && beerCount > 0){
     console.log (beerCount + " bottles of beer on the wall, " + beerCount + " bottles of beer. Take one down, throw it around " + (beerCount-1) + " bottles of beer on the wall");
   } else {
      console.log("no more bottles of beer on the wall, no more bottles of beer. We took one down, threw it around, no more bottles of beer on the wall");
   }

   beerCount--;

    }


}


</script>

</html>
