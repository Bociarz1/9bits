import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  SimpleChange,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent {
  @Input('header') header!: string;
  @Input('index') index!: number;
  @Input('stepNum') stepNum: number = 0;

  activateSteps() {
    const formJSON = localStorage.getItem('form');
    if (formJSON) {
      const form = JSON.parse(formJSON);
      if (form.marketing_name || form.technical_name) return true;
      else return false;
    }
    return false;
  }

  // initial styles
  setContainerStyles() {
    // block action upon pass inputs values
    if (!this.activateSteps()) {
      this.stepNum = 1;
    }
    return {
      transform:
        this.index + 1 === this.stepNum ? 'translateX(5px)' : 'translateX(0)',
    };
  }

  // container
  onMouseEnter(el: HTMLElement) {
    if (!this.activateSteps() && this.index > 0) {
      (el.style.backgroundColor = '#EFF1F3'),
        (el.style.transition = 'none'),
        (el.style.cursor = 'auto');
    } else if (this.activateSteps()) {
      (el.style.backgroundColor = '#d9dcde'),
        (el.style.transition = '0.3s ease-in-out');
      el.style.cursor = 'pointer';
    }
  }

  onMouseOut(el: HTMLElement) {
    if (this.activateSteps()) {
      
    }
  }

  setCircleStyles() {
    // block action upon pass inputs values
    if (!this.activateSteps()) {
      this.stepNum = 1;
    }
    return {
      background: this.index + 1 === this.stepNum ? '#991300' : '#666666',
    };
  }
}
