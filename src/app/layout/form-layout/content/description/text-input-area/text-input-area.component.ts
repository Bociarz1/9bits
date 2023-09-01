import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-input-area',
  templateUrl: './text-input-area.component.html',
  styleUrls: ['./text-input-area.component.scss']
})
export class TextInputAreaComponent {
  @Input('label') label!: string;
  @Input('form') form!: FormGroup;
  @Input('controlName') controlName!: string;

  value: string | undefined;

}
