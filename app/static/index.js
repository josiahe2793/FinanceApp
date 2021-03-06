//++++++++++++++++++++++++DONUT++++++++++++++++++++++++++++++++++
//set the dimensions and margins of the graph

// var body = document.getElementsByTagName("body")[0]
// console.log(body)

// function makeChart(remainder, expenses){
  
//   var container = d3.select("#my_dataviz")

//   container.select("svg").remove();
//   console.log("CONTAINER")
//   console.log(container)


//   var width = container.node().getBoundingClientRect().width;
//   var height = width

//   console.log("WIDTH")
//   console.log(width)

//   var margin = 40;
//   // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
//   var radius = (Math.min(width, width) / 2)*.8

//   // append the svg object to the div called 'my_dataviz'
//   var svg = d3.select("#my_dataviz")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .append("g")
//     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

//   // Create dummy data
//   var data = { a: 9, b: 20, c: 30, d: 8, e: 12 }

//   // set the color scale
//   var color = d3.scaleOrdinal()
//     .domain(data)
//     .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

//   // Compute the position of each group on the pie:
//   var pie = d3.pie()
//     .value(function(d) { return d.value; })
//   var data_ready = pie(d3.entries(data))

//   // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
//   svg
//     .selectAll('whatever')
//     .data(data_ready)
//     .enter()
//     .append('path')
//     .attr('d', d3.arc()
//       .innerRadius(100) // This is the size of the donut hole
//       .outerRadius(radius)
//     )
//     .attr('fill', function(d) { return (color(d.data.key)) })
//     .attr("stroke", "black")
//     .style("stroke-width", "2px")
//     .style("opacity", 0.7)
// }

// makeChart()

// window.addEventListener("resize", makeChart);




// ++++++++++++++++++++++++++++++++COOL FLOWY THINGY+++++++++++++++++++++++++++++


// var config_default = liquidFillGaugeDefaultSettings();
// config_default.circleThickness = 0.2;
// config_default.textVertPosition = 0.5;
// config_default.waveAnimateTime = 5000;
// config_default.displayPercent = false;
// config_default.maxValue = 500;

// var config_info = liquidFillGaugeDefaultSettings();
// var config_warning = liquidFillGaugeDefaultSettings();
// var config_danger = liquidFillGaugeDefaultSettings();

// config_info.circleColor = "#51a821"
// config_info.textColor = "#1E5200"
// config_info.waveTextColor = "#51a821"
// config_info.waveColor = "#91EE5F"

// config_warning.circleColor = "#f7bf1e"
// config_warning.textColor = "#765a04"
// config_warning.waveTextColor = "#f7bf1e"
// config_warning.waveColor = "#ffe9a8"
// config_warning.warningThreshold = .4;
// config_warning.waveCount = 2;
// config_warning.waveRiseTime = 40;
// config_warning.waveAnimateTime = 6000;

// config_danger.circleColor = "#f7321e"
// config_danger.textColor = "#4f0a03"
// config_danger.waveTextColor = "#f7321e"
// config_danger.waveColor = "#fedbd8"
// config_danger.dangerThreshold = .2;
// config_danger.waveCount = 5;
// config_danger.waveRiseTime = 15;
// config_danger.waveAnimateTime = 2400;
// config_danger.waveHeight = 0.15;


// var gauge1 = loadLiquidFillGauge("fillgauge1", 65, config_danger);
// var gauge2 = loadLiquidFillGauge("fillgauge2", 149, config_warning);
// var gauge3 = loadLiquidFillGauge("fillgauge3", 452, config_info);

