import { Component, OnInit } from '@angular/core';
import { Goal } from "../goal";

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
   
  ];

  toggleDetails(index: number){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  addNewGoal(goal:Goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  deleteGoal(isComplete:boolean, index:number){
    if (isComplete) {
      let toDelete= confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      if (toDelete) {
        this.goals.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
