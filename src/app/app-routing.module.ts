import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { FooterOnlyFrameComponent } from './footer-only-frame/footer-only-frame.component';
import { FullFrameComponent } from './full-frame/full-frame.component';


// Routing inspired by https://medium.com/angular-in-depth/angular-routing-reusing-common-layout-for-pages-from-different-modules-440a23f86b57
const routes: Routes = [
  { path: '', redirectTo: 'sign-up', pathMatch: 'full' },
  { path: 'sign-up', component: FooterOnlyFrameComponent, children: [{path: '', component: SignUpComponent}] },
  { path: 'home', component: FullFrameComponent, children: [{path: '', component: UserHomeComponent}] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