// /*!
// * @license Open source under BSD 2-clause (http://choosealicense.com/licenses/bsd-2-clause/)
// * Copyright (c) 2015, Curtis Bratton
// * All rights reserved.
// *
// * Liquid Fill Gauge v1.1
// */
// function liquidFillGaugeDefaultSettings() {
//   return {
//     minValue: 0, // The gauge minimum value.
//     maxValue: 500, // The gauge maximum value.
//     circleThickness: 0.05, // The outer circle thickness as a percentage of it's radius.
//     circleFillGap: 0.05, // The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius.
//     circleColor: "#178BCA", // The color of the outer circle.
//     waveHeight: 0.05, // The wave height as a percentage of the radius of the wave circle.
//     waveCount: 1, // The number of full waves per width of the wave circle.
//     waveRiseTime: 1000, // The amount of time in milliseconds for the wave to rise from 0 to it's final height.
//     waveAnimateTime: 18000, // The amount of time in milliseconds for a full wave to enter the wave circle.
//     waveRise: true, // Control if the wave should rise from 0 to it's full height, or start at it's full height.
//     waveHeightScaling: true, // Controls wave size scaling at low and high fill percentages. When true, wave height reaches it's maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appear totally full or empty when near it's minimum or maximum fill.
//     waveAnimate: true, // Controls if the wave scrolls or is static.
//     waveColor: "#178BCA", // The color of the fill wave.
//     waveOffset: 0, // The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave.
//     textVertPosition: .5, // The height at which to display the percentage text withing the wave circle. 0 = bottom, 1 = top.
//     textSize: 1, // The relative height of the text to display in the wave circle. 1 = 50%
//     valueCountUp: true, // If true, the displayed value counts up from 0 to it's final value upon loading. If false, the final value is displayed.
//     displayPercent: false, // If true, a % symbol is displayed after the value.
//     textColor: "#045681", // The color of the value text when the wave does not overlap it.
//     waveTextColor: "#A4DBf8" // The color of the value text when the wave overlaps it.
//   };
// }

// function loadLiquidFillGauge(elementId, value, config) {
//   if (config == null) config = liquidFillGaugeDefaultSettings();

//   var gauge = d3.select("#" + elementId);
//   var radius = Math.min(parseInt(gauge.style("width")), parseInt(gauge.style("height"))) / 2;
//   var locationX = parseInt(gauge.style("width")) / 2 - radius;
//   var locationY = parseInt(gauge.style("height")) / 2 - radius;
//   var fillPercent = Math.max(config.minValue, Math.min(config.maxValue, value)) / config.maxValue;

//   var waveHeightScale;
//   if (config.waveHeightScaling) {
//     waveHeightScale = d3.scaleLinear()
//       .range([0, config.waveHeight, 0])
//       .domain([0, 50, 100]);
//   } else {
//     waveHeightScale = d3.scaleLinear()
//       .range([config.waveHeight, config.waveHeight])
//       .domain([0, 100]);
//   }

//   var textPixels = (config.textSize * radius / 2);
//   var textFinalValue = parseFloat(value).toFixed(2);
//   var textStartValue = config.valueCountUp ? config.minValue : textFinalValue;
//   var percentText = config.displayPercent ? "%" : "";
//   var circleThickness = config.circleThickness * radius;
//   var circleFillGap = config.circleFillGap * radius;
//   var fillCircleMargin = circleThickness + circleFillGap;
//   var fillCircleRadius = radius - fillCircleMargin;
//   var waveHeight = fillCircleRadius * waveHeightScale(fillPercent * 100);

//   var waveLength = fillCircleRadius * 2 / config.waveCount;
//   var waveClipCount = 1 + config.waveCount;
//   var waveClipWidth = waveLength * waveClipCount;

//   // Rounding functions so that the correct number of decimal places is always displayed as the value counts up.
//   var textRounder = function(value) {
//     return Math.round(value);
//   };
//   if (parseFloat(textFinalValue) != parseFloat(textRounder(textFinalValue))) {
//     textRounder = function(value) {
//       return parseFloat(value).toFixed(1);
//     };
//   }
//   if (parseFloat(textFinalValue) != parseFloat(textRounder(textFinalValue))) {
//     textRounder = function(value) {
//       return parseFloat(value).toFixed(2);
//     };
//   }

//   // Data for building the clip wave area.
//   var data = [];
//   for (var i = 0; i <= 40 * waveClipCount; i++) {
//     data.push({
//       x: i / (40 * waveClipCount),
//       y: (i / (40))
//     });
//   }

//   // Scales for drawing the outer circle.
//   var gaugeCircleX = d3.scaleLinear().range([0, 2 * Math.PI]).domain([0, 1]);
//   var gaugeCircleY = d3.scaleLinear().range([0, radius]).domain([0, radius]);

//   // Scales for controlling the size of the clipping path.
//   var waveScaleX = d3.scaleLinear().range([0, waveClipWidth]).domain([0, 1]);
//   var waveScaleY = d3.scaleLinear().range([0, waveHeight]).domain([0, 1]);

