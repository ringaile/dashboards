var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};

			
		
	var barChartData = {
			labels : ["Step1","Step2","Step3","Step4","Step5","Step6","Step7", "Step8"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,0.8)",
					highlightFill: "rgba(220,220,220,0.75)",
					highlightStroke: "rgba(220,220,220,1)",
					data : [0.05 ,0.5,8,16,16,8,4,2]
				},
				{
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 0.8)",
					highlightFill : "rgba(48, 164, 255, 0.75)",
					highlightStroke : "rgba(48, 164, 255, 1)",
					data : [0.05, 0.5 ,0.5,16,1,0,0,]
				}
			]
	
		}

			var pieData = [
				{
					value: 20.05,
					color:"#30a5ff",
					highlight: "#62b9fb",
					label: "Blue"
				},
					{
						value: 79.95,
						color: "#ffb53e",
						highlight: "#fac878",
						label: "Orange"
					},

			];

window.onload = function(){

	var chart2 = document.getElementById("bar-chart").getContext("2d");
	window.myBar = new Chart(chart2).Bar(barChartData, {
		responsive : true
	});
		var chart4 = document.getElementById("pie-chart").getContext("2d");
	window.myPie = new Chart(chart4).Pie(pieData, {responsive : true
	});
	
};