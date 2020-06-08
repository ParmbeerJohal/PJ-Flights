import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import newly added components
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

// Add new components to routes array
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
