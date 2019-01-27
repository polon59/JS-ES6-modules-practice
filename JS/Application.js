import {Calculator} from "/JS/Model/Calculator.js";
import {View} from "/JS/View/View.js";
import {Controller} from "/JS/Controller/Controller.js";


export class Application{

    constructor(){
        this.controller = new Controller(this);
        this.view = new View();
        this.calculator = new Calculator();
        this.controller.initializeEventListeners();
    }

    handleApp(){
        let numbers = this.controller.provideDataForCalculation();
        let sum = this.calculator.calculateSumOfGivenNumbers(numbers);
        this.view.displayCalculationResult(sum);
    }
}