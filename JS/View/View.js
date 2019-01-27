export class View {

    constructor(){
        this.resultDiv = $("#result");
    }
    
    displayCalculationResult(result){
        this.resultDiv.html(`Your result is: ${result}`);
    }

}