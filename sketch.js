function setup() {
  // put setup code here
  //createCanvas(200,200);
  loadJSON('https://opendurham.nc.gov/api/v2/catalog/datasets/police-traffic-stops-by-gender-and-race/exports/json', gotData);
  loadJSON('https://opendurham.nc.gov/api/v2/catalog/datasets/durham-county-demographic-profile/exports/json',gotData2);
}

function gotData(data) {
	var chart = new CanvasJS.Chart("chartContainer2", {
		theme: "dark1", // "light2", "dark1", "dark2"
		animationEnabled: false, // change to true		
		title:{
			text: "2014 Durham, NC police traffic stops by male ethnicity"
		},
		axisY:{
          minimum: 0,
          maximum: 100,
          valueFormatString: "# '%'"      
        },
		data: [
		{
			// Change type to "bar", "area", "spline", "pie",etc.
			type: "column",
			dataPoints: [
				{ label: "hispanic",  y: (data[0].hispanic/data[0].totalstopped)*1000 },
				{ label: "black",  y: (data[0].black/data[0].totalstopped)*1000 },
				{ label: "native american",  y: (data[0].native_american/data[0].totalstopped)*1000 },
				{ label: "white",  y: (data[0].white/data[0].totalstopped)*1000 },
				{ label: "asian",  y: (data[0].asian/data[0].totalstopped)*1000 },
			]
		}
		]
	});
	chart.render();
}

function gotData2(data2){
	var res = data2[17].people_quickfacts.split(",");
	var res1 = data2[2].people_quickfacts.split(",")
	var res2 = data2[45].people_quickfacts.split(",")
	var res3 = data2[15].people_quickfacts.split(",")
	var res4 = data2[46].people_quickfacts.split(",")

	var demchart = new CanvasJS.Chart("chartContainer", {
	theme: "dark1", // "light2", "dark1", "dark2"
	animationEnabled: false, // change to true		
	title:{
		text: "2013 Durham, NC reported demographics"
	},
	axisY:{
      minimum: 0,
      maximum: 100,
      valueFormatString: "# '%'"
    },
	data: [
	{
		// Change type to "bar", "area", "spline", "pie",etc.
		type: "column",
		dataPoints: [
			{ label: res[0],  y: parseFloat(data2[17].north_carolina)},
			{ label: res1[0],  y: parseFloat(data2[2].north_carolina)},
			{ label: res2[0],  y: parseFloat(data2[45].north_carolina)},
			{ label: res3[0],  y: parseFloat(data2[15].north_carolina)},
			{ label: res4[0],  y: parseFloat(data2[46].north_carolina)},
		]
	}
	]
});
demchart.render();
}



