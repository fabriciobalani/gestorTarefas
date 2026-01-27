import { Routes } from '@angular/router';
import { TaskDetails } from './task-details/task-details';
import { TaskFilter } from './task-filter/task-filter';
import { TaskList } from './task-list/task-list';

export const routes: Routes = [
    {path: 'taskList', title: 'Lista de Tarefas', component: TaskList},
    {path: 'taskDetails/:id', title: 'Detalhes da tarefa', component: TaskDetails},    
    {path:'', redirectTo: '/taskList', pathMatch: 'full'}
    
];


