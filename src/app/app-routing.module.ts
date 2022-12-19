import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StoperComponent } from './components/stoper/stoper.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {path: "stoper", component: StoperComponent},
  {path: "userList", component: UsersListComponent},
  {path: "", component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
