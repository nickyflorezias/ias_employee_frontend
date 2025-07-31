import { inject, Injectable, signal } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private router = inject(Router)
  private http = inject(HttpClient)

  employees = signal<Employee[]>([])

  getAllEmployees() {
    console.log('Getting users...');
    return this.http.get<Employee[]>(`${environment.BASE_URL}/employee`)
      .subscribe((resp) => {
        console.log({ resp });
        this.employees.set(resp)
      })
  }

  updateEmployeeStatus(id: string) {
    return this.http.put<Employee>(`${environment.BASE_URL}/employee/${id}`, {})
      .pipe(
        tap((_) => this.getAllEmployees())
      )
      .subscribe();
  }

  createNewEmployee(employee: Employee) {
    return this.http.post<Employee>(`${environment.BASE_URL}/employee`, {
      id: employee.id,
      fullName: employee.fullName,
      country: employee.country,
      responsibility: employee.responsibility,
      birthDate: employee.birthDate,
      picture: employee.picture,
      status: employee.status
    })
      .pipe(
        tap((_) => this.router.navigateByUrl("/employee/listpage"))
      )
      .subscribe();
  }
}
