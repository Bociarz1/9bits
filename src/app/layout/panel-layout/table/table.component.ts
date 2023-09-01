import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers:[ConfirmationService]
})
export class TableComponent {
  constructor(private router:Router,private confirmationService: ConfirmationService, private messageService: MessageService) {}

  @Input('forms') forms!: any;

  deleteRecord(index: number) {
    this.forms.splice(index, 1);
    this.updateLocalStorage()
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Record has been deleted!' });
    
  }

  editRecord(index:number) {
    // get editing item from local storage
    const storedFormsArrayJSON = localStorage.getItem('formsArray');
    if (storedFormsArrayJSON) {
      const storedFormsArray = JSON.parse(storedFormsArrayJSON);

      const editingForm = storedFormsArray[index]

      // store editing form in other space of loacal storage
      const editingFormData = {
        index: index,
        form: editingForm
      }

      const editingformJSON = JSON.stringify(editingFormData);
      localStorage.setItem('editingForm', editingformJSON);

      // route to edit page
      this.router.navigate([""])
    }
  }

  updateLocalStorage() {
    const formsArray = [...this.forms];
    const formsArrayJSON = JSON.stringify(formsArray);
    localStorage.setItem('formsArray', formsArrayJSON);
  }

  confirmDeleting(index:number) {
    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.deleteRecord(index)
        },
        reject: () => {}
    });
}
}
