import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'select-cant',
  imports: [],
  templateUrl: './select-cant.component.html',
  styles: ``
})
export class SelectCantComponent {

  @Output() value = new EventEmitter<number>()

  onEmitValue(value: number){
    this.value.emit(value)
  }
}
