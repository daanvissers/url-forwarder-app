import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUrlComponent } from './pages/add-url/add-url.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'add-new-url', component: AddUrlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
