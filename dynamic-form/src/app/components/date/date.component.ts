import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";

@Component({
  selector: 'app-date',
  template: `
    
  `,
  styles: []
})
export class DateComponent implements OnInit {
field:FieldConfig;
group:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
