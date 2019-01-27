export class Controller{

    constructor(application){
        this.app = application;
    }

    initializeEventListeners(){
        $("#calculateButton").on("click",this.app.handleApp());
    }

    provideDataForCalculation(){
        // change to get input from form
        let numbers = [5,9];
        return numbers;
    }
}