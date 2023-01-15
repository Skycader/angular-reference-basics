import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field-simple',
  templateUrl: './input-field-simple.component.html',
  styleUrls: ['./input-field-simple.component.scss']
})
export class InputFieldSimpleComponent implements OnInit {

  data:string = ""
  constructor() { }

  ngOnInit(): void {
  }

  onInput(event: any) {
    this.data = event.target.value
  }
}
