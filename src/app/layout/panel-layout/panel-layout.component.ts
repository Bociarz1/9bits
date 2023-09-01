import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-layout',
  templateUrl: './panel-layout.component.html',
  styleUrls: ['./panel-layout.component.scss']
})
export class PanelLayoutComponent {
  forms!:any

  constructor(private router:Router) {
    
  }
  ngOnInit() {
    // get all forms from local storage
    const storedFormsArrayJSON = localStorage.getItem('formsArray');
    if (storedFormsArrayJSON) {
      this.forms = JSON.parse(storedFormsArrayJSON);
    }
  }

  addNewForm() {
    // clear form from local storage
    localStorage.removeItem("form")

    // clear editingForm from local storage for secure
    localStorage.removeItem("editingForm")

    // navigate to form route
    this.router.navigate([""])
  }
}
