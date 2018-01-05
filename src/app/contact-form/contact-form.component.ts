import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
	@Input() contact: Contact = new Contact();

  constructor(
    private contactService: ContactService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (typeof id !== 'undefined' && id !== null) {
      this.contactService.getContact(id).subscribe(
        contact => this.contact = contact
      );
    }
  }

  saveContact() {
    this.contactService.saveContact(this.contact).subscribe(
      contact => this.router.navigate([''])
    );
  }

  goBack() {
    this.router.navigate(['']);
  }

}
