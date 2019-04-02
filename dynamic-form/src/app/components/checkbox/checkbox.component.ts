import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";

@Component({
  selector: 'app-checkbox',
  template: `
  <div class="form-group" [FormGroup]="group">
  </div>
  `,
  styles: []
})
export class CheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
