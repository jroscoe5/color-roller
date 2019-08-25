export class Roll {
    value: number;
    selected: boolean;
    style:string;
    constructor(init: number, state: boolean) {
        this.value = init;
        this.selected = state;
        if(this.value == 6){
            this.style = "#f14e4e";
        }
        else if(this.value > 3){
            this.style = "#4e9af1";
        }
        else{
            this.style = "#175707";
        }
    }
};