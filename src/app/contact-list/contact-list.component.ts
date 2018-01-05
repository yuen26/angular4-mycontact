import { Component, OnInit } from '@angular/core';


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

  constructor(private contactService: ContactService) {}

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

  showContact(id) {
    window.location.href = "/contact/detail/" + id;
  }

  deleteContact(id) {
    this.contactService.deleteContact(id);
    this.contactService.listContact().subscribe(
      contacts => this.contacts = contacts
    );
  }
}