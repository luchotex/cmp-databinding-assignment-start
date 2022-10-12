import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  numbers = 0;
  myInterval;
  @Output() evenCreated = new EventEmitter<{ numberValue: number }>();
  @Output() oddCreated = new EventEmitter<{ numberValue: number  }>();

  constructor() {
  }

  ngOnInit(): void {
  }

  startInterval() {
    this.myInterval = setInterval(() => {
      this.numbers++;
      if (this.numbers % 2 == 0) {
        this.evenCreated.emit({numberValue: this.numbers});
      } else {
        this.oddCreated.emit({numberValue: this.numbers});
      }
    }, 1000);
  }

  stopInterval() {
    clearInterval(this.myInterval);
  }
}
