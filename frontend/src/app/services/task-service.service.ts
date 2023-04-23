import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UseQuery } from '@ngneat/query';

interface Todo {
    id:string
    description:string
    title:string
}

@Injectable({ providedIn: 'root' })
export class TaskService {
  private http = inject(HttpClient);
  private useQuery = inject(UseQuery);

  getTodos() {
    return this.useQuery(['todos'], () => {
      return this.http.get<Todo[]>(
        'http://localhost:8080/api/tasks'
      );
    });
  }

  getTodo(id: number) {
    return this.useQuery(['todo', id], () => {
      return this.http.get<Todo>(
        `http://localhost:8080/api/tasks/${id}`
      );
    });
  }
}