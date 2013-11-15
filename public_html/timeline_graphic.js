d3.json("timeline.json", function(data) {

    var dataL = data.length; //returns number of timeline events
    var ySpan = data[dataL - 1].year - data[0].year; //returns span of years accross events

    /*map the month values of the json array into a new array composed only of month values
     //then find the maximum value of that array
     var monthMax = Math.max.apply(Math,data.map(function(d){return d.month;}));
     alert(monthMax);
     */
    var 
    var mSpan = data[dataL - 1].month - data[0].month; //returns span of months accross events
    var dSpan = data[dataL - 1].day - data[0].day; //returns span of days accross events
    var yearArray=newArray(ySpan);
   
    for (var i=0;i<(dataL-1);i++)
        {
            yearArray[i]=i;
        }
        
     years = true; //scale the timeline by years (default)
     months = false; //scale the timeline by months
     days = false; //scale the timeline by days


    if (ySpan <= 1) //if the events all occurred during the same year
    {
        years = false;
        if (mSpan <= 1)//if all the events occured during the same month
        {
            months = false;
            days = true;//scale based upon days
        }
        else //if the events took place over several months
        {
            months = true;
        }
    }
    



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
            .data(data)
            .enter()
            .append("circle")
            .attr("cy", 225)
            .attr("cx", function() {
        if (years === true)
        {
           // alert("working");
            return (d[0].year - d[dataL-1].year)*10;
        }
        else if (months === true)
        {
            return d.month * 28;
        }
        else if (days === true)
        {
            return d.day * 10;
        }
        ;
    })

            .attr("r", 7)
            .style("fill", "white");
    
var monthList=[1,2,3,4,5,6,7,8,9,10,11,12];
var yearList=[];
var dayList=[];
    //var scaling = [20, 60, 100, 140];

    var lines = canvas.selectAll("line")
            .data(data)
            .enter()
            .append("line")
            .attr("x1", function(d) {
        if (years === true)
        {
            return (d.year - 1900) * 10;
        }
        else if (months === true)
        {
            return ;
        }
        else if (days === true)
        {
            return d.day * 10;
        }
        ;
    })
            .attr("x2", function(d) {if (years === true)
        {
            return (d.year - 1900) * 10;
        }
        else if (months === true)
        {
            return d.month * 0;
        }
        else if (days === true)
        {
            return d.day * 10;
        }
        ;
    })
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


