import { Component, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '@auth/utils/form-utils';
import { Country, Employee } from '@features/employee/interfaces/employee.interface';
import { EmployeeService } from '@features/employee/services/employee.service';
import { ImageProfilePipe } from '@shared/pipes/image-profile.pipe';

@Component({
  selector: 'app-employee-form',
  imports: [
    ImageProfilePipe,
    ReactiveFormsModule,
  ],
  templateUrl: './employee-form.component.html',
  styles: ``
})
export class EmployeeFormComponent {

  private fb = inject(FormBuilder)
  private employeeService = inject(EmployeeService)
  formUtils = FormUtils

  employeeForm = this.fb.group({
    document: ['', Validators.required],
    fullName: ['', Validators.required],
    country: ['', Validators.required],
    responsability: ['', Validators.required],
    year: [0, [Validators.required, Validators.min(1900)]],
    month: [0, [Validators.required, Validators.min(1), Validators.max(12)]],
    day: [0, [Validators.required, Validators.min(1), Validators.max(31)]],
    picture: ['']
  })

  countries: Country[] = [
    'Colombia', 'USA', 'Mexico', 'Canada', 'Spain',
    'South Korea', 'Germany', 'Russia', 'Vietnam'
  ];

  image = signal('')

  OnFileChange(event: Event) {
    const fileList = (event.target as HTMLInputElement).files
    const imageUrl = Array.from(fileList ?? []).map((file) =>
      URL.createObjectURL(file)
    )
    this.image.set(imageUrl[0])
  }

  registerUser(partial: any){
    const newEmployee: Employee = {
      id: partial.document,
      fullName: partial.fullName,
      country: partial.country,
      birthDate: new Date(partial.year, partial.month, partial.day),
      picture: this.image(),
      responsibility: partial.responsability,
      status: 'Active'
    }

    this.employeeService.createNewEmployee(newEmployee)
  }
}
