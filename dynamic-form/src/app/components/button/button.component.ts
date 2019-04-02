import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FieldConfig} from '../../field.interface';

@Component({
  selector: 'app-button',
  template: `
    
    <div [FormGroup]="group" >
        <button type="submit"class="btn btn-primary">{{field.label}}</button>
    </div>
    
  `,
  styles: []
})
export class ButtonComponent implements OnInit {
group:FormGroup;
field: FieldConfig;

  constructor() { }

  ngOnInit() {
  }

}
