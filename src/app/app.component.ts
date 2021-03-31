import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'twoWayBinding';

  input_value: number = 0;
  radio_value: string;
  result: any;

  getResult(): any {
    if (this.radio_value == "Centigrade") {
      this.result = this.input_value * (9 / 5) + 32;
    } else if (this.radio_value == "Fahrenheit") {
      this.result = (this.input_value - 32) * (5 / 9);
    } else {
      this.result = "Invalid Input";
    }
    return this.result;
  }
}
