d3.json("timeline.json", function(data) {

     years = true;
     months = false;
     days = false;

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
            .attr("cx", function(d) {
        return d.info * 100;
    })
            .attr("r", 7)
            .style("fill", "white");
    
    var scaling = [20, 60, 100, 140];

    var lines = canvas.selectAll("line")
            .data(data)
            .enter()
            .append("line")
            .attr("x1", function(d){
            if(years===true)
                {return (d.year-1900)*10;}
            else if (months===true)
                {return d.month*28;}
            else if (days===true)
                {return d.day*10;}
                ;})
            .attr("x2", lines.attr("x1"))
            .attr("y1", 180)
            .attr("y2", 195)
            //.text(function(d){return})
            .attr("stroke", "black")
            .attr("stroke-width", 3);
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


