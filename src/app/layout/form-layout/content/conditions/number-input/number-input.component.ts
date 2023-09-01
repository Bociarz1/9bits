import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent {
  @Input("label") label !:string
  @Input("form") form!: FormGroup;
  @Input("controlName") controlName!: string;
  value1!: number;
}
