import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public licznik = 0;
  public myName = "";
  
  public onClick(): void {
    const myNameInput = document.getElementById("myName") as HTMLInputElement;
    this.myName = myNameInput.value;
  }

}
