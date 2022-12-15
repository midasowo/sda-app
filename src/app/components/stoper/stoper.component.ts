import { Component } from '@angular/core';
import { Round, Result } from 'src/app/models/app-models';

@Component({
  selector: 'app-stoper',
  templateUrl: './stoper.component.html',
  styleUrls: ['./stoper.component.css']
})
export class StoperComponent {
  public seconds = 0;
  public decSeconds = 0;
  public isActive = false;
  public rounds: Round[] = [];
  public results: Result[] = [];
  public userName = "";

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

  public saveResult(): void {
    if(this.userName) {
    this.results.push({
      userName: this.userName,
      seconds: this.seconds,
      decSeconds: this.decSeconds,
    });
    }
    this.userName = "";
  }
}
