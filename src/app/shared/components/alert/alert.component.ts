import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit {
  @Input() message: string;
  @Output() close = new EventEmitter<void>();
  alertTop: string = '30%';
  alertLeft: string = '40%';

  constructor() { }

  ngOnInit(): void {
    this.calculatePosition();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.calculatePosition();
  }

  calculatePosition() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const alertHeight = 200;
    const alertWidth = 400;

    const top = (windowHeight - alertHeight) / 2;
    const left = (windowWidth - alertWidth) / 2;

    this.alertTop = top + 'px';
    this.alertLeft = left + 'px';
  }

  onClose() {
    this.close.emit();
  }
}
