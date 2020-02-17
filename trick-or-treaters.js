
// Javascript written by Dan Stober 2020-02-16

// These functions moved to danStoberArrayFunctions...

//     function pivotArray ( array ) 
//	   function testArrayConformity ( array ) 
//	   function getDimensions ( array ) 
//	   function deArray ( array ) 

       // At the moment, this is backward from the way I want to display it. The major groups are years, and 
	   //   the minor groups are the time periods. I want it to be the other way around. I a function to pivot it. 
       var trick_before_pivot = [   [ 0, 16, 46, 46, 31, 28,  6]
			, [ 0, 32, 32, 57, 22, 25, 13]
			, [17, 43, 64, 33, 21, 20, 21]
			, [16, 19, 33, 29, 46,  5,  5]   ];

       // Major labels are the labels for the groups
       var majorLabels = ['5:30-6:00','6:00-6:30','6:30-7:00','7:00-7:30','7:30-8:00','8:00-8:30','8:30-9:00'];
       // Minor labels are the labels for the colors
       var minorLabels = ['2016','2017','2018','2019'];

       // This should match the number of items in the minor labels
       var barColors = [ '#9A3E25','#978F80','#E6842A','#E3BA22'];

	   var svgWidth = 900, svgHeight=600, majorPadding = 25, minorPadding= 5;
       var margin = { top:150, right:100, bottom:50, left:20};

       var innerWidth  = svgWidth  - margin.left - margin.right;
       var innerHeight = svgHeight - margin.top  - margin.bottom;


       function getBarWidth ( dimensions, totalWidth, majorPadding, minorPadding ) 
	   {
	   /// I should change this to use bandScale...
	       var barCount    = dimensions[0] * dimensions[1]
		     , seriesCount = dimensions[0];
	   
	      // This calculation leaves room for a minorPadding at the beginning, a major padding between the Series, and a minor passing after each bar
           return  ( totalWidth - (( barCount + 1 ) * minorPadding ) - ( ( seriesCount -1 ) * ( majorPadding - minorPadding ) ) ) / barCount;
       }	   

       function getStartingPoints ( array, majorPadding, minorPadding, barWidth )
	   {
           var retVal  = [];
           var pt = minorPadding;
		   for ( var i=0; i<array.length; i++ ) {
		       for ( var j=0; j<array[i].length; j++ ) {
         	       retVal.push( pt );
				   pt += ( barWidth + minorPadding );
               }				   
               pt += ( majorPadding - minorPadding );
	       }
		   return retVal;
	   }

     const render = dataArray => {

		var svg = d3.select( 'svg' )
	       .attr ( "width", svgWidth )
		   .attr ( "height", svgHeight )
		   ;

		if ( !testArrayConformity ( dataArray ) )
		{
		    alert ( 'Data are not conformed. Some rows have different numbers of elements'); 
        }
  
      var dimensions = getDimensions (dataArray);        

      // All bars will be the same width, but the width is dependent upon the number of bars and the spacing constraints
      var barWidth = getBarWidth ( dimensions, innerWidth, majorPadding, minorPadding );

      // This determies the X position of each individual bar
      var startingPoints = getStartingPoints ( dataArray, majorPadding, minorPadding, barWidth );

       // deArray converts a two dimensional array of values into an array with all values
      dataset = deArray ( dataArray );

	  var maxvalue = d3.max ( dataset );
 
      var yScale = d3.scaleLinear()
	                .domain ( [ maxvalue +10, 0] )
	                .range  ( [ 0, innerHeight ] );

      var xScale = d3.scaleBand().range ([0, innerWidth])
                                 .domain ( majorLabels )
	                             .padding(0.4)
								 ;

      var yAxis = d3.axisLeft ( yScale )
	                   .tickSize (-innerWidth)
					   ;

      var xAxis = d3.axisBottom ( xScale );

      var g = svg.append ('g')
	         .attr( "class", "innerChart")
 	         .attr ( "transform", `translate(${margin.left},${margin.top})`)
			 ;

       yAxis(g.append('g')
	      .attr ( "class", "y-axis")
		  );

       xAxis(g.append('g')
	       .attr ( "class", "x-axis")
		   .attr ( "transform", `translate (0, ${innerHeight} )` )
		   );

// Troubleshooting positioning, these will place Y-position at Y-positions  
/* 
      svg.append ( 'text').attr("y",100).attr("class", 'Y').text ("100");
      svg.append ( 'text').attr("y",200).attr("class", 'Y').text ("200");
      svg.append ( 'text').attr("y",300).attr("class", 'Y').text ("300");
      svg.append ( 'text').attr("y",400).attr("class", 'Y').text ("400");
      svg.append ( 'text').attr("y",500).attr("class", 'Y').text ("500");
      svg.append ( 'text').attr("y",600).attr("class", 'Y').text ("600");
*/

      svg.append ( 'text')
	            .attr("y", 100 )
	            .attr("x", margin.left )
	            .attr("class", 'title-band')
	            .text ("Trick or Treaters by Half Hour");
	  
      var bar = g.selectAll ( "rect" )
			.data ( dataset )
			.enter ( )
			.append( "rect" )

			.attr ( "y", function(d) { return yScale(d); } )
			.attr ( "height", function(d) { return innerHeight - yScale(d); } )

    		.attr ( "width", barWidth  ) 

 			.attr ( "transform", function (d,i) {
			    var translate = [ startingPoints[i], 0];
				return "translate(" + translate +")";
			    }  )
		    .attr ( "fill", function (d, i ) { return barColors [i%dimensions[1] ]; } )	

            // Information placed into the DOM for troubleshooting/debugging. No impact on the SVG
            .attr ( "year", function(d,i) { return minorLabels[  (i%dimensions[1] ) ] } )
            .attr ( "time", function(d,i) { return majorLabels[   Math.floor (i/dimensions[1] ) ] } )
            .attr ( "kids", function(d,i) { return dataset[i] } )
			;
			
        } // end of render
		
