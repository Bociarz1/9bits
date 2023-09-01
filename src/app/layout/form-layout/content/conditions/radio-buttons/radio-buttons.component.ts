import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss']
})
export class RadioButtonsComponent {
  selectedCategory: any = 'Bussiness conditions'
  @Input("form") form!: FormGroup;
  @Input("controlName") controlName!: string;

  categories: any[] = [
      { name: 'Bussiness conditions', key: 'BC' },
      { name: 'Base price 100%', key: 'BP' },
  ];

  
}
