import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

const authRoute: Routes = [
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(authRoute)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
