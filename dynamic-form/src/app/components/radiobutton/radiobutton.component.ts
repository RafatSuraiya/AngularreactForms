import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";

@Component({
  selector: 'app-radiobutton',
  template: `
    <div class="form-group" [FormGroup]="group">
    </div>
  `,
  styles: []
})
export class RadiobuttonComponent implements OnInit {
field:FieldConfig;
group:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
