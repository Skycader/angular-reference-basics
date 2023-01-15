import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.scss']
})
export class CycleComponent implements OnInit {
  items = [1,2,3]
  constructor() { }

  ngOnInit(): void {
  }

}
