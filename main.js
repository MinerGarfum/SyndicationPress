/**
Syndication Press
**/

function u(thing) { return document.getElementById(thing); }

Game = {};

Game.money = 0;
Game.jobs = 0;
Game.staff = 1;

Game.version = "0.0.1";

Game.companyName = "Your Company Name Here.";

u("name").innerHTML = Game.companyName;

/**Seasons and Holidays

Holidays:
0 = no holiday
1 = New Years Day
2 = 

Seasons:
0 = Winter
1 = Spring
2 = Summer
3 = Fall

	
Date = {};

Date.month = getMonth();
Date.day = getDate();

if (Date.month === 0 && Date.day === 1) {
	Date.holiday = 1;
}**/

Items = [];
Item = function(name,desc,image,price)
{
	this.name = name;
	this.desc = desc;
	this.image = image;
	this.price = price;

	Items[name]=this;
}

new Item("Basic newspaper press","A basic newspaper press for your basic needs.","BasicPress.png",100);
new Item("Newspaper press","A reagular newspaper press.","",250);
new Item("Advanced newspaper Press","A advanced newspaper press for projects that\nrequire a lot of printing, ex:newspapers","",1000);

Game.changeCompanyName = function () {
    Game.companyName = prompt("New Company Name", Game.companyName);
    u("name").innerHTML = Game.companyName;
}
Game.addMoney = function(amount)
{
	Game.money += amount;
	amount = 0;
}

/**Monokai**/