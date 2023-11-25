import { Component,  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-section',
  templateUrl: './input-section.component.html',
  styleUrl: './input-section.component.css'
})
export class InputSectionComponent {
  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();
  userName: string = '';

  emitNameChange() {
    this.nameChange.emit(this.userName);}
}
