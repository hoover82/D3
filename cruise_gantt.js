

const MILLISECONDS_IN_ONE_DAY = 1000 * 24 * 60 * 60;



//function render () 
//{






    sailingSchedule = [ 
	              {"ship":"Adventure","saildate":"2020-05-02","embarkationPort":"San Juan","nights":"7"  } 
	            , {"ship":"Explorer","saildate":"2020-05-03","embarkationPort":"Sydney","nights":"7"     } 
	            , {"ship":"Voyager","saildate":"2020-05-09","embarkationPort":"Whittier","nights":"7"   } 
	            , {"ship":"Adventure","saildate":"2020-05-09","embarkationPort":"San Juan","nights":"7"  } 
	            , {"ship":"Voyager","saildate":"2020-05-02","embarkationPort":"Vancouver","nights":"7"   } 
	            , {"ship":"Voyager","saildate":"2020-05-16","embarkationPort":"Vancouver","nights":"7"   } 
	            , {"ship":"Voyager","saildate":"2020-05-23","embarkationPort":"Whittier","nights":"7"   } 
	            , {"ship":"Adventure","saildate":"2020-04-25","embarkationPort":"San Juan","nights":"7"  } 
				]

    sailingSchedule = [ 
                   {"ship":"Adventure","saildate":"2021-01-04","embarkationPort":"Galveston","nights":"4"  } 
                ,  {"ship":"Adventure","saildate":"2021-01-08","embarkationPort":"Galveston","nights":"5"  } 
                ,  {"ship":"Adventure","saildate":"2021-01-13","embarkationPort":"Galveston","nights":"5"  } 
                ,  {"ship":"Adventure","saildate":"2021-01-18","embarkationPort":"Galveston","nights":"4"  } 
                ,  {"ship":"Adventure","saildate":"2021-01-22","embarkationPort":"Galveston","nights":"5"  } 
                ,  {"ship":"Adventure","saildate":"2021-01-27","embarkationPort":"Galveston","nights":"5"  } 
                ,  {"ship":"Allure","saildate":"2021-01-03","embarkationPort":"Miami","nights":"7"  } 
                ,  {"ship":"Allure","saildate":"2021-01-10","embarkationPort":"Miami","nights":"7"  } 
                ,  {"ship":"Allure","saildate":"2021-01-17","embarkationPort":"Miami","nights":"7"  } 
                ,  {"ship":"Allure","saildate":"2021-01-24","embarkationPort":"Miami","nights":"7"  } 
                ,  {"ship":"Allure","saildate":"2021-01-31","embarkationPort":"Miami","nights":"7"  } 
                ,  {"ship":"Anthem","saildate":"1900-01-00","embarkationPort":"","nights":""  } 
                ,  {"ship":"Brilliance","saildate":"2021-01-04","embarkationPort":"Tampa","nights":"5"  } 
                ,  {"ship":"Brilliance","saildate":"2021-01-09","embarkationPort":"Tampa","nights":"5"  } 
                ,  {"ship":"Brilliance","saildate":"2021-01-14","embarkationPort":"Tampa","nights":"4"  } 
                ,  {"ship":"Brilliance","saildate":"2021-01-18","embarkationPort":"Tampa","nights":"5"  } 
                ,  {"ship":"Brilliance","saildate":"2021-01-23","embarkationPort":"Tampa","nights":"5"  } 
                ,  {"ship":"Brilliance","saildate":"2021-01-28","embarkationPort":"Tampa","nights":"4"  } 
                ,  {"ship":"Empress","saildate":"2021-01-03","embarkationPort":"Miami","nights":"6"  } 
                ,  {"ship":"Empress","saildate":"2021-01-09","embarkationPort":"Miami","nights":"8"  } 
                ,  {"ship":"Empress","saildate":"2021-01-17","embarkationPort":"Miami","nights":"6"  } 
                ,  {"ship":"Empress","saildate":"2021-01-23","embarkationPort":"Miami","nights":"8"  } 
                ,  {"ship":"Enchantment","saildate":"2021-01-02","embarkationPort":"San Juan","nights":"7"  } 
                ,  {"ship":"Enchantment","saildate":"2021-01-09","embarkationPort":"San Juan","nights":"7"  } 
                ,  {"ship":"Enchantment","saildate":"2021-01-16","embarkationPort":"San Juan","nights":"7"  } 
                ,  {"ship":"Enchantment","saildate":"2021-01-23","embarkationPort":"San Juan","nights":"7"  } 
                ,  {"ship":"Enchantment","saildate":"2021-01-30","embarkationPort":"San Juan","nights":"7"  } 
                ,  {"ship":"Explorer","saildate":"2021-01-01","embarkationPort":"Miami","nights":"9"  } 
                ,  {"ship":"Explorer","saildate":"2021-01-10","embarkationPort":"Miami","nights":"5"  } 
                ,  {"ship":"Explorer","saildate":"2021-01-15","embarkationPort":"Miami","nights":"9"  } 
                ,  {"ship":"Explorer","saildate":"2021-01-24","embarkationPort":"Miami","nights":"5"  } 
                ,  {"ship":"Explorer","saildate":"2021-01-29","embarkationPort":"Miami","nights":"9"  } 
                ,  {"ship":"Freedom","saildate":"2021-01-03","embarkationPort":"San Juan","nights":"7"  } 
                ,  {"ship":"Freedom","saildate":"2021-01-10","embarkationPort":"San Juan","nights":"7"  } 
                ,  {"ship":"Freedom","saildate":"2021-01-17","embarkationPort":"San Juan","nights":"7"  } 
                ,  {"ship":"Freedom","saildate":"2021-01-24","embarkationPort":"San Juan","nights":"7"  } 
                ,  {"ship":"Freedom","saildate":"2021-01-31","embarkationPort":"San Juan","nights":"7"  } 
                ,  {"ship":"Grandeur","saildate":"1900-01-00","embarkationPort":"","nights":""  } 
                ,  {"ship":"Harmony","saildate":"2021-01-03","embarkationPort":"Orlando","nights":"7"  } 
                ,  {"ship":"Harmony","saildate":"2021-01-10","embarkationPort":"Orlando","nights":"7"  } 
                ,  {"ship":"Harmony","saildate":"2021-01-17","embarkationPort":"Orlando","nights":"7"  } 
                ,  {"ship":"Harmony","saildate":"2021-01-24","embarkationPort":"Orlando","nights":"7"  } 
                ,  {"ship":"Harmony","saildate":"2021-01-31","embarkationPort":"Orlando","nights":"7"  } 
                ,  {"ship":"Independence","saildate":"2021-01-02","embarkationPort":"FLL","nights":"5"  } 
                ,  {"ship":"Independence","saildate":"2021-01-07","embarkationPort":"FLL","nights":"4"  } 
                ,  {"ship":"Independence","saildate":"2021-01-11","embarkationPort":"FLL","nights":"5"  } 
                ,  {"ship":"Independence","saildate":"2021-01-16","embarkationPort":"FLL","nights":"8"  } 
                ,  {"ship":"Independence","saildate":"2021-01-24","embarkationPort":"FLL","nights":"6"  } 
                ,  {"ship":"Independence","saildate":"2021-01-30","embarkationPort":"FLL","nights":"7"  } 
                ,  {"ship":"Jewel","saildate":"2021-01-02","embarkationPort":"Galveston","nights":"9"  } 
                ,  {"ship":"Jewel","saildate":"2021-01-11","embarkationPort":"Galveston","nights":"6"  } 
                ,  {"ship":"Jewel","saildate":"2021-01-17","embarkationPort":"Galveston","nights":"7"  } 
                ,  {"ship":"Jewel","saildate":"2021-01-24","embarkationPort":"Galveston","nights":"7"  } 
                ,  {"ship":"Jewel","saildate":"2021-01-31","embarkationPort":"Galveston","nights":"7"  } 
                ,  {"ship":"Liberty","saildate":"2021-01-03","embarkationPort":"Galveston","nights":"7"  } 
                ,  {"ship":"Liberty","saildate":"2021-01-10","embarkationPort":"Galveston","nights":"28"  } 
                ,  {"ship":"Majesty","saildate":"2021-01-30","embarkationPort":"New Orleans","nights":"7"  } 
                ,  {"ship":"Oasis","saildate":"2021-01-03","embarkationPort":"FLL","nights":"7"  } 
                ,  {"ship":"Oasis","saildate":"2021-01-10","embarkationPort":"FLL","nights":"7"  } 
                ,  {"ship":"Oasis","saildate":"2021-01-17","embarkationPort":"FLL","nights":"7"  } 
                ,  {"ship":"Oasis","saildate":"2021-01-24","embarkationPort":"FLL","nights":"7"  } 
                ,  {"ship":"Oasis","saildate":"2021-01-31","embarkationPort":"FLL","nights":"7"  } 
                ,  {"ship":"Oddysey","saildate":"2021-01-04","embarkationPort":"FLL","nights":"5"  } 
                ,  {"ship":"Oddysey","saildate":"2021-01-09","embarkationPort":"FLL","nights":"7"  } 
                ,  {"ship":"Oddysey","saildate":"2021-01-16","embarkationPort":"FLL","nights":"7"  } 
                ,  {"ship":"Oddysey","saildate":"2021-01-23","embarkationPort":"FLL","nights":"6"  } 
                ,  {"ship":"Oddysey","saildate":"2021-01-29","embarkationPort":"FLL","nights":"8"  } 
				]


    function sortItemsInArray ( myArray ) 
	{
		retVal = []
 
        while ( myArray.length > 0 ) 
		{ 
        for ( j=0; j<myArray.length ;j++)
        {
            if ( j==0 ) { lowestIndex = j}
			else { if ( myArray[j] <= myArray[lowestIndex] ) {lowestIndex = j } }
			
        }
        retVal.push ( myArray[lowestIndex] )
		myArray.splice(lowestIndex,1)
		}
		return  retVal ;
		
	}	

    function lPadNumbers ( digitsIn, pad ) 
	{   // works for up to six digits
	    retVal = ''	
        if ( pad==6 && digitsIn< 100000 ) { retVal = '' + '0'; }		
        if ( pad>=5 && digitsIn< 10000  ) { retVal = '' + '0'; }		
        if ( pad>=4 && digitsIn< 1000   ) { retVal = '' + '0'; }		
        if ( pad>=3 && digitsIn< 100    ) { retVal = '' + '0'; }		
        if ( pad>=2 && digitsIn< 10     ) { retVal = '' + '0'; }		
        retVal = retVal + digitsIn;
		return retVal;
	}

	
    function stringToDate ( strIn ) 
	{    // Accepts a date string in format 2020-06-16 and returns a Date() object
         // Does not yet handle Nulls	

	    var components = strIn.split("-");
	    var retVal = new Date ( components[0], components[1]-1, components[2] ); 

     return retVal;
    }

    function dateToString ( dtIn ) 
	{    // Accepts a Date() object and returns a string in format 2020-06-16
         // Does not yet handle Nulls	
          
	    yr = dtIn.getFullYear();	  
	    mo = dtIn.getMonth() + 1;	  
	    dy = dtIn.getDate();	  

        return yr + "-" + lPadNumbers ( mo, 2) + "-" + lPadNumbers ( dy, 2);
    }


	
    // This will return a list of unique ships in the dataset
	//  Parameter D is the dataset to be used for grouping
	//  Param G is the field in the dataset to be grouped (DISTINCT values )
    function uniqueBars ( D, G ) 
	{
		uniqueGroups = {}
        
		for ( i=0; i<D.length; i++ )
		{
            if (!( D[i][G] in uniqueGroups )) {  uniqueGroups[D[i][G]]= 0; }
        }
		
		retArray = []
		
		// This loop will be executed for the number of unique ship names
        for ( i=0; i< Object.keys(uniqueGroups).length; i++ )
		{
			retArray.push ( Object.keys(uniqueGroups)[i] );
		}			

        return retArray;
	
	}	

    function orderSailings ( D, ship ) 
	{
         saildates = []
		 nights = []
		 ports = []
         alternator = []
		 dateObjects = []

		 sailinfo = {}


         for ( i=0; i<D.length; i++ )
         {
			 if ( D[i]["ship"] == ship )
			 {
				 saildates.push ( D[i]["saildate"] )    // This just builds a list of all of the sailing dates for this ship.

               //sailinfo is indexed by the sailing date, to allow for quick lookup of the other components ////
				 sailinfo[ D[i]["saildate"] ] =  { "embarkationPort": D[i]["embarkationPort"], "nights": D[i]["nights"]  } 

			 }				 
		 }

     
 	 saildates = sortItemsInArray ( saildates );
 
      // Now we put the arrays of the sailing lengths and and the departure ports in the same order  as the sailing dates
     // The sail dates do not need to be in date sequence, but the attributes need to be in the same order as the dates	  
      for ( i=0; i< saildates.length; i++ )
	  {
          dateObjects.push ( stringToDate ( saildates[i] )  ); 
		  
		  nights.push ( sailinfo[ saildates[i] ]["nights"] )
		  ports.push  ( sailinfo[ saildates[i] ]["embarkationPort"] )
		  alternator.push ( i%2 )
      }		  

//    Now return all five lists
      return ( [ saildates, nights, ports, alternator, dateObjects ] ) 
	  
    }   // end of orderSailings


    function derive_min_max_dates (  dataset )
	{

        allDatesArray = []		
        for ( i=0; i<dataset.length; i++ )
	    {
			
            if ( dataset[i]["saildate"] == '1900-01-00' ) { continue; }  // No date on this record

                  allDatesArray.push ( dataset[i]["saildate"] ) ;
		}

        allDatesArray.sort();

        return [ allDatesArray[0], allDatesArray[allDatesArray.length-1] ];

    }


    // The length of a gantt bar difference in xscale between the start date and end date of sailiing
    // We can determine that by adding the length to today and determing the different in the xScale values
    function xLength ( nightsIn, xScale )
    {
        var startDate  = new Date ( dateMin );
        var endDate   = new Date ( dateMin );
        endDate.setDate( endDate.getDate() + parseInt(nightsIn));
    
    	startScale = xScale ( startDate );
    	endScale   = xScale ( endDate );
    
    	return endScale - startScale; 
    }

    // Create Event Handlers for mouse
    //      function handleMouseOver(d, i) {  // Add interactivity
    function handleMouseOver( tootip, posleft, postop ) 
    { 
    
        div.transition()		
        .duration(250)		
        .style("opacity", .9)		
        .style("background","orange");
    
        div	.html(tootip)	
            .style("left", posleft + "px")		
            .style("top",  postop  + "px");	
    
    // Use D3 to select element, change color and size
    //    d3.select(this).attr( { "fill": "orange" }  );
    
    }
    
    
    function handleMouseOut( ) 
    { 
        div.transition()		
            .style("opacity", 0)
    
        div	.html("MOUSEOUT")	
            .style("left", "650px")		
            .style("top", "450px");	
    }
    
    
    function formatTooltip (  ship, date, nights, port )
    {
    	retVal = "<b>" + ship + "</b><br/>" + date + "<br/r>" + nights + " nights from " + port 
    	return retVal;
    }
    

    function filterByDates ( sailingSchedule, lowestdateStr, highestdateStr ) 
    {
		retVal = []
	    for ( i=0; i< 	sailingSchedule.length; i++ ) 
		{
			if (   sailingSchedule[i]["saildate"] > lowestdateStr 
                && sailingSchedule[i]["saildate"] < highestdateStr )
			{	
            retVal.push ( sailingSchedule[i] ) ;			
			}
        }
       return retVal;
    }

