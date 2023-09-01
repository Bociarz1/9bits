import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLayoutComponent } from './layout/form-layout/form-layout.component';
import { PanelLayoutComponent } from './layout/panel-layout/panel-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FormLayoutComponent,
    loadChildren: () =>
      import('./modules/form/form.module').then((m) => m.FormModule),
  },
  {
    path: 'panel',
    component: PanelLayoutComponent,
    loadChildren: () =>
      import('./modules/panel/panel.module').then((m) => m.PanelModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
