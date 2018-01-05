import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
	{path: '', redirectTo: '/contacts', pathMatch: 'full'},
	{path: 'contacts', component: ContactListComponent},
	{path: 'contact/new', component: ContactFormComponent},
	{path: 'contact/:id', component: ContactFormComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
