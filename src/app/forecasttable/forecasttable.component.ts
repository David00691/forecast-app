import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  a: number;
  b: string;
  c: number;
  d: number;
  e: number;
  f: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {a: 1, b: '00:00', c: 10.0, d: 1013, e: 5, f: 0.8 },
  {a: 2, b: '01:00', c: 40.0, d: 1012, e: 6, f: 3.5 },
  {a: 3, b: '02:00', c: 69.4, d: 1011, e: 7, f: 6.2 },
  {a: 4, b: '03:00', c: 90.1, d: 1010, e: 8, f: 8.9 },
  {a: 5, b: '04:00', c: 10.8, d: 1010, e: 9, f: 11.6 },
  {a: 6, b: '05:00', c: 12.1, d: 1011, e: 10, f: 13.3 },
  {a: 7, b: '06:00', c: 14.0, d: 1012, e: 11, f: 15.0 },
  {a: 8, b: '07:00', c: 15.9, d: 1013, e: 12, f: 16.7 },
  {a: 9, b: '08:00', c: 18.9, d: 1013, e: 13, f: 18.4 },
  {a: 10, b: '09:00', c: 20.1, d: 1012, e: 14, f: 20.1 },
  {a: 11, b: '10:00', c: 22.9, d: 1011, e: 15, f: 21.8 },
  {a: 12, b: '11:00', c: 24.3, d: 1010, e: 16, f: 23.5 },
  {a: 13, b: '12:00', c: 26.9, d: 1009, e: 17, f: 25.2 },
  {a: 14, b: '13:00', c: 28.0, d: 1008, e: 18, f: 26.9 },
  {a: 15, b: '14:00', c: 30.9, d: 1007, e: 19, f: 28.6 },
  {a: 16, b: '15:00', c: 32.0, d: 1007, e: 20, f: 30.3 },
  {a: 17, b: '16:00', c: 35.4, d: 1006, e: 21, f: 32.0 },
  {a: 18, b: '17:00', c: 39.8, d: 1005, e: 22, f: 33.7 },
  {a: 19, b: '18:00', c: 39.3, d: 1005, e: 23, f: 35.4 },
  {a: 20, b: '19:00', c: 40.8, d: 1006, e: 24, f: 37.1 },
  {a: 21, b: '20:00', c: 44.9, d: 1007, e: 25, f: 38.8 },
  {a: 22, b: '21:00', c: 47.7, d: 1008, e: 26, f: 40.5 },
  {a: 23, b: '22:00', c: 50.5, d: 1009, e: 27, f: 42.2 },
  {a: 24, b: '23:00', c: 51.1, d: 1010, e: 28, f: 43.9 },
];

@Component({
  selector: 'app-forecasttable',
  templateUrl: './forecasttable.component.html',
  styleUrls: ['./forecasttable.component.css'],
  standalone: true,
  imports: [MatTableModule],
})

export class ForecasttableComponent {
  displayedColumns: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];
  dataSource = ELEMENT_DATA;
}
