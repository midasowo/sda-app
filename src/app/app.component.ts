import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public seconds = 0;
  public decSeconds = 0;

  private intervalId: NodeJS.Timer | undefined;
  
  public startStoper(): void {
    this.intervalId = setInterval(() =>{
      this.decSeconds++;
      if(this.decSeconds === 10){
        this.seconds++;
        this.decSeconds = 0;
      }
    }, 100);
  }

  public stopStoper(): void {
    if(this.intervalId)
    clearInterval(this.intervalId);
  }

  public resetStoper(): void {
    this.seconds = 0;
    this.decSeconds = 0;
  }

}
