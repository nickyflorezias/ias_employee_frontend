import { Component, inject, input, linkedSignal, OnChanges, signal, SimpleChanges } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { EmployeeService } from '@features/employee/services/employee.service';
import { HoverBorderBlue } from '@features/employee/directives/hover-blue.directive';
import { HoverTitleDirective } from '@features/employee/directives/hover-title.directive';
import { ImageProfilePipe } from '@shared/pipes/image-profile.pipe';
import { Employee } from '@features/employee/interfaces/employee.interface';

@Component({
  selector: 'app-employee-table',
  imports: [
    DatePipe,
    HoverTitleDirective,
    ImageProfilePipe,
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
