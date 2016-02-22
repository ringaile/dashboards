var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};

	var pieDataStandup = [
				{
					value: 33,
					color:"#30a5ff",
					highlight: "#62b9fb",
					label: "Blue"
				},
				{
					value: 67,
					color: "#ffb53e",
					highlight: "#fac878",
					label: "Orange"
				},

			];
			
	var doughnutDataStandup = [
					{
						value: 50,
						color:"#30a5ff",
						highlight: "#62b9fb",
						label: "Blue"
					},
					{
						value: 50,
						color: "#ffb53e",
						highlight: "#fac878",
						label: "Orange"
					},

	
				];

				
window.onload = function(){

	var chart3 = document.getElementById("doughnut-chart-standup").getContext("2d");
	window.myDoughnut = new Chart(chart3).Doughnut(doughnutDataStandup, {responsive : true
	});
	var chart4 = document.getElementById("pie-chart-standup").getContext("2d");
	window.myPie = new Chart(chart4).Pie(pieDataStandup, {responsive : true
	});

	
};