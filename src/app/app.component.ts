import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public firstNumber = 0;
  public secondNumber = 0;
  public result: number = 0;
  
  public onClick(): void {
    this.result = this.firstNumber + this.secondNumber;
  }

}
