import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShqllAppComponent } from './shqll-app/shqll-app.component';

const routes: Routes = [
  {
    path: '',
    component: ShqllAppComponent
  },
  {
    path: 'mf',
    loadChildren: () => import('micro-front/HelloModule').then(m => m.HelloModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
