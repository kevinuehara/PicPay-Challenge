import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Output() clickEvent: EventEmitter<any>  = new EventEmitter<any>();
  @Input() label: string;
  @Input() id: string;
  @Input() disabled: boolean;

  public click() {
    this.clickEvent.emit(); 
  }
}
