import { HomeComponent } from './pages/home/home.component';
import { SumPipe } from './pipes/sum.pipe';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'user/:id', pathMatch: 'full', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SumPipe],
})
export class AppRoutingModule {}
