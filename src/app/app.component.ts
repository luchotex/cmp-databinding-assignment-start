import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberElements = [];

  onEvenAdded(evenData: { numberValue: number }) {
    this.numberElements.push({
      type: 'even',
      numberValue: evenData.numberValue
    });

  }

  onOddAdded(oddData: { numberValue: number }) {
    this.numberElements.push({
      type: 'odd',
      numberValue: oddData.numberValue
    });
  }
}
