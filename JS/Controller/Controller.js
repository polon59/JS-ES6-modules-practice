import {Application} from "../Application.js";

export class Controller{

    constructor(){
        this.app = new Application();
        this.button = $("#calculteButton");
        this.initializeEventListeners();
    }

    initializeEventListeners(){
        this.button.click(this.app.handleApp());
    }

    provideDataForCalculation(){
        // change to get input from form
        let numbers = [5,9];
        return numbers;
    }
}