//   // Scales for controlling the position of the clipping path.
//   var waveRiseScale = d3.scaleLinear()
//     // The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
//     // such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
//     // circle at 100%.
//     .range([(fillCircleMargin + fillCircleRadius * 2 + waveHeight), (fillCircleMargin - waveHeight)])
//     .domain([0, 1]);
//   var waveAnimateScale = d3.scaleLinear()
//     .range([0, waveClipWidth - fillCircleRadius * 2]) // Push the clip area one full wave then snap back.
//     .domain([0, 1]);

//   // Scale for controlling the position of the text within the gauge.
//   var textRiseScaleY = d3.scaleLinear()
//     .range([fillCircleMargin + fillCircleRadius * 2, (fillCircleMargin + textPixels * 0.7)])
//     .domain([0, 1]);

//   // Center the gauge within the parent SVG.
//   var gaugeGroup = gauge.append("g")
//     .attr('transform', 'translate(' + locationX + ',' + locationY + ')');

//   // Draw the outer circle.
//   var gaugeCircleArc = d3.arc()
//     .startAngle(gaugeCircleX(0))
//     .endAngle(gaugeCircleX(1))
//     .outerRadius(gaugeCircleY(radius))
//     .innerRadius(gaugeCircleY(radius - circleThickness));
//   gaugeGroup.append("path")
//     .attr("d", gaugeCircleArc)
//     .style("fill", config.circleColor)
//     .attr('transform', 'translate(' + radius + ',' + radius + ')');

//   // Text where the wave does not overlap.
//   var text1 = gaugeGroup.append("text")
//     .text(textRounder(textStartValue) + percentText)
//     .attr("class", "liquidFillGaugeText")
//     .attr("text-anchor", "middle")
//     .attr("font-size", textPixels + "px")
//     .style("fill", config.textColor)
//     .attr('transform', 'translate(' + radius + ',' + textRiseScaleY(config.textVertPosition) + ')');

//   // The clipping wave area.
//   var clipArea = d3.area()
//     .x(function(d) {
//       return waveScaleX(d.x);
//     })
//     .y0(function(d) {
//       return waveScaleY(Math.sin(Math.PI * 2 * config.waveOffset * -1 + Math.PI * 2 * (1 - config.waveCount) + d.y * 2 * Math.PI));
//     })
//     .y1(function(d) {
//       return (fillCircleRadius * 2 + waveHeight);
//     });
//   var waveGroup = gaugeGroup.append("defs")
//     .append("clipPath")
//     .attr("id", "clipWave" + elementId);
//   var wave = waveGroup.append("path")
//     .datum(data)
//     .attr("d", clipArea)
//     .attr("T", 0);

//   // The inner circle with the clipping wave attached.
//   var fillCircleGroup = gaugeGroup.append("g")
//     .attr("clip-path", "url(#clipWave" + elementId + ")");
//   fillCircleGroup.append("circle")
//     .attr("cx", radius)
//     .attr("cy", radius)
//     .attr("r", fillCircleRadius)
//     .style("fill", config.waveColor);

//   // Text where the wave does overlap.
//   var text2 = fillCircleGroup.append("text")
//     .text(textRounder(textStartValue) + percentText)
//     .attr("class", "liquidFillGaugeText")
//     .attr("text-anchor", "middle")
//     .attr("font-size", textPixels + "px")
//     .style("fill", config.waveTextColor)
//     .attr('transform', 'translate(' + radius + ',' + textRiseScaleY(config.textVertPosition) + ')');

//   // Make the value count up.
//   if (config.valueCountUp) {
//     var textTween = function() {
//       var i = d3.interpolate(this.textContent, textFinalValue);
//       return function(t) {
//         this.textContent = textRounder(i(t)) + percentText;
//       }
//     };
//     text1.transition()
//       .duration(config.waveRiseTime)
//       .tween("text", textTween);
//     text2.transition()
//       .duration(config.waveRiseTime)
//       .tween("text", textTween);
//   }

//   // Make the wave rise. wave and waveGroup are separate so that horizontal and vertical movement can be controlled independently.
//   var waveGroupXPosition = fillCircleMargin + fillCircleRadius * 2 - waveClipWidth;
//   if (config.waveRise) {
//     waveGroup.attr('transform', 'translate(' + waveGroupXPosition + ',' + waveRiseScale(0) + ')')
//       .transition()
//       .duration(config.waveRiseTime)
//       .attr('transform', 'translate(' + waveGroupXPosition + ',' + waveRiseScale(fillPercent) + ')')
//       .each("start", function() {
//         wave.attr('transform', 'translate(1,0)');
//       }); // This transform is necessary to get the clip wave positioned correctly when waveRise=true and waveAnimate=false. The wave will not position correctly without this, but it's not clear why this is actually necessary.
//   } else {
//     waveGroup.attr('transform', 'translate(' + waveGroupXPosition + ',' + waveRiseScale(fillPercent) + ')');
//   }

