import { Component, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-layout',
  templateUrl: './form-layout.component.html',
  styleUrls: ['./form-layout.component.scss'],
})
export class FormLayoutComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      marketing_name: ['', Validators.required],
      technical_name: [''],
      description: [''],
      portal: ['', Validators.required],
      type: ['', Validators.required],
      benefits: [''],
      start_date: ['', Validators.required],
      end_date: [''],
      radio_button: [''],
      first_checkbox: [''],
      second_checkbox: [''],
    });

    // Retrieve stored form value from localStorage
    const storedFormJSON = localStorage.getItem('form');
    if (storedFormJSON) {
      const storedForm = JSON.parse(storedFormJSON);
      this.form.patchValue(storedForm);
    }

    // Subscribe to valueChanges
    this.form.valueChanges.subscribe((newValue) => {
      const formJSON = JSON.stringify(newValue);
      localStorage.setItem('form', formJSON);
    });

    // check if this is editing mode
    // get editing item data from local storage
    const storedEditingFormDataJSON = localStorage.getItem('editingForm');
    if (storedEditingFormDataJSON) {
      const storedEditingFormData = JSON.parse(storedEditingFormDataJSON);

      // set editing data into inputs
      this.form.patchValue(storedEditingFormData.form);
    }
  }

  submitForm(form: FormGroup) {
    // get all forms from local storage
    let formArr = [];
    const storedFormsArrayJSON = localStorage.getItem('formsArray');
    if (storedFormsArrayJSON) {
      const storedFormsArray = JSON.parse(storedFormsArrayJSON);
      formArr = storedFormsArray;
    }

    // add new form to forms array in loacl storage
    const formsArray = [...formArr, form.value];
    const formsArrayJSON = JSON.stringify(formsArray);
    localStorage.setItem('formsArray', formsArrayJSON);

    // clear form from local storage
    localStorage.removeItem('form');

    // navigate to /panel route
    this.router.navigate(['/panel']);
  }

  editForm() {
    // get all forms from local storage
    let formArr = [];
    const storedFormsArrayJSON = localStorage.getItem('formsArray');
    if (storedFormsArrayJSON) {
      const storedFormsArray = JSON.parse(storedFormsArrayJSON);
      formArr = storedFormsArray;
    }

    // get editingForm data (index) from  local storage
    let editingForm;
    let index;
    const storedEditingFormJSON = localStorage.getItem('editingForm');
    if (storedEditingFormJSON) {
      const storedEditingForm = JSON.parse(storedEditingFormJSON);
      editingForm = this.form.value;
      index = storedEditingForm.index;
    }

    // update editing form in all forms
    formArr[index] = editingForm;
    // console.log(index);

    // send updating form to local storage
    const formsArrayJSON = JSON.stringify(formArr);
    localStorage.setItem('formsArray', formsArrayJSON);

    // delete editingForm from local storage
    localStorage.removeItem('editingForm');

    // route to panel
    this.router.navigate(['/panel']);
  }

  // routing between steps
  stepNum: number = 1;
  handleChildEvent(stepNumber: number) {
    this.stepNum = stepNumber;
  }
}
