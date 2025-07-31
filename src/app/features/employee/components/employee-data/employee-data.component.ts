import { Component, inject, input } from '@angular/core';
import { Employee } from '@features/employee/interfaces/employee.interface';
import { EmployeeService } from '@features/employee/services/employee.service';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { EmployeeTableComponent } from "./employee-table/employee-table.component";

@Component({
  selector: 'app-employee-data',
  imports: [EmployeeCardComponent, EmployeeTableComponent],
  templateUrl: './employee-data.component.html',
  styles: ``
})
export class EmployeeDataComponent {
  employeeService = inject(EmployeeService)
  employees = input.required<Employee[]>()
}
