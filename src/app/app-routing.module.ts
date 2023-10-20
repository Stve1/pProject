import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponentComponent } from './page-component/page-component.component';

const routes: Routes = [
  {path: '', component: PageComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
