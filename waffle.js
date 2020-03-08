

function render () 
{

    
    canvass = {"width": 1200, "height":1000};
    square = {"side":20,"gap":5};
    colors = {"pos":"steelblue", "neg":"#e5e2e0"}

    pct_values = [62, 18,97, 55];

    dataset0 = []
	for ( i=0;i<100;i++)
    {
        x= ( i % 10 ) * ( square["side"] + square["gap"]);
        y= Math.floor(( i / 10 )) * ( square["side"] + square["gap"]);
		if ( i < pct_values[0] ) {color=colors["pos"]} else { color=colors["neg"] }
		dataset0.push ( {"value":i,"x":x,"y":y, "fill":color} )
	}

    dataset1 = []
	for ( i=0;i<100;i++)
    {
        x= ( i % 10 ) * ( square["side"] + square["gap"]);
        y= Math.floor(( i / 10 )) * ( square["side"] + square["gap"]);
		if ( i < pct_values[1] ) {color=colors["pos"]} else { color=colors["neg"] }
		dataset1.push ( {"value":i,"x":x,"y":y, "fill":color} )
	}

    dataset2 = []
	for ( i=0;i<100;i++)
    {
        x= ( i % 10 ) * ( square["side"] + square["gap"]);
        y= Math.floor(( i / 10 )) * ( square["side"] + square["gap"]);
		if ( i < pct_values[2] ) {color=colors["pos"]} else { color=colors["neg"] }
		dataset2.push ( {"value":i,"x":x,"y":y, "fill":color} )
	}

    dataset3 = []
	for ( i=0;i<100;i++)
    {
        x= ( i % 10 ) * ( square["side"] + square["gap"]);
        y= Math.floor(( i / 10 )) * ( square["side"] + square["gap"]);
		if ( i < pct_values[3] ) {color=colors["pos"]} else { color=colors["neg"] }
		dataset3.push ( {"value":i,"x":x,"y":y, "fill":color} )
	}



	var svg = d3.select( 'svg' )
	       .attr ( "width", canvass.width )
		   .attr ( "height", canvass.height )
		   ;

    var g = svg.append ('g')
	         .attr( "class", "innerChart")
 	         .attr ( "transform", `translate(40, 40)`)
		   ;
    var bar = g.selectAll ( "rect" )
			.data ( dataset0 )
			.enter ( )
			.append( "rect" )
			.attr ( "y", function(d) {  return ( d["y"] ); } )
			.attr ( "x", function(d) {  return ( d["x"] ); } )
 			.attr ( "height", square["side"] )
 			.attr ( "width", square["side"] )
			.attr ( "stroke", 'black')
			.attr ( "stroke-width",1)
			.attr ( "fill", function(d) { return (  d["fill"] )  } )

    var g = svg.append ('g')
	         .attr( "class", "innerChart")
 	         .attr ( "transform", `translate(340, 40)`)
		   ;

    var bar = g.selectAll ( "rect" )
			.data ( dataset1 )
			.enter ( )
			.append( "rect" )
			.attr ( "y", function(d) {  return ( d["y"] ); } )
			.attr ( "x", function(d) {  return ( d["x"] ); } )
 			.attr ( "height", square["side"] )
 			.attr ( "width", square["side"] )
			.attr ( "stroke", 'black')
			.attr ( "stroke-width",1)
			.attr ( "fill", function(d) { return (  d["fill"] )  } )

    var g = svg.append ('g')
	         .attr( "class", "innerChart")
 	         .attr ( "transform", `translate(640, 40)`)
		   ;

    var bar = g.selectAll ( "rect" )
			.data ( dataset2 )
			.enter ( )
			.append( "rect" )
			.attr ( "y", function(d) {  return ( d["y"] ); } )
			.attr ( "x", function(d) {  return ( d["x"] ); } )
 			.attr ( "height", square["side"] )
 			.attr ( "width", square["side"] )
			.attr ( "stroke", 'black')
			.attr ( "stroke-width",1)
			.attr ( "fill", function(d) { return (  d["fill"] )  } )

    var g = svg.append ('g')
	         .attr( "class", "innerChart")
 	         .attr ( "transform", `translate(940, 40)`)
		   ;

    var bar = g.selectAll ( "rect" )
			.data ( dataset3 )
			.enter ( )
			.append( "rect" )
			.attr ( "y", function(d) {  return ( d["y"] ); } )
			.attr ( "x", function(d) {  return ( d["x"] ); } )
 			.attr ( "height", square["side"] )
 			.attr ( "width", square["side"] )
			.attr ( "stroke", 'black')
			.attr ( "stroke-width",1)
			.attr ( "fill", function(d) { return (  d["fill"] )  } )


}