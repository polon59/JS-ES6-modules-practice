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
}