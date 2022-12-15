import { Component } from '@angular/core';
import { Round, Result } from 'src/app/models/app-models';
import { RoundService } from 'src/app/services/round.service';

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

  private intervalId: NodeJS.Timer | undefined;

  constructor(private roundService: RoundService){
    this.rounds = this.roundService.getRounds();
  }
    
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
    this.seconds = 0;
    this.decSeconds = 0;
    this.roundService.clearRounds();
  }

  public addRound(): void {
    this.roundService.addRaound({
      seconds: this.seconds,
      decSeconds: this.decSeconds,
    });
  }

  public saveResult(userName: string): void {
    if(userName) {
    this.results.push({
      userName: userName,
      seconds: this.seconds,
      decSeconds: this.decSeconds,
    });
    }
  }
}
