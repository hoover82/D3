

// Functions written by Dan Stober, 2020-02-16



	   function getDimensions ( array ) {
            outerSize = array.length;
			innerSize = array[0].length;
			return [outerSize,innerSize];
	   }
	
	   function deArray ( array ) {
	       var retVal = [];

		   for ( var i=0; i<array.length; i++ ) {
		       for ( var j=0; j<array[i].length; j++ ) {
         	       retVal.push( array[i][j] );
               }				   
           }
	       return retVal;
	   
	   }


       // pivotArray accepts an array of dimension x × y and returns pivoted array wth dimensions y × x
	   
       function pivotArray ( array ) {
	       var retVal = []
		     , inner  = []
	         , d      = getDimensions ( array )
             , items  = deArray ( array );

 		   for ( var i=0; i < d[1]; i++ ) {
		   
		       inner = [];
 		       for ( var j=0; j < d[0]; j++ ) {
		          inner.push (  items[i+ (j*d[1]) ] );
                 }    
              retVal.push ( inner );
		   }

         return retVal;
	   }



	   function testArrayConformity ( array ) {
       // Returns Boolean: True if all first-level elements contain the same number of elements

           var len    = -1
		     , retVal = true; 
           
		   for ( var i=0; i<array.length; i++ ) {
               if ( i==0 ) {
                   len = array[0].length;
			   }
              if ( array[i].length != len  ) {
                   retVal = false;
			   }		   
		   }

           return retVal;
		
       }
