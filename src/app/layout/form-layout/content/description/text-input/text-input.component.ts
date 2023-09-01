import { Component, Input, SimpleChanges } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {

  @Input('label') label!: string;
  @Input('form') form!: FormGroup;
  @Input('controlName') controlName!: string;
  @Input('required') required!:boolean

  value: string | undefined;

}
