import { Component, inject, input } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { EmployeeService } from '@features/employee/services/employee.service';
import { HoverBorderBlue } from '@features/employee/directives/hover-blue.directive';
import { HoverTitleDirective } from '@features/employee/directives/hover-title.directive';
import { Employee } from '@features/employee/interfaces/employee.interface';
import { ProfileImageListPipe } from '@shared/pipes/profile-image-list.pipe';

@Component({
  selector: 'app-employee-table',
  imports: [
    DatePipe,
    HoverTitleDirective,
    ProfileImageListPipe,
    TitleCasePipe,
    HoverBorderBlue,
],
  templateUrl: './employee-table.component.html',
  styles: ``
})
export class EmployeeTableComponent{

  employeeService = inject(EmployeeService)
  employees = input.required<Employee[]>()
}
