import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  private tasks: Array<Task> = [];

  getTasks(): Array<Task> {

    this.tasks = this.getFromLocalStorage();

    return this.tasks;
  }

  getById(id: number): Task | undefined {

    const task = this.tasks.find(c => c.id === id);

    return task;
  }

  addtask(task: Task) {

    //implementado ajuste na geração do Id

    const timestamp = Date.now().toString().slice(-10); // Últimos 10 dígitos do tempo

    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');

    task.id = parseInt(timestamp + random);

    this.tasks.push(task);

    this.saveToLocalStorage();
  }

  updateTasks() {

    this.saveToLocalStorage();
  }

  removeTask(task: Task) {

    const index = this.tasks.indexOf(task);

    if (index !== -1) {

      //achou
      this.tasks.splice(index, 1);

      this.saveToLocalStorage();
    }

  }

  private saveToLocalStorage() {

    const tasksJSON = JSON.stringify(this.tasks);

    localStorage.setItem('tasks', tasksJSON);
  }

  private getFromLocalStorage(): Array<Task> {

    const tasksJSON = localStorage.getItem('tasks');

    if (!tasksJSON) {

      return new Array<Task>();
    }

    return JSON.parse(tasksJSON);
  }
}