import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface Options {
  name: string;
  code: string;
}

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent {
  @Input("placeholder") placeholder!:string;
  @Input("form") form!: FormGroup;
  @Input("controlName") controlName!: string;
  @Input("required") required!: boolean;

  options: Options[] | undefined;
  selectedOption: Options | undefined;
  
  ngOnInit() {
    this.options = [
      { name: 'Portal', code: 'P1' },
      { name: 'Portal2', code: 'P2' },
      { name: 'Portal3', code: 'P3' },
    ];
  }
}
