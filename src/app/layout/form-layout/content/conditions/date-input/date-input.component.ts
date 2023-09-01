import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent {
  date!: Date | string;
  @Input("form") form!: FormGroup;
  @Input("controlName") controlName!: string;
  @Input("required") required!: boolean;


  convertToDate(value: any): Date | string {
    if (typeof value === 'string') {
      // Attempt to convert the string to a Date object
      const dateObject = new Date(value);
      if (!isNaN(dateObject.getTime())) {
        return dateObject;
      }
    }
    return value; // Return the value as is if not a valid date string
  }

  ngOnInit() {
    this.date = this.convertToDate(this.form.value[this.controlName]);
  }
  
}
