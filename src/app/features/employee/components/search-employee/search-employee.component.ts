import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-employee',
  imports: [],
  templateUrl: './search-employee.component.html',
  styles: ``
})
export class SearchEmployeeComponent {

  @Output() query = new EventEmitter()

  onQuerySubmit(query: string){
    this.query.emit(query)
  }
}
