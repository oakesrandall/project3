import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'signup',
		component: SignupComponent
	}

];

@NgModule({
	declarations: [
		LoginComponent,
		SignupComponent
	],
    imports: [ RouterModule.forRoot(routes), FormsModule ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}