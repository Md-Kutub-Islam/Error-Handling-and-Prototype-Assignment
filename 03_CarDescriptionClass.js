// 3. Car Description Class.
// Create a class called Car with three properties: company, model, and year. The class should have a method
// called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an
// instance of the Car class and call the getDescription method.

class car{
    constructor(company, model, year){
        this.company = company;
        this.model = model;
        this.year = year;
    }
    

    getDescription(){
        console.log(`This is a ${this.year} ${this.company} ${this.model}.`);
    }
}

const myCar = new car('Skoda','Rapid', 2022)

console.log(myCar.getDescription());