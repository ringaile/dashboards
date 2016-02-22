var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};

		
	var barChartData = {
			labels : ["Effort and Time Savings"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,0.8)",
					highlightFill: "rgba(220,220,220,0.75)",
					highlightStroke: "rgba(220,220,220,1)",
					data : [83]
				},
				{
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 0.8)",
					highlightFill : "rgba(48, 164, 255, 0.75)",
					highlightStroke : "rgba(48, 164, 255, 1)",
					data : [88]
				}
			]
	
		}

			var barChartData1 = {
			labels : ["Reduction in execution time"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,0.8)",
					highlightFill: "rgba(220,220,220,0.75)",
					highlightStroke: "rgba(220,220,220,1)",
					data : [91]
				},
				{
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 0.8)",
					highlightFill : "rgba(48, 164, 255, 0.75)",
					highlightStroke : "rgba(48, 164, 255, 1)",
					data : [85]
				},
				{
					fillColor : "rgba(0, 119, 255, 0.2)",
					strokeColor : "rgba(0, 119, 255, 0.8)",
					highlightFill : "rgba(0, 119, 255, 0.75)",
					highlightStroke : "rgba(0, 119, 255, 1)",
					data : [77]
				}
			]
	
		}

			var barChartData2 = {
			labels : ["Reduction in Total time"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,0.8)",
					highlightFill: "rgba(220,220,220,0.75)",
					highlightStroke: "rgba(220,220,220,1)",
					data : [93]
				},
				{
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 0.8)",
					highlightFill : "rgba(48, 164, 255, 0.75)",
					highlightStroke : "rgba(48, 164, 255, 1)",
					data : [95]
				},
				{
					fillColor : "rgba(0, 119, 255, 0.2)",
					strokeColor : "rgba(0, 119, 255, 0.8)",
					highlightFill : "rgba(0, 119, 255, 0.75)",
					highlightStroke : "rgba(0, 119, 255, 1)",
					data : [81]
				}
			]
	
		}

window.onload = function(){

	var chart2 = document.getElementById("bar-chart").getContext("2d");
	window.myBar = new Chart(chart2).Bar(barChartData, {
		responsive : true
	});

	var chart2 = document.getElementById("bar-chart1").getContext("2d");
	window.myBar = new Chart(chart2).Bar(barChartData1, {
		responsive : true
	});

	var chart2 = document.getElementById("bar-chart2").getContext("2d");
	window.myBar = new Chart(chart2).Bar(barChartData2, {
		responsive : true
	});
};