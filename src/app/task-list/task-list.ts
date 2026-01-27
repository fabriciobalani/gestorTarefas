import { Component } from '@angular/core';
import { TaskFilter } from "../task-filter/task-filter";
import { TaskService } from '../services/task-service';
import { Task } from '../models/task';
import { CommonModule, NgForOf } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-task-list',
  imports: [TaskFilter, NgForOf, CommonModule, FormsModule, RouterModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {

  constructor(private taskService: TaskService){ }

  tasks: Array<Task> = [];

  newTask = new Task();

  ngOnInit() {
    this.tasks = this.taskService.getTasks();

  }

  addTask(){

    this.taskService.addtask(this.newTask);

    this.newTask = new Task();    
  }

  removeTask(task: Task){

    this.taskService.removeTask(task);    
  }

  updateTask(){
    
    this.taskService.updateTasks();
  }

  filterTasks(filter: string){

    if(filter != ''){
      this.tasks = this.tasks.filter(c => c.name.includes(filter));
    }
    else{
      this.tasks = this.taskService.getTasks();
    }
  }

}
