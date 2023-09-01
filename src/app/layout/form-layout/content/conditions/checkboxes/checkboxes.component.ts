import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss']
})
export class CheckboxesComponent {
  selectedCategories: any[] = [];
  @Input("form") form!: FormGroup;
  @Input("controlName") controlName!: string;
  @Input("name") name!:string
}
