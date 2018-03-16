function listItems () {
    var vacationPlanner = function(city,days,miles,season){
        this.dailyCosts = 500;
        this.flightCostPerMile = 3;
        this.city = city;
        this.days = days;
        this.miles = miles;
        this.season = season;
        this.calculateTotalCost = function(){
            var totalCost = (this.dailyCosts * this.days) + (this.flightCostPerMile * this.miles);
            if(this.season == true){
                totalCost *= 1.2;
            }
            return totalCost
        };
        this.totalCost = this.calculateTotalCost();
        this.printInfo = function() {
            console.log("Your vacation to " + this.city + " will cost "+ this.totalCost);
        }
    };

    Seattle = new vacationPlanner("Seattle",7,850,true);
    Houston = new vacationPlanner("Houston",4,1900,false);
    LA = new vacationPlanner("Los Angeles",3,500,true);
    NY = new vacationPlanner("New York",5,2900,false);

    var vacations = [Seattle,Houston,LA,NY];

    for(var i = 0; i < vacations.length; i++){
        vacations[i].printInfo();
    }
}