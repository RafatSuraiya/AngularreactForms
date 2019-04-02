import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
@Component({
  selector: "app-input",
  template: `
<form [formGroup]="group">
<input [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType">
<div *ngFor="let validation of field.validations;">
<div *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</div>
</ng-container>
</form>
`,
  styles: []
})
export class InputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
