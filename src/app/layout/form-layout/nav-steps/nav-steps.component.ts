import { Component, EventEmitter, Input, Output } from '@angular/core';
import { headers } from './headers';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-nav-steps',
  templateUrl: './nav-steps.component.html',
  styleUrls: ['./nav-steps.component.scss'],
})
export class NavStepsComponent {
  constructor(private router: Router,private messageService: MessageService) {}
  headers: string[] = headers;
  @Output() eventEmitter = new EventEmitter<number>();
  @Input('submitFunc') submitFunc!: (form: FormGroup) => void;
  @Input('editFunc') editFunc!: () => void;
  @Input('form') form!: FormGroup;
  stepNum:number = 1

  emitEvent(stepNumber: number) {
    this.stepNum = stepNumber
    if (this.activateSteps()) {
      this.eventEmitter.emit(stepNumber);
    }
  }

  activateSteps() {
    const formJSON = localStorage.getItem('form');
    if(formJSON) {
      const form = JSON.parse(formJSON)
      if( form.marketing_name || form.technical_name) return true
      else return false
    }
    return false
  }

  invalidToast() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Required inputs can not be empty!' });
}

successToast() {
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form has been send!' });
}

  isEditingMode() {
    const storedEditingFormDataJSON = localStorage.getItem('editingForm');
    if (storedEditingFormDataJSON) return true;
    else return false;
  }

  sendForm(index: number) {
    if (!this.form.valid && index === 9) {
      this.invalidToast()
      this.stepNum = 1
      return
    }
    if (index === 9 && this.activateSteps()) {
      if (!this.isEditingMode()) {
        this.submitFunc(this.form);
        this.successToast()
      } else {
        this.editFunc();
        this.successToast()
      }
    }
  }
}
