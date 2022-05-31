import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';

const routes: Routes = [
  {path: '', component: CabecalhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
