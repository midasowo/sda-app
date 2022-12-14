import { Component } from '@angular/core';
import { Round } from './models/app-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public seconds = 0;
  public decSeconds = 0;
  public isActive = false;
  public rounds: Round[] = [];

  private intervalId: NodeJS.Timer | undefined;
  
  
  public startStoper(): void {
    this.isActive = true;
    this.intervalId = setInterval(() =>{
      this.decSeconds++;
      if(this.decSeconds === 10){
        this.seconds++;
        this.decSeconds = 0;
      }
    }, 100);
  }

  public stopStoper(): void {
    this.isActive = false;
    if(this.intervalId)
    clearInterval(this.intervalId);
  }

  public resetStoper(): void {
    this.isActive = false;
    this.seconds = 0;
    this.decSeconds = 0;
    this.rounds = [];
  }

  public addRound(): void {
    this.rounds.push({
      seconds: this.seconds,
      decSeconds: this.decSeconds
    })
  }

}
