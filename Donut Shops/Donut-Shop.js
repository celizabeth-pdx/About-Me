//adding a couple functions to Global Scope

function myRandomNum(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
};


//Now I will use the random number I have generated above for the random customers per hour.
function getCustPerHour(hours, min, max) 
		{ var custPerHour = new Array(hours); 
			for (var index =0; index < hours; index++){
			custPerHour[index] = myRandomNum(min,max);
			}
			console.log("cust per hour" + custPerHour);
			return custPerHour;
		
		};
//Bake per hour function

	function getDonpHr(cust, avgSale)
	{
		var donpHr = new Array(cust);
		for (var index = 0; index<cust; index++)
		{
			donpHr[index] = Math.ceil(avgSale * cust[index]);
		}
		return donpHr;
	};

//Now the we know how many donuts to make per hour, let's add them up to get the daily total.

function getTotal(donuts){
	var donsPerDay = 0;
	for (var index = 0; index < donuts; index++){
		donsPerDay += donuts[index];
	}
	return donsPerDay;
};



//setting up my Shop Object
function Shop(location, hours, custSlow, custRush, avgSale)
{
	this.location = location;
	this.hours = hours;
	this.custSlow = custSlow; //minimum customers per hour (slow hour)
	this.custRush = custRush; //maximum customers per hour (rush hour)
	this.avgSale = avgSale;
	
//use the random function and the slow/rush parameters to calculate the random customers
this.avgCust = getCustPerHour(this.hours, this.custSlow, this.custRush);
console.log(this.location + ", Customers per hour: " + this.avgCust);

//Donuts to bake per hour:
this.donpHr = getDonpHr(this.avgCust, this.avgSale)
console.log(this.location + ", Donuts to bake per hour: " + this.donpHr);

//Daily donut production:
this.dailyProduction = getTotal(this.donpHr);
console.log(this.location + ", Daily Production of Donuts: " + this.dailyProduction);

function buildTable(Shop){
	$table = $("<table></table>");
	$tbody = $("<tbody></tbody>");
		for(index=0; index<this.hours; index++){
			$tr=$("<tr></tr>");
			$td = $("<td>"+ this.hours[index]+ "</td>");
			$tr.append($td);
			$td = $("<tr>" + this.avgCust[index]+"</td>");
			$tr.append($td);
			$td = $("<td>" + this.donpHr + "</td>");

			$tbody.append($tr);
		}
		$table.append($tbody);
		return $table.html();
}};



//building all my shops
var downtown = new Shop('Downtown', 8, 8, 48, 4.25);
var capitolHill = new Shop('Capitol Hill', 24, 4, 37, 2.00);
var southLakeUnion = new Shop('South Lake Union', 10, 9, 23, 6.33);
var wedgewood = new Shop('Wedgewood', 7, 2, 28, 1.25);
var ballard = new Shop('Ballard', 10, 8, 58, 3.75);



//console.log(myRandomNum(8,100) + " oh, hey");
//console.log(getCustPerHour(8,3,40)+ " hello there");
console.log(getCustPerHour(8, 8,48));
document.write(buildTable(downtown));

