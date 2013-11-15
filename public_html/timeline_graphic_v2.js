d3.json("timeline.json", function(data) {
 
    /*map the month values of the json array into a new array composed only of month values
     //then find the maximum value of that array
     var monthMax = Math.max.apply(Math,data.map(function(d){return d.month;}));
     alert(monthMax);
     */
    
    var dataL = data.length; //returns number of timeline events
    
    var years =data.map(function(d){return d.year;}); //creates new array of only years
    var months =data.map(function(d){return d.month;}); //creates new array of only months
    var days =data.map(function(d){return d.day;}); //creates new array of only days
    
    var startingYear=d3.min(years); //first year in timeline
    var endingYear=d3.max(years); //last year in timeline
    
    var startingMonth=d3.min(months); //first month in timeline 
    var endingMonth=d3.max(months); //last month in timeline
    
    var startingDay=d3.min(days); //first day in timeline
    var endingDay=d3.max(days); //last day in timeline
   
    var ySpan = endingYear-startingYear; //returns span of years accross events
    var mSpan = endingMonth-startingMonth; //returns span of months accross events
    var dSpan = endingDay-startingDay; //returns span of days accross events
    
    var startingPoint; //these values will depend on the data scaling
    var endingPoint;
    var scale; //the scale you end up having (years, months, or days)

if (ySpan <= 1) //if the events all occurred within two years
    {
        if (mSpan <= 1)//if all the events occured within two months
        {
            startingPoint=startingDay;
            endingPoint=endingDay;
            scale=days;
        }
        else if (mSpan>1)//if the events took place over several months
        {
         alert("working");
            startingPoint=startingMonth;
            endingPoint=endingMonth;
            scale=months;
        }
    }
    else if(ySpan>1)
        { startingPoint=startingYear;
            endingPoint=endingYear;
            scale=years;
    }


    var linearScale = d3.scale.linear()
                            .domain([startingPoint,endingPoint])
                            .range([37,563]);
    var dataScale=[];
    
    
    for (var i = 0; i < dataL; i++) {
  dataScale[i] = linearScale(scale[i]);
}

//var dataScale=scaledYears.slice(0); //creates a new array "dataScale" that is equivilant to scaledYears. ".slice" can be ommitted, if desired.

    /*
     for (var i = 0, len = info.length; i < len; i++) {
     infoT = info.concat(info[i].year);
     }*/

    var canvas = d3.select("body")
            .append("svg")
            .attr("width", 600)
            .attr("height", 450);


    var viewbox = canvas.append("rect")
            .attr("height", 450)
            .attr("width", 600)
            .style("fill", "grey");

    var timeline = canvas.append("rect")
            .attr("width", 550)
            .attr("height", 60)
            .style("fill", "black")
            .attr("rx", 10)
            .attr("ry", 10)
            .attr("y", "195")
            .attr("x", "25");

    var circles = canvas.selectAll("circle")
            .data(dataScale)
            .enter()
            .append("circle")
            .attr("cy", 225)
            .attr("cx", function(d) {return d;})
            .attr("r", 7)
            .style("fill", "white")
            .style('opacity',0)
            .transition()
            .duration(1000)
            .style('opacity',1);

    var lines = canvas.selectAll("line")
            .data(data)
            .enter()
            .append("line")
            .attr("x1", 2)
            .attr("x2", 2)
            .attr("y1", 180)
            .attr("y2", 195)
            //.text(function(d){return})
            .attr("stroke", "black")
            .attr("stroke-width", 3);

    //d3.select("line").attr("x1") -> for returning "line"'s "x1" value

    /*.on("mouseenter", function(){
     circles.transition()
     .duration(1500)
     //.delay(1000)
     .style('opacity',.7)
     .attr("cx", function(d){return d.month * 50;})
     //.each("end",function(){}) //this is a listener -- "start" can also be used instead of "end"
     .transition()
     .style('opacity',0)
     .attr("cy",function(d){return d.year / 10;});});*/





});

/*var scaling =
        {
            run: function(d) {
                if (years === true)
                {
                    return (d.year - 1900) * 10;
                }
                else if (months === true)
                {
                    return d.month * 28;
                }
                else if (days === true)
                {
                    return d.day * 10;
                }
            }}; */


