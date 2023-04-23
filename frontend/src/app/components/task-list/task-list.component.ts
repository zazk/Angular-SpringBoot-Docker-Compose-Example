import { NgForOf, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubscribeDirective } from '@ngneat/subscribe';
import { TaskService } from 'src/app/services/task-service.service';

@Component({
  standalone: true,
  imports: [NgIf, NgForOf, SubscribeDirective, RouterModule],
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  apiService = inject(TaskService);
  characters$ = this.apiService.getTodos().result$;
}