//   if (config.waveAnimate) animateWave();

//   function animateWave() {
//     wave.attr('transform', 'translate(' + waveAnimateScale(wave.attr('T')) + ',0)');
//     wave.transition()
//       .duration(config.waveAnimateTime * (1 - wave.attr('T')))
//       .ease('linear')
//       .attr('transform', 'translate(' + waveAnimateScale(1) + ',0)')
//       .attr('T', 1)
//       .each('end', function() {
//         wave.attr('T', 0);
//         animateWave(config.waveAnimateTime);
//       });
//   }

//   function GaugeUpdater() {
//     this.update = function(value) {
//       var newFinalValue = parseFloat(value).toFixed(2);
//       var textRounderUpdater = function(value) {
//         return Math.round(value);
//       };
//       if (parseFloat(newFinalValue) != parseFloat(textRounderUpdater(newFinalValue))) {
//         textRounderUpdater = function(value) {
//           return parseFloat(value).toFixed(1);
//         };
//       }
//       if (parseFloat(newFinalValue) != parseFloat(textRounderUpdater(newFinalValue))) {
//         textRounderUpdater = function(value) {
//           return parseFloat(value).toFixed(2);
//         };
//       }

//       var textTween = function() {
//         var i = d3.interpolate(this.textContent, parseFloat(value).toFixed(2));
//         return function(t) {
//           this.textContent = textRounderUpdater(i(t)) + percentText;
//         }
//       };

//       text1.transition()
//         .duration(config.waveRiseTime)
//         .tween("text", textTween);
//       text2.transition()
//         .duration(config.waveRiseTime)
//         .tween("text", textTween);

//       var fillPercent = Math.max(config.minValue, Math.min(config.maxValue, value)) / config.maxValue;
//       var waveHeight = fillCircleRadius * waveHeightScale(fillPercent * 100);
//       var waveRiseScale = d3.scaleLinear()
//         // The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
//         // such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
//         // circle at 100%.
//         .range([(fillCircleMargin + fillCircleRadius * 2 + waveHeight), (fillCircleMargin - waveHeight)])
//         .domain([0, 1]);
//       var newHeight = waveRiseScale(fillPercent);
//       var waveScaleX = d3.scaleLinear().range([0, waveClipWidth]).domain([0, 1]);
//       var waveScaleY = d3.scaleLinear().range([0, waveHeight]).domain([0, 1]);
//       var newClipArea;
//       if (config.waveHeightScaling) {
//         newClipArea = d3.area()
//           .x(function(d) {
//             return waveScaleX(d.x);
//           })
//           .y0(function(d) {
//             return waveScaleY(Math.sin(Math.PI * 2 * config.waveOffset * -1 + Math.PI * 2 * (1 - config.waveCount) + d.y * 2 * Math.PI));
//           })
//           .y1(function(d) {
//             return (fillCircleRadius * 2 + waveHeight);
//           });
//       } else {
//         newClipArea = clipArea;
//       }

//       var newWavePosition = config.waveAnimate ? waveAnimateScale(1) : 0;
//       wave.transition()
//         .duration(0)
//         .transition()
//         .duration(config.waveAnimate ? (config.waveAnimateTime * (1 - wave.attr('T'))) : (config.waveRiseTime))
//         .ease('linear')
//         .attr('d', newClipArea)
//         .attr('transform', 'translate(' + newWavePosition + ',0)')
//         .attr('T', '1')
//         .each("end", function() {
//           if (config.waveAnimate) {
//             wave.attr('transform', 'translate(' + waveAnimateScale(0) + ',0)');
//             animateWave(config.waveAnimateTime);
//           }
//         });
//       waveGroup.transition()
//         .duration(config.waveRiseTime)
//         .attr('transform', 'translate(' + waveGroupXPosition + ',' + newHeight + ')')
//     }
//   }

//   return new GaugeUpdater();
// }


