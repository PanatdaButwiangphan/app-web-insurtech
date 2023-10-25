import { Component } from '@angular/core';

@Component({
  selector: 'app-lucky-draw',
  templateUrl: './lucky-draw.component.html',
  styleUrls: ['./lucky-draw.component.css'],
})
export class LuckyDrawComponent {
  showdialogreward: boolean = false;

  ngOnInit(): void {
   
  }
  draw() {
    this.showdialogreward = true;
  }

  closeDialog() {
    this.showdialogreward = false;
  }
  getCurrentDate(): string {
    const currentDate = new Date();
    const day = this.padNumber(currentDate.getDate());
    const month = this.padNumber(currentDate.getMonth() + 1); // เริ่มนับเดือนที่ 0
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
  }

  getCurrentTime(): string {
    const currentTime = new Date();
    const hours = this.padNumber(currentTime.getHours());
    const minutes = this.padNumber(currentTime.getMinutes());
    return `${hours}:${minutes} น.`;
  }

  private padNumber(number: number): string {
    return (number < 10 ? '0' : '') + number;
  }
}
