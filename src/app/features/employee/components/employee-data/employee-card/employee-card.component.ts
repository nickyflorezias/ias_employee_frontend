import { Component, inject, input } from '@angular/core';
import { Employee } from '@features/employee/interfaces/employee.interface';
import { EmployeeService } from '@features/employee/services/employee.service';
import { ImageProfilePipe } from '@shared/pipes/image-profile.pipe';

@Component({
  selector: 'app-employee-card',
  imports: [
    ImageProfilePipe
  ],
  templateUrl: './employee-card.component.html',
  styles: ``
})
export class EmployeeCardComponent {
  employeeService = inject(EmployeeService)
  employees = input.required<Employee[]>()
}