//++++++++++++++++++++++++++COOL FLOWY THING TRY #2+++++++++++++++++++++++++++++++++

    // var gauge1 = loadLiquidFillGauge("fillgauge1", 55);
    // var config1 = liquidFillGaugeDefaultSettings();
    // config1.circleColor = "#FF7777";
    // config1.textColor = "#FF4444";
    // config1.waveTextColor = "#FFAAAA";
    // config1.waveColor = "#FFDDDD";
    // config1.circleThickness = 0.2;
    // config1.textVertPosition = 0.2;
    // config1.waveAnimateTime = 1000;
    // var gauge2= loadLiquidFillGauge("fillgauge2", 28, config1);
    // var config2 = liquidFillGaugeDefaultSettings();
    // config2.circleColor = "#D4AB6A";
    // config2.textColor = "#553300";
    // config2.waveTextColor = "#805615";
    // config2.waveColor = "#AA7D39";
    // config2.circleThickness = 0.1;
    // config2.circleFillGap = 0.2;
    // config2.textVertPosition = 0.8;
    // config2.waveAnimateTime = 2000;
    // config2.waveHeight = 0.3;
    // config2.waveCount = 1;
    // var gauge3 = loadLiquidFillGauge("fillgauge3", 60.1, config2);
    // var config3 = liquidFillGaugeDefaultSettings();
    // config3.textVertPosition = 0.8;
    // config3.waveAnimateTime = 5000;
    // config3.waveHeight = 0.15;
    // config3.waveAnimate = false;
    // config3.waveOffset = 0.25;
    // config3.valueCountUp = false;
    // config3.displayPercent = false;
    // var gauge4 = loadLiquidFillGauge("fillgauge4", 50, config3);
    // var config4 = liquidFillGaugeDefaultSettings();
    // config4.circleThickness = 0.15;
    // config4.circleColor = "#808015";
    // config4.textColor = "#555500";
    // config4.waveTextColor = "#FFFFAA";
    // config4.waveColor = "#AAAA39";
    // config4.textVertPosition = 0.8;
    // config4.waveAnimateTime = 1000;
    // config4.waveHeight = 0.05;
    // config4.waveAnimate = true;
    // config4.waveRise = false;
    // config4.waveHeightScaling = false;
    // config4.waveOffset = 0.25;
    // config4.textSize = 0.75;
    // config4.waveCount = 3;
    // var gauge5 = loadLiquidFillGauge("fillgauge5", 60.44, config4);
    // var config5 = liquidFillGaugeDefaultSettings();
    // config5.circleThickness = 0.4;
    // config5.circleColor = "#6DA398";
    // config5.textColor = "#0E5144";
    // config5.waveTextColor = "#6DA398";
    // config5.waveColor = "#246D5F";
    // config5.textVertPosition = 0.52;
    // config5.waveAnimateTime = 5000;
    // config5.waveHeight = 0;
    // config5.waveAnimate = false;
    // config5.waveCount = 2;
    // config5.waveOffset = 0.25;
    // config5.textSize = 1.2;
    // config5.minValue = 30;
    // config5.maxValue = 150
    // config5.displayPercent = false;
    // var gauge6 = loadLiquidFillGauge("fillgauge6", 120, config5);

    // function NewValue(){
    //     if(Math.random() > .5){
    //         return Math.round(Math.random()*100);
    //     } else {
    //         return (Math.random()*100).toFixed(1);
    //     }
    // }
    
    
    
    //COOL FLOWY THIKNG #3
    
loadLiquidFillGauge("fillgauge2", 10);


