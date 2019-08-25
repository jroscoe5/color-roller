import { Component, OnInit } from '@angular/core';
import { RollService } from '../roll.service';
import { Roll } from './roll';

@Component({
  selector: 'app-roll',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.css']
})

export class RollComponent implements OnInit {

  rolls: Roll[];
  reRolls: Roll[];

  constructor(private rollService: RollService) { }

  ngOnInit() {
  }

  getRolls(username: string, num: number){
    this.rolls = [];
    this.reRolls = [];
    if(!username) username = 'lazy_user';
    username.replace('/','')
    let rolls: number[];
    this.rollService.getRoll(username, num).subscribe(res => {
      rolls = res;
      }, null, () =>{
        console.log(rolls);
        rolls.forEach(roll => {
          this.rolls.push(new Roll(roll, false));
      });
    });
  }

  selectRoll(roll:Roll){
    if(!roll.selected){

      let oldRR = [];
      this.reRolls.forEach(r => {
          oldRR.push(r);
        });
      oldRR.push(roll);
      this.reRolls = oldRR;

      let oldR = [];
      this.rolls.forEach(r =>{
        if(r != roll)
          oldR.push(r);
      });
      this.rolls = oldR;

    } else{

      let oldRR = [];
      this.reRolls.forEach(r => {
        if (r != roll)
          oldRR.push(r);
      });
      this.reRolls = oldRR;

      let oldR = [];
      this.rolls.forEach(r => {
          oldR.push(r);
      });
      oldR.push(roll);
      this.rolls = oldR;

    }
    roll.selected = !roll.selected;
    console.log(roll.selected);
  }

  reRoll(username:string){
    if (!username) username = 'lazy_user';
    username.replace('/', '')

    let oldR = [];
    this.rolls.forEach(r => {
      oldR.push(r);
    });

    let size = this.reRolls.length;
    if(size == 0) return;
    let rolls: number[];
    this.rollService.getRoll(username, size).subscribe(res => 
      {
        rolls = res;
      }, null, () => {
      console.log(rolls);
      rolls.forEach(roll => {
        oldR.push(new Roll(roll, false));
      });
    });

    this.rolls = oldR;
    this.reRolls = [];
  }
}
