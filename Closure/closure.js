var carName="glanza"
/**
 * 
 */
function detailsOfCar() {
    var carManufcture="toyota"
    /**
     * local closure
     */
    function carCost() {
       var cost=1400000
        console.log(carManufcture+" bulit the car "+carName+" and the cost of the car is "+cost);
    }
    carCost()
}
detailsOfCar()