function liquidFillGaugeDefaultSettings() {
    return {
        minValue: 0, // The gauge minimum value.
        maxValue: 100, // The gauge maximum value.
        circleThickness: 0.05, // The outer circle thickness as a percentage of it's radius.
        circleFillGap: 0.05, // The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius.
        circleColor: "#178BCA", // The color of the outer circle.
        waveHeight: 0.05, // The wave height as a percentage of the radius of the wave circle.
        waveCount: 3, // The number of full waves per width of the wave circle.
        waveRiseTime: 1000, // The amount of time in milliseconds for the wave to rise from 0 to it's final height.
        waveAnimateTime: 1000, // The amount of time in milliseconds for a full wave to enter the wave circle.
        waveRise: true, // Control if the wave should rise from 0 to it's full height, or start at it's full height.
        waveHeightScaling: true, // Controls wave size scaling at low and high fill percentages. When true, wave height reaches it's maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appear totally full or empty when near it's minimum or maximum fill.
        waveAnimate: true, // Controls if the wave scrolls or is static.
        waveColor: "#178BCA", // The color of the fill wave.
        waveOffset: 0.25, // The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave.
        textVertPosition: .8, // The height at which to display the percentage text withing the wave circle. 0 = bottom, 1 = top.
        textSize: 0.6, // The relative height of the text to display in the wave circle. 1 = 50%
        valueCountUp: true, // If true, the displayed value counts up from 0 to it's final value upon loading. If false, the final value is displayed.
        displayPercent: true, // If true, a % symbol is displayed after the value.
        textColor: "#045681", // The color of the value text when the wave does not overlap it.
        waveTextColor: "#A4DBf8" // The color of the value text when the wave overlaps it.
    };
}

 
function loadLiquidFillGauge(elementId, value, config) {
    if (config == null) config = liquidFillGaugeDefaultSettings();
    var gauge = d3.select("#" + elementId);
    console.log(gauge)
    var radius = Math.min(parseInt(gauge.style("width")), parseInt(gauge.style("height"))) / 2;
    var locationX = parseInt(gauge.style("width")) / 2 - radius;
    var locationY = parseInt(gauge.style("height")) / 2 - radius;
    var fillPercent = Math.max(config.minValue, Math.min(config.maxValue, value)) / config.maxValue;

    var waveHeightScale;
    if (config.waveHeightScaling) {
        waveHeightScale = d3.scaleLinear()
            .range([0, config.waveHeight, 0])
            .domain([0, 50, 100]);
    } else {
        waveHeightScale = d3.scaleLinear()
            .range([config.waveHeight, config.waveHeight])
            .domain([0, 100]);
    }

    var textPixels = (config.textSize * radius / 2);
    var textFinalValue = parseFloat(value).toFixed(2);
    var textStartValue = config.valueCountUp ? config.minValue : textFinalValue;
    var percentText = config.displayPercent ? "%" : "";
    var circleThickness = config.circleThickness * radius;
    var circleFillGap = config.circleFillGap * radius;
    var fillCircleMargin = circleThickness + circleFillGap;
    var fillCircleRadius = radius - fillCircleMargin;
    var waveHeight = fillCircleRadius * waveHeightScale(fillPercent * 100);

    var waveLength = fillCircleRadius * 2 / config.waveCount;
    var waveClipCount = 1 + config.waveCount;
    var waveClipWidth = waveLength * waveClipCount;

    // Rounding functions so that the correct number of decimal places is always displayed as the value counts up.
    var textRounder = function (value) {
        return Math.round(value);
    };
    if (parseFloat(textFinalValue) != parseFloat(textRounder(textFinalValue))) {
        textRounder = function (value) {
            return parseFloat(value).toFixed(1);
        };
    }
    if (parseFloat(textFinalValue) != parseFloat(textRounder(textFinalValue))) {
        textRounder = function (value) {
            return parseFloat(value).toFixed(2);
        };
    }

    // Data for building the clip wave area.
    var data = [];
    for (var i = 0; i <= 40 * waveClipCount; i++) {
        data.push({
            x: i / (40 * waveClipCount),
            y: (i / (40))
        });
    }

    // Scales for drawing the outer circle.
    var gaugeCircleX = d3.scaleLinear().range([0, 2 * Math.PI]).domain([0, 1]);
    var gaugeCircleY = d3.scaleLinear().range([0, radius]).domain([0, radius]);

    // Scales for controlling the size of the clipping path.
    var waveScaleX = d3.scaleLinear().range([0, waveClipWidth]).domain([0, 1]);
    var waveScaleY = d3.scaleLinear().range([0, waveHeight]).domain([0, 1]);

    // Scales for controlling the position of the clipping path.
    var waveRiseScale = d3.scaleLinear()
    // The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
    // such that the it will won't overlap the fill circle at all when at 0%, and will totally cover the fill
    // circle at 100%.
    .range([(fillCircleMargin + fillCircleRadius * 2 + waveHeight), (fillCircleMargin - waveHeight)])
        .domain([0, 1]);
    var waveAnimateScale = d3.scaleLinear()
        .range([0, waveClipWidth - fillCircleRadius * 2]) // Push the clip area one full wave then snap back.
    .domain([0, 1]);

    // Scale for controlling the position of the text within the gauge.
    var textRiseScaleY = d3.scaleLinear()
        .range([fillCircleMargin + fillCircleRadius * 2, (fillCircleMargin + textPixels * 0.7)])
        .domain([0, 1]);

    // Center the gauge within the parent SVG.
    var gaugeGroup = gauge.append("g")
        .attr('transform', 'translate(' + locationX + ',' + locationY + ')');

    // Draw the outer circle.
    var gaugeCircleArc = d3.arc()
        .startAngle(gaugeCircleX(0))
        .endAngle(gaugeCircleX(1))
        .outerRadius(gaugeCircleY(radius))
        .innerRadius(gaugeCircleY(radius - circleThickness));
    gaugeGroup.append("path")
        .attr("d", gaugeCircleArc)
        .style("fill", config.circleColor)
        .attr('transform', 'translate(' + radius + ',' + radius + ')');

    // Text where the wave does not overlap.
    var text1 = gaugeGroup.append("text")
        .text(textRounder(textStartValue) + percentText)
        .attr("class", "liquidFillGaugeText")
        .attr("text-anchor", "middle")
        .attr("font-size", textPixels + "px")
        .style("fill", config.textColor)
        .attr('transform', 'translate(' + radius + ',' + textRiseScaleY(config.textVertPosition) + ')');

    // The clipping wave area.
    var clipArea = d3.area()
        .x(function (d) {
        return waveScaleX(d.x);
    })
        .y0(function (d) {
        return waveScaleY(Math.sin(Math.PI * 2 * config.waveOffset * -1 + Math.PI * 2 * (1 - config.waveCount) + d.y * 2 * Math.PI));
    })
        .y1(function (d) {
        return (fillCircleRadius * 2 + waveHeight);
    });
    var waveGroup = gaugeGroup.append("defs")
        .append("clipPath")
        .attr("id", "clipWave" + elementId);
    var wave = waveGroup.append("path")
        .datum(data)
        .attr("d", clipArea);

    // The inner circle with the clipping wave attached.
    var fillCircleGroup = gaugeGroup.append("g")
        .attr("clip-path", "url(#clipWave" + elementId + ")");
    fillCircleGroup.append("circle")
        .attr("cx", radius)
        .attr("cy", radius)
        .attr("r", fillCircleRadius)
        .style("fill", config.waveColor);

    // Text where the wave does overlap.
    var text2 = fillCircleGroup.append("text")
        .text(textRounder(textStartValue) + percentText)
        .attr("class", "liquidFillGaugeText")
        .attr("text-anchor", "middle")
        .attr("font-size", textPixels + "px")
        .style("fill", config.waveTextColor)
        .attr('transform', 'translate(' + radius + ',' + textRiseScaleY(config.textVertPosition) + ')');

    // Make the value count up.
    if (config.valueCountUp) {
        var textTween = function () {
            var i = d3.interpolate(this.textContent, textFinalValue);
            return function (t) {
                this.textContent = textRounder(i(t)) + percentText;
            }
        };
        text1.transition()
            .duration(config.waveRiseTime)
            .tween("text", textTween);
        text2.transition()
            .duration(config.waveRiseTime)
            .tween("text", textTween);
    }
    // function translate() {
    //         wave.attr('transform', 'translate(1,0)');
    //     }; // This transform is necessary to get the clip wave positioned correctly when waveRise=true and waveAnimate=false. The wave will not position correctly without this, but it's not clear why this is actually necessary.

    // Make the wave rise. wave and waveGroup are separate so that horizontal and vertical movement can be controlled independently.
    var waveGroupXPosition = fillCircleMargin + fillCircleRadius * 2 - waveClipWidth;
    if (config.waveRise) {
        waveGroup.attr('transform', 'translate(' + waveGroupXPosition + ',' + waveRiseScale(0) + ')')
            .transition()
            .duration(config.waveRiseTime)
            .attr('transform', 'translate(' + waveGroupXPosition + ',' + waveRiseScale(fillPercent) + ')')
            .each("start",translate)
    } else {
        waveGroup.attr('transform', 'translate(' + waveGroupXPosition + ',' + waveRiseScale(fillPercent) + ')');
    }

    if (config.waveAnimate) animateWave();

    function animateWave() {
        wave.transition()
            .duration(config.waveAnimateTime)
            .ease("linear")
            .attr('transform', 'translate(' + waveAnimateScale(1) + ',0)')
            .each("end", function () {
            wave.attr('transform', 'translate(' + waveAnimateScale(0) + ',0)');
            animateWave(config.waveAnimateTime);
        });
    }
}