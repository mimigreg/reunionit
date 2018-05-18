import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarToolkitService {

  mondayFirstDayOfWeek = 1; // 1 yes, 0 if this is Sunday

  constructor() { }

  getWeeksDays(dayOfThisWeek: Date): Array<Date> {
    const weekDays: Array<Date> = [];
    const currentDayOfWeek = dayOfThisWeek.getUTCDay();
    for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
      const dayToAdd = new Date(dayOfThisWeek);
      dayToAdd.setUTCDate(dayToAdd.getUTCDate() + dayOfWeek - currentDayOfWeek + this.mondayFirstDayOfWeek);
      weekDays.push(dayToAdd);
    }
    return weekDays;
  }

  getMonthDays(dayOfThisMonth: Date): Array<Date> {
    const monthDays: Array<Date> = [];
    return monthDays;
  }
}
