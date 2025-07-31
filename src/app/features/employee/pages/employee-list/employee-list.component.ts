import { Component, computed, inject, linkedSignal, OnInit, signal } from '@angular/core';
import { EmployeeService } from '@features/employee/services/employee.service';
import { NavigationComponent } from '@shared/components/navigation/navigation.component';
import { PaginationService } from '@shared/services/pagination.service';
import { FilterActivePipe } from 'src/app/shared/pipes/filter-active.pipe';
import { Employee } from '@features/employee/interfaces/employee.interface';
import { EmployeeDataComponent } from "@features/employee/components/employee-data/employee-data.component";
import { Router } from '@angular/router';
import { SelectCantComponent } from "@features/employee/components/select-cant/select-cant.component";
import { SearchEmployeeComponent } from "@features/employee/components/search-employee/search-employee.component";
import { ThemesService } from '@shared/services/themes.service';


@Component({
  selector: 'app-employee-list',
  imports: [FilterActivePipe, NavigationComponent, EmployeeDataComponent, SelectCantComponent, SearchEmployeeComponent],
  templateUrl: './employee-list.component.html',
  styles: ``
})
export class EmployeeListComponent implements OnInit
{
  ngOnInit(): void {
    this.employeeService.getAllEmployees()
  }

  employeeService = inject(EmployeeService)
  router = inject(Router)
  paginationSerice = inject(PaginationService)
  themeService = inject(ThemesService)
  employees = linkedSignal(this.employeeService.employees)

  wantFilter = signal(false)
  cantItems = signal<number>(9)

  querySearch = signal('')
  itemsCountStart = linkedSignal(() => this.paginationSerice.currentPage() === 1 ? this.paginationSerice.currentPage() - 1 : (this.paginationSerice.currentPage() - 1))

  filteredEmployees = computed(() =>
    this.employees()
      .filter((emp: Employee) => emp.fullName.toLowerCase().includes(this.querySearch().toLowerCase())
      )
  );

  employeesPaginated = computed(() =>
    this.filteredEmployees()
      .slice(this.itemsCountStart() * this.cantItems(), this.cantItems() * this.paginationSerice.currentPage())
  );

  cantPages = computed(() =>
    Math.ceil(this.filteredEmployees().length / this.cantItems())
  );
}
