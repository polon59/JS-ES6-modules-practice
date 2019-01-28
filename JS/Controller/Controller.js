export class Controller{

    constructor(application){
        this.app = application;
    }

    initializeEventListeners(){
        let application = this.app;
        document.getElementById("calculateButton").addEventListener('click', function(){application.handleApp()});
    }

    provideDataForCalculation(){
        // change to get input from form
        let numbers = [5,9];
        return numbers;
    }
}