function render_internal ( lowestdateStr, highestdateStr  )
{

    ganttdata = filterByDates ( sailingSchedule, lowestdateStr, highestdateStr ) ;

    datesMinMax = derive_min_max_dates ( ganttdata );  // Returns a [list] with two values: [ min, max ]
    dateMin = stringToDate ( datesMinMax[0] ); 
    dateMax = stringToDate ( datesMinMax[1] );

    // Cushion on each side
    dateMin.setDate ( dateMin.getDate() - 1 )
    dateMax.setDate ( dateMax.getDate() + 8 )
	
	uniqueShips = [... uniqueBars ( ganttdata, "ship" ) ]
    // uniqueShips is an array containing the unique values of ships
    // It IS indexed from zero 


    dataset = []
	
    for ( r=0; r< uniqueShips.length; r++ )
	{
       // shipInfo contains a list of five lists: [0] is the sailing dates, in order, [1] is the length of those sailings (in the same order )
	   //         [2] is the list of departure ports, [3] is the alternator for coloration of the bars (in the same order), [4] is actual date objects
	   shipInfo = orderSailings ( ganttdata, uniqueShips[r] )	
	   
       for ( s=0; s< shipInfo[0].length; s++ )   // loop of sorted sailing dates for the specific ship
       {
		   dataset.push ( [ r, uniqueShips[r], shipInfo[0][s], shipInfo[1][s], shipInfo[2][s], shipInfo[3][s], shipInfo[4][s]   ] )

	   }	// loop of sorted sailing dates for the specific ship

	}	// loop of unique ships


/////// Properties section ////////////////////////////////////

    canvass = {"width": 1200, "height":700}

    leftMargin        = 150;
    barHeight         =  25;      // 40
    barContainerHeight = 35;     // 58 

//  barfill = '#9A3E25';
//    barfill = 'steelblue';
// Colors from Sunlight Foundation Style Guide
    barfill = '#e4ba22';
    barfill = '#e6842a';
    barfill = '#137b80';
    barfill = '#8e6c8a';

/////// Properties section ////////////////////////////////////


    var xAxis = d3.axisBottom()       // Why is this creating an axis on the top?
                  .scale(xScale);

    var svg = d3.select( 'svg' )
	       .attr ( "width", canvass.width )
		   .attr ( "height", canvass.height )
		   ;

    // scaleTime is the new way to do this in v5. 
    //  A lot of examples and documentation show it this way:  d3.time.scale() , but that is earlier versions of D3
    var xScale = d3.scaleTime()
                .range  ( [ leftMargin, canvass.width ]   )
                .domain ( [ dateMin, dateMax ] );

    var yScale = d3.scaleLinear()
    		   .range  ( [ canvass.height, 72 ] )
               .domain ( [ uniqueShips.length, 0 ] );

    var linedates = [
            '2021-01-03'  
          , '2021-01-10'  
          , '2021-01-17'  
          , '2021-01-24'  
          , '2021-01-31'  
          , '2021-02-07'  
        	]


    weeklines = []
	for ( i=0; i< linedates.length; i++ ) 
	{	
        weeklines.push ( xScale ( stringToDate ( linedates[i] )  )  )
    }


    // Define the div for the tooltip
    var div = d3.select("body").append("div")	
        .attr("class", "tooltip")				
        .style("opacity", 0)    // Hide until first mouseover() call
    	;


    svg.selectAll ( "rect.striate" )
			.data ( uniqueShips )
			.enter ( )
			.append( "rect" )
      		.attr ( "class", "striate" ) 

  			.attr ( "x", 1 )  
			.attr ( "y", function(d,i) {  return yScale ( i ); } )
  			.attr ( "width", canvass.width - 1 )  
  			.attr ( "height", barContainerHeight )  
  			.attr ( "fill", "#e5e2e0" )  
  			.attr ( "opacity", function(d,i) {  return i%2==1?1:0.4; } )  
            ;

    svg.append('line')
        .attr("x1", leftMargin +2)
        .attr("y1", 0)
        .attr("x2", leftMargin +2 )
        .attr("y2", canvass.height)
		.attr("class","left-edge" )
	    .style("stroke", "#cdcdc9")
        .style("stroke-width", 3)
    ; 


    svg.selectAll ( 'line.datelines' )
        .data ( weeklines )
		.enter()
    	.append('line')
        .attr("x1", function(d) { return d; }  )
        .attr("y1", 0)
        .attr("x2", function(d) { return d; }  )
        .attr("y2", canvass.height)
		.attr("class","datelines" )
 	    .style("stroke", "#cdcdc9")
        .style("stroke-width", 2)
    ; 

    svg.selectAll ( 'text.datelines' )
        .data ( linedates )
		.enter()
    	.append('text')
		.text ( function ( d) { return d; } )
        .attr("x", function(d,i) { return weeklines[i]; }  )
        .attr("y", 50)
		.attr("class","datelines" )
    	.attr ( "fill", "black") 
        .style ( "text-anchor", "middle" )
    ; 


    svg.selectAll ( "text.ships" )
		   .data ( uniqueShips )
		   .enter ( )
		   .append( "text" )
      	   .attr ( "class", "ships" ) 

  		   .attr ( "x", 15 )  
 		   .attr ( "y", function(d,i) {  return yScale ( i ) + ( barContainerHeight/2 ) + 5; } )
  		   .attr ( "width", canvass.width- leftMargin - 1 )  
  		   .attr ( "height", barContainerHeight )  

           .text( function (d,i) { return uniqueShips[i];  }    )    
//           .text( function (d,i) { return uniqueShips[i] + "\n" + "of the Seas";  }    )    
    	   .attr ( "fill", "#635f5d") 
    	   .style ( "font-family", "arial,sans-serif") 
    	   .style ( "font-weight", "bold") 
          ;


    svg.selectAll ( "rect.gantt" )
			.data ( dataset )
			.enter ( )
			.append( "rect" )

  			.attr ( "x", function(d) { return xScale ( d[6] ); } )  // d[6] contains the date objects corresponding to the sail dates
			.attr ( "y", function(d) { return yScale ( d[0] ) + (( barContainerHeight - barHeight )/2); } )

 			.attr ( "height", barHeight )
       		.attr ( "width", function(d) {  return xLength (  d[3], xScale  ); } ) // d[3] contains the number of nights 

            .attr("rx", 5)         
            .attr("ry", 5)         

  			.style ( "fill",     barfill )
			.style ( "opacity", function (d,i) { return d[5]==1?0.9:0.7; } )   // d[5] contains the 0 and 1 values for color alternation
			
 			.attr ( "stroke", 'black')
 			.attr ( "stroke-width",2)
      		.attr ( "class", "gantt" ) 
			
  			.attr ( "ship", function (d) { return d[0]; } )
//////////////////////////////////////
///			.update ( )
///
///  			.attr ( "x", function(d) { return xScale ( d[6] ); } )  // d[6] contains the date objects corresponding to the sail dates
///			.attr ( "y", function(d) { return yScale ( d[0] ) + (( barContainerHeight - barHeight )/2); } )
///
/// 			.attr ( "height", barHeight )
///       		.attr ( "width", function(d) {  return xLength (  d[3], xScale  ); } ) // d[3] contains the number of nights 
///
///            .attr("rx", 5)         
///            .attr("ry", 5)         
///
///  			.style ( "fill",     barfill )
///			.style ( "opacity", function (d,i) { return d[5]==1?0.9:0.7; } )   // d[5] contains the 0 and 1 values for color alternation
///			
/// 			.attr ( "stroke", 'black')
/// 			.attr ( "stroke-width",2)
///      		.attr ( "class", "gantt" ) 
///			
///  			.attr ( "ship", function (d) { return d[0]; } )



			
////            .on("mouseover", function(d) { handleMouseOver ( formatTooltip ( d[1], d[2], d[3], d[4]), xScale ( d[6] ), yScale( d[0] ) ); }  )
////            .on("mouseout",  function(d) { handleMouseOut (); }  )
			;


// Colors from Sunlight Foundation Style Guide
//    barfill = '#e4ba22';
//    barfill = '#e6842a';
//    barfill = '#137b80';
//    barfill = '#8e6c8a';


    d3.select("#range1").on("input", function () {

        // Included empty string ( '' ) in position 0 because slider range is 1 through 4
        transitionColors = [ '','#e4ba22', '#e6842a', '#137b80', '#8e6c8a' ]

                                                            // Math.floor is not necessary because input sider selects only integer values
        mybox = document.getElementById("slidervalue").value = Math.floor(d3.select("#range1").property("value"));

        svg.selectAll('rect.gantt')
                        .transition()
                        .duration(1000)
                        .ease(d3.easeLinear)
             			.style ( "fill",     transitionColors[Math.floor(d3.select("#range1").property("value"))] );
		
    });


alert ( "Bottom of render_internal" );

}   // Bottom of render_internal

function submitClicked ( pVal1, pVal2 ) 
{
	
   alert ( "Inside javascript" ) ;	
   render_internal( "2021-01-10", "2021-01-31"  );

	
}

function render () 
{

// Eventually, build lookup logic from cookies

   lowestdateStr   = '1899-12-31';
   highestdateStr  = '2100-01-01';
	
   render_internal( lowestdateStr, highestdateStr  );
  
	
}	