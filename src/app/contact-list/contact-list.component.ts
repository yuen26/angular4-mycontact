import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Contact } from '../contact';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
	contacts: Array<Contact> = [];
  term: string;

  constructor(
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit() {
  	this.contactService.listContact().subscribe(
  		contacts => this.contacts = contacts
  	);
  }

  searchContact() {
    setTimeout(() => {
      this.contactService.searchContact(this.term).subscribe(
        contacts => this.contacts = contacts
      )
    }, 500);
  }

  deleteContact(id) {
    this.contactService.deleteContact(id).subscribe(
      () => {
        this.contactService.listContact().subscribe(
          contacts => this.contacts = contacts
        );
      }
    );
  }
}