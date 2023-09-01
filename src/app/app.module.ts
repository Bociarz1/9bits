import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// prime ng modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';

const primeNgModules = [ButtonModule, InputTextModule,DropdownModule,InputNumberModule,CalendarModule,RadioButtonModule,CheckboxModule,TableModule,ConfirmDialogModule,TooltipModule,ToastModule]

import { FormLayoutComponent } from './layout/form-layout/form-layout.component';
import { PanelLayoutComponent } from './layout/panel-layout/panel-layout.component';
import { NavStepsComponent } from './layout/form-layout/nav-steps/nav-steps.component';
import { StepComponent } from './layout/form-layout/nav-steps/components/step/step.component';
import { ContentComponent } from './layout/form-layout/content/content.component';
import { DescriptionComponent } from './layout/form-layout/content/description/description.component';
import { ConditionsComponent } from './layout/form-layout/content/conditions/conditions.component';
import { TextInputComponent } from './layout/form-layout/content/description/text-input/text-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputAreaComponent } from './layout/form-layout/content/description/text-input-area/text-input-area.component';
import { DropDownComponent } from './layout/form-layout/content/conditions/drop-down/drop-down.component';
import { NumberInputComponent } from './layout/form-layout/content/conditions/number-input/number-input.component';
import { DateInputComponent } from './layout/form-layout/content/conditions/date-input/date-input.component';
import { RadioButtonsComponent } from './layout/form-layout/content/conditions/radio-buttons/radio-buttons.component';
import { CheckboxesComponent } from './layout/form-layout/content/conditions/checkboxes/checkboxes.component';
import { TableComponent } from './layout/panel-layout/table/table.component';
import { LoremContentComponent } from './layout/form-layout/lorem-content/lorem-content.component';
import { DividerComponent } from './layout/form-layout/divider/divider.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLayoutComponent,
    PanelLayoutComponent,
    NavStepsComponent,
    StepComponent,
    ContentComponent,
    DescriptionComponent,
    ConditionsComponent,
    TextInputComponent,
    TextInputAreaComponent,
    DropDownComponent,
    NumberInputComponent,
    DateInputComponent,
    RadioButtonsComponent,
    CheckboxesComponent,
    TableComponent,
    LoremContentComponent,
    DividerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    primeNgModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
