import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lorem-content',
  templateUrl: './lorem-content.component.html',
  styleUrls: ['./lorem-content.component.scss']
})
export class LoremContentComponent {
  @Input("stepNumber") stepNumber!:number
  
}
