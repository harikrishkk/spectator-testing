import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() btnClass: string = '';
  @Output() onBtnClick = new EventEmitter<boolean>();
  btnText = 'Save';
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.onBtnClick.emit(true);
    setTimeout(() => {
      this.btnText = 'Update';
    }, 2000);
  }
}
